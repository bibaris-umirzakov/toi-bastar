import { Cloud, Wind, Eye, Droplets } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useWeather } from "./WeatherContext";

export function CurrentWeather() {
  const { temperatureUnit, selectedCity } = useWeather();
  
  // Mock weather data - in real app this would come from API
  const currentTemp = temperatureUnit === 'celsius' ? 17 : 63;
  const feelsLikeTemp = temperatureUnit === 'celsius' ? 15 : 59;
  const tempSymbol = temperatureUnit === 'celsius' ? '°C' : '°F';
  const windSpeed = temperatureUnit === 'celsius' ? '4 m/s' : '9 mph';
  
  // Dynamic background based on weather condition
  const weatherCondition = "cloudy"; // could be: sunny, cloudy, rainy, snowy
  const getBackgroundClass = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900 dark:to-orange-900';
      case 'rainy':
        return 'bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-900';
      case 'snowy':
        return 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800';
      default:
        return 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900';
    }
  };

  return (
    <Card className={getBackgroundClass()}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-6">
              <Cloud className="w-20 h-20 text-blue-500" />
              <div>
                <div className="text-6xl font-light">+{currentTemp}{tempSymbol}</div>
                <div className="text-lg text-muted-foreground mt-1">Cloudy</div>
                <div className="text-sm text-muted-foreground">
                  Feels like +{feelsLikeTemp}{tempSymbol}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-muted-foreground" />
                <span>{windSpeed}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span>10 km</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-muted-foreground" />
                <span>65%</span>
              </div>
              <div className="text-muted-foreground">
                UV Index: 3
              </div>
            </div>
            
            {/* Mini summary line */}
            <div className="text-sm font-medium bg-white/20 dark:bg-black/20 rounded-lg p-3">
              Cloudy, {currentTemp}{tempSymbol}, feels like {feelsLikeTemp}{tempSymbol}, wind {windSpeed}
            </div>
          </div>
          
          <div className="hidden md:block">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1757970326123-26a4b0e86358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwY2xvdWRzJTIwc2t5fGVufDF8fHx8MTc1OTExODYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Current weather conditions"
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}