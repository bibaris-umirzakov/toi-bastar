import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Layers, ZoomIn, ZoomOut, RotateCcw, Maximize2, CloudRain, Thermometer, Wind } from "lucide-react";
import { useState } from "react";

export function WeatherMap() {
  const [activeLayer, setActiveLayer] = useState("precipitation");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const getLayerOverlay = () => {
    switch (activeLayer) {
      case "temperature":
        return "bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-orange-500/20";
      case "wind":
        return "bg-gradient-to-br from-green-500/20 via-teal-500/20 to-blue-500/20";
      default:
        return "bg-gradient-to-br from-transparent via-blue-500/20 to-blue-700/30";
    }
  };

  const getLayerDescription = () => {
    switch (activeLayer) {
      case "temperature":
        return "Temperature map showing current thermal conditions across the region.";
      case "wind":
        return "Wind speed and direction patterns across different areas.";
      default:
        return "Precipitation forecast for the next 2 hours. Light rain expected in the northeast regions.";
    }
  };

  const MapContent = ({ className = "h-64" }: { className?: string }) => (
    <div className={`relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden ${className}`}>
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1630260667842-830a17d12ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwbWFwfGVufDF8fHx8MTc1OTIyMzc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Weather map"
        className="w-full h-full object-cover"
      />
      
      {/* Dynamic map overlay based on selected layer */}
      <div className={`absolute inset-0 ${getLayerOverlay()}`}></div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button variant="secondary" size="sm">
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="sm">
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="sm">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Location marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="capitalize">{activeLayer} Map</CardTitle>
          <div className="flex items-center gap-2">
            <Dialog open={isFullScreen} onOpenChange={setIsFullScreen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-full h-[80vh]">
                <DialogTitle className="capitalize">{activeLayer} Map - Full Screen</DialogTitle>
                <DialogDescription>
                  Interactive full-screen view of the {activeLayer} map with zoom and layer controls.
                </DialogDescription>
                <div className="h-full overflow-hidden">
                  <MapContent className="h-full" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Layer Toggle */}
        <div className="mb-4">
          <ToggleGroup type="single" value={activeLayer} onValueChange={setActiveLayer}>
            <ToggleGroupItem value="precipitation" aria-label="Precipitation">
              <CloudRain className="w-4 h-4 mr-2" />
              Precipitation
            </ToggleGroupItem>
            <ToggleGroupItem value="temperature" aria-label="Temperature">
              <Thermometer className="w-4 h-4 mr-2" />
              Temperature
            </ToggleGroupItem>
            <ToggleGroupItem value="wind" aria-label="Wind">
              <Wind className="w-4 h-4 mr-2" />
              Wind
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <MapContent />
        
        {/* Legend */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4 text-sm">
            {activeLayer === "precipitation" && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-200 rounded"></div>
                  <span>Light</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded"></div>
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Heavy</span>
                </div>
              </>
            )}
            {activeLayer === "temperature" && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded"></div>
                  <span>Cold</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded"></div>
                  <span>Warm</span>
                </div>
              </>
            )}
            {activeLayer === "wind" && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded"></div>
                  <span>Light</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-400 rounded"></div>
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded"></div>
                  <span>Strong</span>
                </div>
              </>
            )}
          </div>
          <Badge variant="secondary">Live</Badge>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          {getLayerDescription()}
        </div>
      </CardContent>
    </Card>
  );
}