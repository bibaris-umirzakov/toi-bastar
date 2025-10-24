import { WeatherProvider } from "./components/WeatherContext";
import { WeatherHeader} from "./components/WeatherHeader";
import { CurrentWeather } from "./components/CurrentWeather";
import { HourlyForecast } from "./components/HourlyForecast";
import { TenDayForecast } from "./components/TenDayForecast";
import { WeatherMap } from "./components/WeatherMap";
import { WeatherDetails } from "./components/WeatherDetails";
import { WeatherAlerts } from "./components/WeatherAlerts";
import { WeatherSkeleton } from "./components/LoadingSkeleton";
import { useWeather } from "./components/WeatherContext";
import { Badge } from "./components/ui/badge";
import { MapPin } from "lucide-react";

function WeatherApp() {
  const { isLoading, favoritesCities, selectedCity } = useWeather();

  if (isLoading) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background">
      <WeatherHeader />
      
      <main className="max-w-7xl mx-auto p-4 space-y-6">
      
        <WeatherAlerts />
        
     
        <div className="mb-6">
          <CurrentWeather />
        </div>
        
       
        <div className="mb-6">
          <HourlyForecast />
        </div>
        
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       
          <div className="space-y-6">
            <TenDayForecast />
          </div>
          
        
          <div className="space-y-6">
            <WeatherMap />
            <WeatherDetails />
          </div>
        </div>
        
      
        <div className="mt-8 p-6 bg-card rounded-lg border">
          <div className="text-center mb-4">
            <h3 className="text-lg font-medium mb-2">Weather in Kazakhstan Cities</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {favoritesCities.map((city) => (
                <div key={city.name} className="flex items-center gap-2 bg-muted rounded-lg p-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div className="text-left">
                    <div className="font-medium">{city.name}</div>
                    <div className="text-sm text-muted-foreground">+{Math.floor(Math.random() * 15) + 10}°C</div>
                  </div>
                  {city.name === selectedCity.name && (
                    <Badge variant="default" className="text-xs">Current</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Weather data provided by Kazakhstan meteorological services</p>
            <p className="mt-1">Last updated: {new Date().toLocaleTimeString()} • Today is Tuesday, September 30, 2025</p>
            <p className="mt-2 text-xs">Historical weather: On this day last year, temperature was +19°C in {selectedCity.name}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
}