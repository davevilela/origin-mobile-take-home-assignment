import { useMemo } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { YStack, YStackProps } from 'tamagui';

import { Coordinates } from './MapSheet';

type StaticMapViewProps = {
  coordinates: Coordinates;
  markerTitle?: string;
} & YStackProps;
export function StaticMapView(props: StaticMapViewProps) {
  const { coordinates, markerTitle, ...stackProps } = props;

  const region = useMemo(
    () =>
      coordinates
        ? {
            latitude: coordinates.lat,
            longitude: coordinates.lon,
            ...defaultDeltas,
          }
        : undefined,
    [coordinates]
  );

  return (
    <YStack {...stackProps}>
      <MapView pointerEvents="none" style={{ flex: 1 }} showsUserLocation region={region}>
        {!!region && <Marker coordinate={region} title={markerTitle} />}
      </MapView>
    </YStack>
  );
}

const defaultDeltas = {
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};
