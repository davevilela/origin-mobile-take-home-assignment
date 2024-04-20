import { SupabaseClient } from '@supabase/supabase-js';
import * as FileSystem from 'expo-file-system';
import mime from 'mime';

import { Database } from '~/lib/supabase/types/database.types';

const getFileExt = (uri: string) => uri?.split('.').pop()?.toLowerCase();

const getMimeType = (uri: string) => mime.getType(uri);

export type UploadResult = { success: boolean; error: string | null; downloadUrl: string | null };

export async function uploadFile(
  uri: string,
  supabase: SupabaseClient<Database>
): Promise<UploadResult> {
  try {
    const fileInfo = await FileSystem.getInfoAsync(uri, { size: true });

    if (!fileInfo.exists) {
      return { success: false, error: 'File not found', downloadUrl: null };
    }

    if (fileInfo.isDirectory) {
      return { success: false, error: 'URI Is a directory', downloadUrl: null };
    }

    const arraybuffer = await fetch(uri).then((res) => res.arrayBuffer());

    const fileExt = getFileExt(uri);
    const contentType = getMimeType(uri);

    const filePath = `${Date.now()}.${fileExt}`;

    const { data, error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, arraybuffer, {
        contentType: contentType || 'text/plain',
      });

    if (uploadError) {
      throw uploadError;
    }

    return {
      success: true,
      downloadUrl: data.path,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: (error as Error).message, downloadUrl: null };
  }
}
