import os
from datetime import datetime, timedelta, date
from typing import Optional, List, Dict, Any

from fastapi import FastAPI, HTTPException, Depends, status, Body
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from pydantic import BaseModel, EmailStr
from sqlmodel import SQLModel, Field, create_engine, Session, select
from passlib.context import CryptContext
import jwt

# Load env (simple)
JWT_SECRET = os.getenv("JWT_SECRET", "dev_secret_change_me")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "10080"))  # minutes
DB_FILE = os.getenv("DB_FILE", "./dev.sqlite")

# Database
DATABASE_URL = f"sqlite:///{DB_FILE}"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

app = FastAPI(title="Fitness Tracker API (FastAPI + SQLite)")

# --- Models ---
class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: EmailStr = Field(index=True, nullable=False, unique=True)
    password_hash: str
    name: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Habit(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(index=True, nullable=False)
    title: str
    notes: Optional[str] = None
    active: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Water(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(index=True, nullable=False)
    liters: float
    date: date
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Sleep(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(index=True, nullable=False)
    hours: float
    date: date
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Workout(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(index=True, nullable=False)
    type: Optional[str] = None
    duration_minutes: Optional[int] = None
    meta: Optional[str] = None  # store JSON string
    date: date
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Points(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(index=True, nullable=False)
    value: int = Field(default=0)
    date: date
    created_at: datetime = Field(default_factory=datetime.utcnow)

# --- Pydantic schemas ---
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: Optional[str] = None

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UserOut(BaseModel):
    id: int
    email: EmailStr
    name: Optional[str]
    created_at: datetime

class HabitCreate(BaseModel):
    title: str
    notes: Optional[str] = None

class WaterCreate(BaseModel):
    liters: float
    date: Optional[date] = None

class SleepCreate(BaseModel):
    hours: float
    date: Optional[date] = None

class WorkoutCreate(BaseModel):
    type: Optional[str] = None
    duration_minutes: Optional[int] = None
    meta: Optional[Dict[str, Any]] = None
    date: Optional[date] = None

class PointsCreate(BaseModel):
    value: int
    date: Optional[date] = None

# --- DB init ---
def init_db():
    SQLModel.metadata.create_all(engine)

@app.on_event("startup")
def on_startup():
    init_db()

# --- Auth helpers ---
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded = jwt.encode(to_encode, JWT_SECRET, algorithm="HS256")
    return encoded

def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        user_id = int(payload.get("id"))
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid auth token")
    with Session(engine) as sess:
        user = sess.get(User, user_id)
        if not user:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")
        return user

# --- Auth routes ---
@app.post("/auth/register", response_model=TokenResponse)
def register(payload: UserCreate):
    with Session(engine) as sess:
        stmt = select(User).where(User.email == payload.email)
        existing = sess.exec(stmt).first()
        if existing:
            raise HTTPException(status_code=409, detail="Email already registered")
        hashed = hash_password(payload.password)
        user = User(email=payload.email, password_hash=hashed, name=payload.name)
        sess.add(user)
        sess.commit()
        sess.refresh(user)
        token = create_access_token({"id": user.id, "email": user.email})
        return TokenResponse(access_token=token)

@app.post("/auth/login", response_model=TokenResponse)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    with Session(engine) as sess:
        stmt = select(User).where(User.email == form_data.username)
        user = sess.exec(stmt).first()
        if not user or not verify_password(form_data.password, user.password_hash):
            raise HTTPException(status_code=401, detail="Incorrect email or password")
        token = create_access_token({"id": user.id, "email": user.email})
        return TokenResponse(access_token=token)

# --- User routes ---
@app.get("/user/me", response_model=UserOut)
def get_me(current_user: User = Depends(get_current_user)):
    return UserOut(id=current_user.id, email=current_user.email, name=current_user.name, created_at=current_user.created_at)

@app.put("/user/me", response_model=UserOut)
def update_me(name: Optional[str] = Body(None), current_user: User = Depends(get_current_user)):
    with Session(engine) as sess:
        user = sess.get(User, current_user.id)
        if name is not None:
            user.name = name
            sess.add(user)
            sess.commit()
            sess.refresh(user)
        return UserOut(id=user.id, email=user.email, name=user.name, created_at=user.created_at)

# --- Tracking routes ---
# HABITS
@app.post("/api/habits")
def create_habit(payload: HabitCreate, current_user: User = Depends(get_current_user)):
    habit = Habit(user_id=current_user.id, title=payload.title, notes=payload.notes)
    with Session(engine) as sess:
        sess.add(habit); sess.commit(); sess.refresh(habit)
        return habit

@app.get("/api/habits", response_model=List[Habit])
def list_habits(current_user: User = Depends(get_current_user)):
    with Session(engine) as sess:
        stmt = select(Habit).where(Habit.user_id == current_user.id).order_by(Habit.created_at.desc())
        return sess.exec(stmt).all()

@app.delete("/api/habits/{habit_id}")
def delete_habit(habit_id: int, current_user: User = Depends(get_current_user)):
    with Session(engine) as sess:
        habit = sess.get(Habit, habit_id)
        if not habit or habit.user_id != current_user.id:
            raise HTTPException(status_code=404, detail="Habit not found")
        sess.delete(habit); sess.commit()
        return {"success": True}

# WATER
@app.post("/api/water")
def add_water(payload: WaterCreate, current_user: User = Depends(get_current_user)):
    dt = payload.date or date.today()
    entry = Water(user_id=current_user.id, liters=payload.liters, date=dt)
    with Session(engine) as sess:
        sess.add(entry); sess.commit(); sess.refresh(entry)
        return {"id": entry.id}

@app.get("/api/water", response_model=List[Water])
def get_water(date_str: Optional[str] = None, current_user: User = Depends(get_current_user)):
    with Session(engine) as sess:
        if date_str:
            qdate = date.fromisoformat(date_str)
            stmt = select(Water).where(Water.user_id == current_user.id, Water.date == qdate).order_by(Water.created_at.desc())
        else:
            stmt = select(Water).where(Water.user_id == current_user.id).order_by(Water.date.desc()).limit(200)
        return sess.exec(stmt).all()

# SLEEP
@app.post("/api/sleep")
def add_sleep(payload: SleepCreate, current_user: User = Depends(get_current_user)):
    dt = payload.date or date.today()
    entry = Sleep(user_id=current_user.id, hours=payload.hours, date=dt)
    with Session(engine) as sess:
        sess.add(entry); sess.commit(); sess.refresh(entry)
        return {"id": entry.id}

@app.get("/api/sleep", response_model=List[Sleep])
def get_sleep(date_str: Optional[str] = None, current_user: User = Depends(get_current_user)):
    with Session(engine) as sess:
        if date_str:
            qdate = date.fromisoformat(date_str)
            stmt = select(Sleep).where(Sleep.user_id == current_user.id, Sleep.date == qdate).order_by(Sleep.created_at.desc())
        else:
            stmt = select(Sleep).where(Sleep.user_id == current_user.id).order_by(Sleep.date.desc()).limit(200)
        return sess.exec(stmt).all()

# WORKOUTS
@app.post("/api/workouts")
def add_workout(payload: WorkoutCreate, current_user: User = Depends(get_current_user)):
    dt = payload.date or date.today()
    meta_str = None
    if payload.meta is not None:
        import json
        meta_str = json.dumps(payload.meta)
    entry = Workout(user_id=current_user.id, type=payload.type, duration_minutes=payload.duration_minutes, meta=meta_str, date=dt)
    with Session(engine) as sess:
        sess.add(entry); sess.commit(); sess.refresh(entry)
        return {"id": entry.id}

@app.get("/api/workouts")
def get_workouts(current_user: User = Depends(get_current_user)):
    with Session(engine) as sess:
        stmt = select(Workout).where(Workout.user_id == current_user.id).order_by(Workout.date.desc()).limit(200)
        rows = sess.exec(stmt).all()
        # parse meta
        import json
        for r in rows:
            if r.meta:
                try:
                    r.meta = json.loads(r.meta)
                except Exception:
                    r.meta = {"raw": r.meta}
        return rows

# POINTS (upsert by date)
@app.post("/api/points")
def add_points(payload: PointsCreate, current_user: User = Depends(get_current_user)):
    dt = payload.date or date.today()
    with Session(engine) as sess:
        stmt = select(Points).where(Points.user_id == current_user.id, Points.date == dt)
        existing = sess.exec(stmt).first()
        if existing:
            existing.value = existing.value + int(payload.value)
            sess.add(existing); sess.commit(); sess.refresh(existing)
            return {"id": existing.id}
        else:
            p = Points(user_id=current_user.id, value=int(payload.value), date=dt)
            sess.add(p); sess.commit(); sess.refresh(p)
            return {"id": p.id}

# DAILY SUMMARY
@app.get("/api/daily-summary")
def daily_summary(date_str: Optional[str] = None, current_user: User = Depends(get_current_user)):
    qdate = date.fromisoformat(date_str) if date_str else date.today()
    with Session(engine) as sess:
        water_total = sess.exec(select(Water).where(Water.user_id == current_user.id, Water.date == qdate)).all()
        water_sum = sum(w.liters for w in water_total) if water_total else 0
        sleep_total = sess.exec(select(Sleep).where(Sleep.user_id == current_user.id, Sleep.date == qdate)).all()
        sleep_sum = sum(s.hours for s in sleep_total) if sleep_total else 0
        workouts = sess.exec(select(Workout).where(Workout.user_id == current_user.id, Workout.date == qdate)).all()
        points_entry = sess.exec(select(Points).where(Points.user_id == current_user.id, Points.date == qdate)).first()
        pts = points_entry.value if points_entry else 0
        # parse workout meta for output
        import json
        out_workouts = []
        for w in workouts:
            meta = None
            if isinstance(w.meta, str):
                try:
                    meta = json.loads(w.meta)
                except Exception:
                    meta = {"raw": w.meta}
            out_workouts.append({"id": w.id, "type": w.type, "duration_minutes": w.duration_minutes, "meta": meta})
        return {
            "date": qdate.isoformat(),
            "water_liters": water_sum,
            "sleep_hours": sleep_sum,
            "workouts": out_workouts,
            "points": pts
        }

# Health
@app.get("/ping")
def ping():
    return {"ok": True}

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Route for your homepage
@app.route('/')
def home():
    return render_template('index.html')

# Example route to receive data from HTML
@app.route('/save_data', methods=['POST'])
def save_data():
    data = request.json
    print(data)  # shows in terminal
    return jsonify({"message": "Data received successfully!"})

if __name__ == '__main__':
    app.run(debug=True)

