import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Thermometer, Droplets, Wind, Eye, Gauge, Sun, Moon, Navigation, Clock, Zap, TreePine } from "lucide-react";
import { useWeather } from "./WeatherContext";

export function WeatherDetails() {
  const { temperatureUnit } = useWeather();
  
  const convertTemp = (temp: number) => {
    if (temperatureUnit === 'fahrenheit') {
      return Math.round((temp * 9/5) + 32);
    }
    return temp;
  };

  const tempSymbol = temperatureUnit === 'celsius' ? '°C' : '°F';
  const windUnit = temperatureUnit === 'celsius' ? 'm/s' : 'mph';
  const windSpeed = temperatureUnit === 'celsius' ? '4' : '9';
  const visibilityUnit = temperatureUnit === 'celsius' ? 'km' : 'miles';
  const visibility = temperatureUnit === 'celsius' ? '10' : '6.2';
  const pressureUnit = temperatureUnit === 'celsius' ? 'hPa' : 'inHg';
  const pressureValue = temperatureUnit === 'celsius' ? '1013' : '29.9';

  const details = [
    {
      title: "Feels Like",
      value: `+${convertTemp(15)}${tempSymbol}`,
      icon: Thermometer,
      description: "Similar to actual temperature"
    },
    {
      title: "Humidity",
      value: "65%",
      icon: Droplets,
      progress: 65,
      description: "Comfortable level"
    },
    {
      title: "Wind Speed",
      value: `${windSpeed} ${windUnit}`,
      icon: Wind,
      direction: "NE",
      description: "Light breeze"
    },
    {
      title: "Visibility",
      value: `${visibility} ${visibilityUnit}`,
      icon: Eye,
      progress: 83,
      description: "Good visibility"
    },
    {
      title: "Pressure",
      value: `${pressureValue} ${pressureUnit}`,
      icon: Gauge,
      description: "Normal pressure"
    },
    {
      title: "UV Index",
      value: "3",
      icon: Sun,
      progress: 30,
      description: "Moderate",
      badge: "Moderate"
    },
    {
      title: "Dew Point",
      value: `+${convertTemp(12)}${tempSymbol}`,
      icon: Droplets,
      description: "Comfortable humidity"
    },
    {
      title: "Air Quality",
      value: "Good",
      icon: TreePine,
      progress: 85,
      description: "AQI: 42",
      badge: "Good"
    },
    {
      title: "Sunrise",
      value: "6:47 AM",
      icon: Sun,
      description: "7h 13m ago"
    },
    {
      title: "Sunset",
      value: "6:52 PM",
      icon: Moon,
      description: "In 8h 52m"
    },
    {
      title: "Daylight",
      value: "12h 5m",
      icon: Clock,
      description: "Total daylight duration"
    },
    {
      title: "Moon Phase",
      value: "Waxing Crescent",
      icon: Moon,
      progress: 25,
      description: "25% illuminated"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{detail.title}</span>
                  </div>
                  {detail.badge && (
                    <Badge variant={detail.badge === "Good" ? "default" : "secondary"} className="text-xs">
                      {detail.badge}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-medium">{detail.value}</span>
                  {detail.direction && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Navigation className="w-3 h-3" />
                      {detail.direction}
                    </div>
                  )}
                </div>
                {detail.progress !== undefined && (
                  <Progress 
                    value={detail.progress} 
                    className="h-2"
                  />
                )}
                <p className="text-sm text-muted-foreground">{detail.description}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}