import { transactionServices } from './transactionsServices';

import { getPublicFileUrl } from '~/lib/helpers';
import { TypedSupabaseClient } from '~/lib/supabase/types/supabase';
import { uploadFile } from '~/services/uploadFile';

type UploadReceiptServiceParams = {
  transactionId: string;
  uri: string;
  supabase: TypedSupabaseClient;
};
export async function uploadReceiptImage(props: UploadReceiptServiceParams) {
  const { transactionId, uri, supabase } = props;
  const uploadResult = await uploadFile(supabase, { uri, bucket: 'receipts' });

  if (uploadResult.error) {
    throw new Error(uploadResult.error);
  }

  const publicFileUrl = getPublicFileUrl(supabase, {
    bucket: 'receipts',
    fileKey: uploadResult.downloadUrl!,
  });

  const response = await transactionServices.updateTransactionReceipt({
    id: transactionId,
    ReceiptImageUrl: publicFileUrl,
  });

  return response ? publicFileUrl : null;
}

export const getReceiptUploadService =
  (supabase: TypedSupabaseClient) => (params: Omit<UploadReceiptServiceParams, 'supabase'>) =>
    uploadReceiptImage({
      ...params,
      supabase,
    });
