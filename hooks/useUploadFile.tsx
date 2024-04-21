import { useState } from 'react';

import { useSupabase } from '~/lib/supabase/useSupabase';
import { UploadResult, uploadFile } from '~/services/uploadFile';

export function useUploadFile(bucket: string) {
  const supabase = useSupabase();
  const [loading, setLoading] = useState(false);

  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);

  async function execute({ uri }: { uri: string }) {
    setUploadResult(null);
    setLoading(true);
    const uploadTask = await uploadFile(supabase, { uri, bucket });

    setUploadResult(uploadTask);

    setLoading(false);

    return uploadTask;
  }

  return [execute, { loading, ...uploadResult }] as const;
}
