import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationAccuracy,
} from 'expo-location';
import { useState, useEffect } from 'react';

export function useCurrentUserPosition() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      const location = await getCurrentPositionAsync({
        accuracy: LocationAccuracy.Lowest,
      });

      setLocation(location);
    })();
  }, []);

  return { location, error };
}
