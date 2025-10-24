import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

export function WeatherSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-9 w-12" />
            <Skeleton className="h-9 w-16" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Current Weather Skeleton */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-6">
                  <Skeleton className="w-20 h-20 rounded" />
                  <div>
                    <Skeleton className="h-16 w-32 mb-2" />
                    <Skeleton className="h-5 w-20 mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-16" />
                  ))}
                </div>
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
              <Skeleton className="hidden md:block w-40 h-40 rounded-lg" />
            </div>
          </CardContent>
        </Card>

        {/* Hourly Forecast Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center min-w-[80px]">
                  <Skeleton className="h-4 w-12 mb-2" />
                  <Skeleton className="w-6 h-6 mb-2 rounded" />
                  <Skeleton className="h-4 w-8 mb-1" />
                  <Skeleton className="h-3 w-6" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ten Day Forecast Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent className="p-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-border last:border-b-0">
                  <div className="flex items-center gap-4 flex-1">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="w-6 h-6 rounded" />
                    <Skeleton className="h-4 w-24 flex-1" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Right Column Skeletons */}
          <div className="space-y-6">
            {/* Weather Map Skeleton */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-64 rounded-lg mb-4" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-4 w-16" />
                    ))}
                  </div>
                  <Skeleton className="h-5 w-12" />
                </div>
              </CardContent>
            </Card>

            {/* Weather Details Skeleton */}
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-2 w-full" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}