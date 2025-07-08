

export default function HallCard({ hall })  {
  return (
    <div style={{ border: "3px dashed #ccc", padding: 10, marginTop: 20 }}>
      <img src={hall.image} alt={hall.name} style={{ width: "100%" }} />
      <h2>{hall.name}</h2>
      <p>Цена: {hall.pricePerPerson} ₸</p>
      <p>Вместимость: {hall.capacity}</p>
      <p>Район: {hall.location}</p>
    </div>
  );
}
