import { useState, useEffect } from 'react';

const LocationTracker = () => {
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition | null>(null);
  const [locationHistory, setLocationHistory] = useState<GeolocationPosition[]>([]);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [watchId, setWatchId] = useState<number | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'granted' | 'denied' | 'prompt' | 'unknown'>('unknown');

  // Check geolocation permissions
  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' })
        .then(permissionStatus => {
          setPermissionStatus(permissionStatus.state);
          
          permissionStatus.onchange = () => {
            setPermissionStatus(permissionStatus.state);
          };
        })
        .catch(() => {
          setPermissionStatus('unknown');
        });
    }
  }, []);

  // Start tracking location
  const startTracking = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    setError(null);
    
    // Request permission if needed
    if (permissionStatus === 'prompt' || permissionStatus === 'unknown') {
      navigator.geolocation.getCurrentPosition(
        () => {
          setPermissionStatus('granted');
          setIsTracking(true);
          setupGeolocationWatch();
        },
        (err) => {
          setError(`Permission denied: ${err.message}`);
          setPermissionStatus('denied');
        },
        { enableHighAccuracy: true }
      );
    } else if (permissionStatus === 'granted') {
      setIsTracking(true);
      setupGeolocationWatch();
    } else {
      setError('Geolocation permission denied. Please enable location access in your browser settings.');
    }
  };

  const setupGeolocationWatch = () => {

    const id = navigator.geolocation.watchPosition(
      (position) => {
        setCurrentLocation(position);
        setLocationHistory(prev => [...prev, position]);
      },
      (err) => {
        setError(`Error getting location: ${err.message}`);
        setIsTracking(false);
        if (err.code === err.PERMISSION_DENIED) {
          setPermissionStatus('denied');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );

    setWatchId(id);
  };
  };

  // Stop tracking location
  const stopTracking = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsTracking(false);
  };

  // Clear location history
  const clearHistory = () => {
    setLocationHistory([]);
  };

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };

  // Calculate total distance traveled
  const totalDistance = locationHistory.length > 1 
    ? locationHistory.slice(1).reduce((total, pos, index) => {
        const prevPos = locationHistory[index];
        return total + calculateDistance(
          prevPos.coords.latitude,
          prevPos.coords.longitude,
          pos.coords.latitude,
          pos.coords.longitude
        );
      }, 0)
    : 0;

  // Format coordinates for display
  const formatCoordinate = (coord: number, isLatitude: boolean) => {
    const direction = isLatitude 
      ? (coord >= 0 ? 'N' : 'S')
      : (coord >= 0 ? 'E' : 'W');
    return `${Math.abs(coord).toFixed(6)}° ${direction}`;
  };

  // Handle touch controls for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!isTracking) {
      startTracking();
    } else {
      stopTracking();
    }
  };

  // Normalize path points for SVG rendering
  const getPathPoints = () => {
    if (locationHistory.length === 0) return '';

    const points = locationHistory.map((pos, index) => {
      // Normalize coordinates to fit in SVG viewport
      const x = 50 + (pos.coords.longitude % 180) * 0.5;
      const y = 50 + (pos.coords.latitude % 90) * 0.5;
      return `${x},${y}`;
    });

    return points.join(' ');
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Location Tracker</h1>
          <p className="text-muted-foreground">Track your movement in real-time</p>
        </header>

        {/* Control Panel */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={startTracking}
                disabled={isTracking}
                className={`px-4 py-2 rounded-md font-medium ${
                  isTracking 
                    ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                Start Tracking
              </button>
              <button
                onClick={stopTracking}
                disabled={!isTracking}
                className={`px-4 py-2 rounded-md font-medium ${
                  !isTracking 
                    ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                    : 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                }`}
              >
                Stop Tracking
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={clearHistory}
                disabled={locationHistory.length === 0}
                className={`px-4 py-2 rounded-md font-medium ${
                  locationHistory.length === 0
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Clear History
              </button>
            </div>

            {/* Mobile Touch Control */}
            <div className="sm:hidden w-full">
              <button
                onTouchStart={handleTouchStart}
                className={`w-full py-3 rounded-md font-medium text-lg ${
                  isTracking 
                    ? 'bg-destructive text-destructive-foreground' 
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {isTracking ? 'Stop (Touch)' : 'Start (Touch)'}
              </button>
            </div>

            {/* Request Permission Button */}
            {(permissionStatus === 'denied' || permissionStatus === 'prompt') && (
              <div className="w-full sm:w-auto">
                <button
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                      () => {
                        setPermissionStatus('granted');
                        setError(null);
                      },
                      (err) => {
                        setError(`Permission denied: ${err.message}`);
                        setPermissionStatus('denied');
                      },
                      { enableHighAccuracy: true }
                    );
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-md font-medium bg-blue-500 text-blue-foreground hover:bg-blue-500/90"
                >
                  Request Location Access
                </button>
              </div>
            )}
          </div>

          {/* Status Indicator */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                isTracking ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`}></div>
              <span className="text-sm text-muted-foreground">
                {isTracking ? 'Tracking active' : 'Tracking stopped'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                permissionStatus === 'granted' ? 'bg-green-500' :
                permissionStatus === 'denied' ? 'bg-red-500' :
                permissionStatus === 'prompt' ? 'bg-yellow-500' : 'bg-gray-500'
              }`}></div>
              <span className="text-sm text-muted-foreground">
                Permission: {
                  permissionStatus === 'granted' ? 'Granted' :
                  permissionStatus === 'denied' ? 'Denied' :
                  permissionStatus === 'prompt' ? 'Request access' : 'Checking...'
                }
              </span>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
            <p className="text-destructive text-sm">{error}</p>
            {permissionStatus === 'denied' && (
              <p className="text-destructive/80 text-xs mt-2">
                Please check your browser settings to enable location access for this site.
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Visualization */}
          <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Movement Path</h2>
            <div className="aspect-video bg-muted/20 rounded border border-border relative overflow-hidden">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Grid Background */}
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" className="text-border"/>
                
                {/* Path */}
                {locationHistory.length > 0 && (
                  <polyline
                    points={getPathPoints()}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                
                {/* Current Position Marker */}
                {currentLocation && (
                  <circle
                    cx={50 + (currentLocation.coords.longitude % 180) * 0.5}
                    cy={50 + (currentLocation.coords.latitude % 90) * 0.5}
                    r="2"
                    fill="currentColor"
                    className="text-destructive"
                  >
                    <animate
                      attributeName="r"
                      values="2;3;2"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </svg>
            </div>
          </div>

          {/* Location Information */}
          <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Location Details</h2>
            
            {currentLocation ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Latitude</label>
                    <p className="font-mono text-foreground">
                      {formatCoordinate(currentLocation.coords.latitude, true)}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Longitude</label>
                    <p className="font-mono text-foreground">
                      {formatCoordinate(currentLocation.coords.longitude, false)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Accuracy</label>
                    <p className="font-mono text-foreground">
                      {currentLocation.coords.accuracy?.toFixed(1)}m
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Speed</label>
                    <p className="font-mono text-foreground">
                      {currentLocation.coords.speed 
                        ? `${(currentLocation.coords.speed * 3.6).toFixed(1)} km/h`
                        : 'N/A'
                      }
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Altitude</label>
                  <p className="font-mono text-foreground">
                    {currentLocation.coords.altitude 
                      ? `${currentLocation.coords.altitude.toFixed(1)}m`
                      : 'N/A'
                    }
                  </p>
                </div>

                <div className="pt-2 border-t border-border">
                  <label className="text-sm text-muted-foreground">Total Distance</label>
                  <p className="font-mono text-lg text-primary font-semibold">
                    {totalDistance.toFixed(3)} km
                  </p>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Points Recorded</label>
                  <p className="font-mono text-foreground">
                    {locationHistory.length} locations
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No location data available</p>
                <p className="text-sm">Start tracking to see your location details</p>
              </div>
            )}
          </div>
        </div>

        {/* Tracking History */}
        {locationHistory.length > 0 && (
          <div className="bg-card border border-border rounded-lg p-4 mt-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Tracking History</h2>
            <div className="max-h-40 overflow-y-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground">Time</th>
                    <th className="text-left py-2 text-muted-foreground">Coordinates</th>
                    <th className="text-left py-2 text-muted-foreground">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {locationHistory.slice(-10).reverse().map((pos, index) => (
                    <tr key={pos.timestamp} className="border-b border-border/50 last:border-b-0">
                      <td className="py-2 font-mono text-xs">
                        {new Date(pos.timestamp).toLocaleTimeString()}
                      </td>
                      <td className="py-2 font-mono text-xs">
                        {pos.coords.latitude.toFixed(4)}, {pos.coords.longitude.toFixed(4)}
                      </td>
                      <td className="py-2 font-mono text-xs">
                        {pos.coords.accuracy?.toFixed(1)}m
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationTracker;