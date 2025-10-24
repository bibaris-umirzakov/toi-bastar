import { createContext, useContext, useState, ReactNode } from 'react';

export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type City = {
  name: string;
  country: string;
  region: string;
  coords: { lat: number; lng: number };
};

export interface WeatherContextType {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  temperatureUnit: TemperatureUnit;
  setTemperatureUnit: (unit: TemperatureUnit) => void;
  favoritesCities: City[];
  addToFavorites: (city: City) => void;
  removeFromFavorites: (cityName: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const kazakhstanCities: City[] = [
  { name: 'Almaty', country: 'Kazakhstan', region: 'Almaty Region', coords: { lat: 43.2381, lng: 76.9452 } },
  { name: 'Astana', country: 'Kazakhstan', region: 'Nur-Sultan', coords: { lat: 51.1694, lng: 71.4491 } },
  { name: 'Shymkent', country: 'Kazakhstan', region: 'Shymkent', coords: { lat: 42.3417, lng: 69.5901 } },
];

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<City>(kazakhstanCities[0]); // Default to Almaty
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');
  const [favoritesCities, setFavoritesCities] = useState<City[]>(kazakhstanCities);
  const [isLoading, setIsLoading] = useState(false);

  const addToFavorites = (city: City) => {
    setFavoritesCities(prev => {
      if (prev.some(c => c.name === city.name)) return prev;
      return [...prev, city];
    });
  };

  const removeFromFavorites = (cityName: string) => {
    setFavoritesCities(prev => prev.filter(c => c.name !== cityName));
  };

  return (
    <WeatherContext.Provider value={{
      selectedCity,
      setSelectedCity,
      temperatureUnit,
      setTemperatureUnit,
      favoritesCities,
      addToFavorites,
      removeFromFavorites,
      isLoading,
      setIsLoading
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}