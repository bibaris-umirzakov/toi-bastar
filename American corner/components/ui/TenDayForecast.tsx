import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Cloud, Sun, CloudRain, CloudSnow, Zap, ChevronDown, Wind, Gauge, Droplets } from "lucide-react";
import { useState } from "react";
import { useWeather } from "./WeatherContext";

const tenDayData = [
  { 
    day: "Today", 
    date: "Sep 30", 
    icon: Cloud, 
    high: 26, 
    low: 18, 
    precip: "20%", 
    condition: "Partly Cloudy",
    details: { wind: "4 m/s NE", pressure: "1013 hPa", humidity: "65%" }
  },
  { 
    day: "Tomorrow", 
    date: "Oct 1", 
    icon: CloudRain, 
    high: 22, 
    low: 15, 
    precip: "80%", 
    condition: "Light Rain",
    details: { wind: "6 m/s SW", pressure: "1008 hPa", humidity: "85%" }
  },
  { 
    day: "Wednesday", 
    date: "Oct 2", 
    icon: Sun, 
    high: 25, 
    low: 17, 
    precip: "10%", 
    condition: "Sunny",
    details: { wind: "3 m/s E", pressure: "1018 hPa", humidity: "45%" }
  },
  { 
    day: "Thursday", 
    date: "Oct 3", 
    icon: Cloud, 
    high: 23, 
    low: 16, 
    precip: "30%", 
    condition: "Cloudy",
    details: { wind: "5 m/s N", pressure: "1015 hPa", humidity: "70%" }
  },
  { 
    day: "Friday", 
    date: "Oct 4", 
    icon: CloudRain, 
    high: 20, 
    low: 12, 
    precip: "90%", 
    condition: "Heavy Rain",
    details: { wind: "8 m/s W", pressure: "1005 hPa", humidity: "95%" }
  },
  { 
    day: "Saturday", 
    date: "Oct 5", 
    icon: Zap, 
    high: 21, 
    low: 14, 
    precip: "70%", 
    condition: "Thunderstorms",
    details: { wind: "12 m/s SW", pressure: "1002 hPa", humidity: "88%" }
  },
  { 
    day: "Sunday", 
    date: "Oct 6", 
    icon: Sun, 
    high: 24, 
    low: 16, 
    precip: "5%", 
    condition: "Sunny",
    details: { wind: "2 m/s SE", pressure: "1020 hPa", humidity: "40%" }
  },
  { 
    day: "Monday", 
    date: "Oct 7", 
    icon: Cloud, 
    high: 22, 
    low: 15, 
    precip: "25%", 
    condition: "Partly Cloudy",
    details: { wind: "4 m/s NE", pressure: "1016 hPa", humidity: "60%" }
  },
  { 
    day: "Tuesday", 
    date: "Oct 8", 
    icon: CloudSnow, 
    high: 18, 
    low: 8, 
    precip: "60%", 
    condition: "Snow Showers",
    details: { wind: "7 m/s N", pressure: "1010 hPa", humidity: "80%" }
  },
  { 
    day: "Wednesday", 
    date: "Oct 9", 
    icon: Sun, 
    high: 19, 
    low: 10, 
    precip: "0%", 
    condition: "Clear",
    details: { wind: "3 m/s E", pressure: "1022 hPa", humidity: "35%" }
  },
];

export function TenDayForecast() {
  const { temperatureUnit } = useWeather();
  const [expandedDays, setExpandedDays] = useState<number[]>([]);

  const toggleDay = (index: number) => {
    setExpandedDays(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const convertTemp = (temp: number) => {
    if (temperatureUnit === 'fahrenheit') {
      return Math.round((temp * 9/5) + 32);
    }
    return temp;
  };

  const tempSymbol = temperatureUnit === 'celsius' ? '°C' : '°F';

  return (
    <Card>
      <CardHeader>
        <CardTitle>10-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {tenDayData.map((day, index) => {
            const IconComponent = day.icon;
            const isExpanded = expandedDays.includes(index);
            
            return (
              <Collapsible key={index} open={isExpanded} onOpenChange={() => toggleDay(index)}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-20 text-sm text-left">
                        <div className="font-medium">{day.day}</div>
                        <div className="text-muted-foreground text-xs">{day.date}</div>
                      </div>
                      <IconComponent className="w-6 h-6 text-blue-500" />
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium">{day.condition}</div>
                        <div className="text-xs text-blue-500">{day.precip} chance of rain</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium">+{convertTemp(day.high)}{tempSymbol}</span>
                      <span className="text-muted-foreground">+{convertTemp(day.low)}{tempSymbol}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-4 pb-4 bg-muted/20">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-muted-foreground" />
                        <span>{day.details.wind}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-muted-foreground" />
                        <span>{day.details.pressure}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-muted-foreground" />
                        <span>{day.details.humidity}</span>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}