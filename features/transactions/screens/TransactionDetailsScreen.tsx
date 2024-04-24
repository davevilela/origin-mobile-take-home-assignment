import { format } from 'date-fns';
import { Image } from 'expo-image';
import { CameraType } from 'expo-image-picker';
import { Link } from 'expo-router';
import { Skeleton as OGSkeleton } from 'moti/skeleton';
import { Pressable, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ScrollView, Separator, Spinner, Text, Theme, View, XStack, YStack } from 'tamagui';

import { transactionUIConfigurations } from '../utils';

import { ImagePickerMenu } from '~/components/ImagePickerMenu';
import { Coordinates, MapSheet } from '~/components/MapSheet';
import { StaticMapView } from '~/components/StaticMapView';
import { Skeleton } from '~/components/ui/Skeleton';
import {
  useUpdateTransactionCoordinatesMutation,
  useUpdateTransactionReceipt,
} from '~/features/transactions/hooks/useTransactionMutations';
import { useTransactionQuery } from '~/features/transactions/hooks/useTransactions';
import { Transaction } from '~/features/transactions/types/transactions';
import { useImagePicker } from '~/hooks/useImagePicker';
import { formatCurrency } from '~/lib/helpers';

export function TransactionDetailsScreen({ transactionId }: { transactionId: string }) {
  const insets = useSafeAreaInsets();

  const { transaction, refetch, isRefetching } = useTransactionQuery({
    id: transactionId,
  });

  const { formatTransactionValue, theme } =
    transactionUIConfigurations[transaction?.Type || 'deposit'];

  const transactionTotal = formatCurrency(formatTransactionValue(transaction?.Amount || 0));

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={() => refetch({})} />}
      bg="$background"
      px="$4"
      pt="$4"
      f={1}>
      <OGSkeleton.Group show={!transaction}>
        <YStack ai="center" f={1} pb={insets.bottom + 40}>
          <Skeleton width="100%">
            <>
              {!!transaction?.Amount && (
                <Text fontWeight="700" fontFamily="$heading" fontSize="$12" mt="$4">
                  {transactionTotal}
                </Text>
              )}
              <Theme name="alt1">
                <Text fontSize="$6">{transaction?.Vendor}</Text>
              </Theme>
            </>
          </Skeleton>

          <YStack gap="$4" mt="$8" w="100%">
            <Skeleton width="100%">
              <YStack gap="$4" p="$3" br="$5" bg="$backgroundPress" w="100%">
                <YStack gap="$2" px="$1">
                  <Text theme={theme} fontSize="$5" textTransform="capitalize">
                    {transaction?.Type}
                  </Text>
                  <Theme name="alt1">
                    {!!transaction?.Date && (
                      <Text fontSize="$5">{format(new Date(transaction?.Date), 'PPP')}</Text>
                    )}
                    <Text textTransform="capitalize" fontSize="$5">
                      {transaction?.Category}
                    </Text>
                  </Theme>
                </YStack>
                <Separator bc="$gray7" />
                <XStack px="$1" jc="space-between">
                  <Text fontSize="$5">Total</Text>
                  {!!transaction?.Amount && <Text fontSize="$5">{transactionTotal}</Text>}
                </XStack>
              </YStack>
            </Skeleton>

            <Skeleton width="100%">
              <TransactionMapWidget transaction={transaction!} />
            </Skeleton>

            <Skeleton width="100%">
              <TransactionReceiptUploadWidget transaction={transaction!} />
            </Skeleton>

            <Skeleton width="100%">
              <TransactionReceiptImageWidget transaction={transaction!} />
            </Skeleton>
          </YStack>
        </YStack>
      </OGSkeleton.Group>
    </ScrollView>
  );
}

function TransactionMapWidget(props: { transaction: Transaction }) {
  const { transaction } = props;
  const hasLocation = transaction?.Lat && transaction?.Lon;
  const { mutate } = useUpdateTransactionCoordinatesMutation();

  const onLocationUpdated = (location: Coordinates) => {
    mutate({
      id: transaction.Id,
      Lat: location.lat,
      Lon: location.lon,
    });
  };

  return (
    <YStack overflow="hidden" br="$5" bg="$backgroundPress" w="100%">
      <YStack h={180} position="relative">
        {hasLocation ? (
          <MapSheet
            title={transaction.Vendor}
            onNewCoordinates={onLocationUpdated}
            initialCoordinates={{ lat: transaction.Lat!, lon: transaction.Lon! }}>
            <Pressable
              style={{
                flex: 1,
                zIndex: 100,
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
              }}>
              <StaticMapView
                f={1}
                markerTitle={transaction.Vendor!}
                coordinates={{
                  lat: transaction.Lat!,
                  lon: transaction.Lon!,
                }}
              />
            </Pressable>
          </MapSheet>
        ) : (
          <YStack gap="$3" bg="$gray7" ai="center" jc="center" f={1}>
            <Text>Location not found</Text>
            <MapSheet onNewCoordinates={onLocationUpdated} title={transaction?.Vendor}>
              <Button size="$3" theme="accent">
                Add location
              </Button>
            </MapSheet>
          </YStack>
        )}
      </YStack>

      <XStack p="$3" borderTopWidth={1} btc="$borderColor">
        <Text fontSize="$5">{transaction?.Vendor}</Text>
      </XStack>
    </YStack>
  );
}

function TransactionReceiptImageWidget(props: { transaction: Transaction }) {
  const { transaction } = props;

  if (!transaction?.ReceiptImage) return null;
  return (
    <Link asChild href={`/(app)/transaction/${transaction.Id}/receipt`}>
      <YStack overflow="hidden" br="$5" bg="$backgroundPress" w="100%">
        <YStack h={180}>
          <Image source={{ uri: transaction?.ReceiptImage! }} style={{ flex: 1 }} />
        </YStack>

        <XStack p="$3" borderTopWidth={1} btc="$borderColor">
          <Text fontSize="$5">Receipt Image</Text>
        </XStack>
      </YStack>
    </Link>
  );
}

function TransactionReceiptUploadWidget(props: { transaction: Transaction }) {
  const { transaction } = props;
  const { mutateAsync, isPending } = useUpdateTransactionReceipt();
  const picker = useImagePicker({
    async onImagePicked(value) {
      if (!value) return;

      await mutateAsync({
        transactionId: String(transaction.Id),
        uri: value!,
      });
    },
  });

  return (
    <View>
      <ImagePickerMenu
        onSelect={(mode) => {
          switch (mode) {
            case 'camera':
              picker.takePhoto({ cameraType: CameraType.back });
              break;
            case 'mediaLibrary':
              picker.pickImage();
              break;

            default:
              break;
          }
        }}>
        <Button
          disabled={isPending}
          disabledStyle={{
            opacity: 0.5,
          }}
          theme="accent"
          fontSize="$5"
          jc="flex-start">
          {!!isPending && <Spinner color="white" />}
          {isPending ? 'Uploading...' : 'Attach recepit'}
        </Button>
      </ImagePickerMenu>
    </View>
  );
}
