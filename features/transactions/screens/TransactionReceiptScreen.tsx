import { Dimensions } from 'react-native';
import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'tamagui';

import { useTransactionQuery } from '../hooks/useTransactions';

import { AnimatedExpoImage } from '~/components/ui/AnimatedPrimitives';
import { usePinchToZoom } from '~/hooks/usePinchToZoom';

const { width, height } = Dimensions.get('window');

export function TransactionReceiptScreen({ transactionId }: { transactionId: string }) {
  const { transaction } = useTransactionQuery({
    id: transactionId,
  });
  const { imageStyles, pinchGestureHandler } = usePinchToZoom({
    height,
    width,
  });

  return (
    <View f={1}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GestureDetector gesture={pinchGestureHandler}>
          <AnimatedExpoImage
            style={[{ flex: 1 }, imageStyles]}
            contentFit="scale-down"
            source={{
              uri: transaction?.ReceiptImage!,
            }}
          />
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
}
