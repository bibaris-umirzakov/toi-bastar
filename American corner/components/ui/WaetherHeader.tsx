import { Search, MapPin, MoreHorizontal, Home, CloudSun, Settings, Thermometer } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { useWeather } from "./WeatherContext";

export function WeatherHeader() {
  const { selectedCity, setSelectedCity, favoritesCities, temperatureUnit, setTemperatureUnit } = useWeather();
  
  const currentTime = new Date().toLocaleDateString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <header className="bg-card border-b border-border p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Weather</h1>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <Select value={selectedCity.name} onValueChange={(value) => {
              const city = favoritesCities.find(c => c.name === value);
              if (city) setSelectedCity(city);
            }}>
              <SelectTrigger className="w-auto border-none bg-transparent p-0 h-auto">
                <SelectValue className="text-foreground font-medium" />
              </SelectTrigger>
              <SelectContent>
                {favoritesCities.map((city) => (
                  <SelectItem key={city.name} value={city.name}>
                    <div className="flex items-center gap-2">
                      <span>{city.name}</span>
                      <span className="text-muted-foreground text-sm">{city.region}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Badge variant="secondary" className="text-xs">
            Updated {lastUpdated}
          </Badge>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search location..." 
              className="pl-10 w-48"
            />
          </div>
          
          <Select value={temperatureUnit} onValueChange={(value: "celsius" | "fahrenheit") => setTemperatureUnit(value)}>
            <SelectTrigger className="w-auto border-none bg-transparent p-0 h-auto">
              <Thermometer className="w-4 h-4 text-muted-foreground" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="celsius">°C</SelectItem>
              <SelectItem value="fahrenheit">°F</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="text-sm text-muted-foreground hidden lg:block">
            {currentTime}
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Home className="w-4 h-4 mr-2" />
                Home
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CloudSun className="w-4 h-4 mr-2" />
                Weather
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}