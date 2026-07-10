import { useState } from "react";

export function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError(new Error("Errore nella geolocalizzazione"));
      return;
    }
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(new Error(err.message));
        setLoading(false);
      },
    );
  };
  return {
    currentLocation,
    error,
    loading,
    fetchCurrentLocation,
  };
}
