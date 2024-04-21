import { PropsWithChildren, useMemo, useRef, useState } from 'react';
import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, H4, Sheet, ThemeableStack, View, YStack, Text } from 'tamagui';

import { Fade } from './ui/Fade';

import { useCurrentUserPosition } from '~/hooks/useCurrentUserPosition';

export type Coordinates = {
  lat: number;
  lon: number;
};
export type MapSheetProps = {
  initialCoordinates?: Coordinates;
  onNewCoordinates?: (coordinates: Coordinates) => void;
  title?: string;
};

export function MapSheet({ children, ...restProps }: PropsWithChildren<MapSheetProps>) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View
        onPress={() => {
          setOpen(true);
        }}
        asChild>
        {children}
      </View>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        animation="quick"
        dismissOnSnapToBottom
        disableDrag
        snapPointsMode="fit">
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame bg="$colorTransparent" px="$3">
          <Fade open={open}>
            <InnerContent {...restProps} setOpen={setOpen} />
          </Fade>
        </Sheet.Frame>
      </Sheet>
    </>
  );
}

function InnerContent(
  props: MapSheetProps & {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
) {
  const { initialCoordinates, onNewCoordinates, title, setOpen } = props;
  const insets = useSafeAreaInsets();
  const { location } = useCurrentUserPosition();
  const [region, setRegion] = useState<Region | null>(null);
  const initialMarker = useRef(
    initialCoordinates
      ? { latitude: initialCoordinates.lat, longitude: initialCoordinates.lon }
      : null
  );
  const [marker, setMarker] = useState<LatLng | null>(initialMarker.current);

  const userRegion = useMemo(() => {
    if (!location) return undefined;
    return {
      latitude: location?.coords.latitude!,
      longitude: location?.coords.longitude!,
      ...defaultDeltas,
    };
  }, [location]);

  const resolvedInitialRegion = useMemo(() => {
    if (initialCoordinates?.lat && initialCoordinates?.lon) {
      return {
        latitude: initialCoordinates?.lat,
        longitude: initialCoordinates?.lon,
        ...defaultDeltas,
      };
    }

    if (userRegion) {
      return userRegion;
    }
    return undefined;
  }, [userRegion, initialCoordinates]);

  return (
    <YStack
      borderWidth={1}
      borderColor="$borderColor"
      f={1}
      mb={insets.bottom}
      p="$5"
      bg="$background"
      borderRadius="$7">
      <YStack w="100%" overflow="hidden" h={500} gap="$true">
        <YStack>
          <H4>{title}</H4>
          <Text theme="alt2">
            <Text fontWeight="700" color="$blue10">
              Long press
            </Text>{' '}
            anywhere on the map to choose location
          </Text>
        </YStack>
        <ThemeableStack bordered w="100%" f={1} overflow="hidden" borderRadius="$3" bg="$gray4">
          <MapView
            style={{ flex: 1 }}
            showsUserLocation
            onRegionChangeComplete={setRegion}
            region={region ? region : resolvedInitialRegion}
            onLongPress={(event) => {
              const coordinate = event.nativeEvent.coordinate;
              setMarker(coordinate);
              setRegion({ ...coordinate, ...defaultDeltas });
            }}>
            {!!marker && <Marker coordinate={marker} title={title} />}
          </MapView>
        </ThemeableStack>

        <YStack gap="$3">
          {!!userRegion && (
            <Button onPress={() => setRegion(userRegion)} theme="blue" chromeless>
              Locate me
            </Button>
          )}
          <Button
            disabled={!marker || initialMarker.current === marker}
            disabledStyle={{
              opacity: 0.5,
            }}
            onPress={() => {
              if (!marker) return;
              onNewCoordinates?.({
                lat: marker?.latitude!,
                lon: marker?.longitude!,
              });
              setOpen(false);
            }}
            theme="accent">
            Update location
          </Button>
        </YStack>
      </YStack>
    </YStack>
  );
}

const defaultDeltas = {
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};
