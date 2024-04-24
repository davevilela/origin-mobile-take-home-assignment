import * as FileSystem from 'expo-file-system';
import fetchMock from 'jest-fetch-mock';
import mime from 'mime';

import { uploadFile } from './uploadFile';

import { TypedSupabaseClient } from '~/lib/supabase/types/supabase';

jest.mock('@supabase/supabase-js');
jest.mock('expo-file-system');
jest.mock('mime');

const mockUpload = jest.fn();
const mockFrom = jest.fn(() => ({
  upload: mockUpload,
}));

const mockSupabaseClient = {
  storage: {
    from: mockFrom,
  },
} as unknown as TypedSupabaseClient;

describe('uploadFile', () => {
  const uri = 'file://path/to/file.jpg';
  const bucket = 'test-bucket';

  beforeEach(() => {
    jest.clearAllMocks();

    jest.mocked(FileSystem.getInfoAsync).mockResolvedValue({
      exists: true,
      isDirectory: false,
    } as FileSystem.FileInfo);

    fetchMock.mockResolvedValue({
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(10)),
    } as any);

    jest.mocked(mime.getType).mockReturnValue('image/jpeg');

    mockUpload.mockResolvedValue({
      data: { path: 'path/to/uploaded/file' },
      error: null,
    });
  });

  test('should return error if file does not exist', async () => {
    jest
      .mocked(FileSystem.getInfoAsync)
      .mockResolvedValueOnce({ exists: false } as FileSystem.FileInfo);

    const result = await uploadFile(mockSupabaseClient, { uri, bucket });

    expect(result).toEqual({ success: false, error: 'File not found', downloadUrl: null });
  });

  test('should return error if URI is a directory', async () => {
    jest.mocked(FileSystem.getInfoAsync).mockResolvedValueOnce({
      exists: true,
      isDirectory: true,
    } as FileSystem.FileInfo);

    const result = await uploadFile(mockSupabaseClient, { uri, bucket });

    expect(result).toEqual({ success: false, error: 'URI Is a directory', downloadUrl: null });
  });

  test('should handle successful file upload', async () => {
    const result = await uploadFile(mockSupabaseClient, { uri, bucket });

    expect(result).toEqual({
      success: true,
      downloadUrl: 'path/to/uploaded/file',
      error: null,
    });
    expect(mockSupabaseClient.storage.from).toHaveBeenCalledWith(bucket);

    expect(mockUpload).toHaveBeenCalledWith(
      expect.any(String), // Checks for file path
      expect.any(ArrayBuffer), // Checks for file data as ArrayBuffer
      { contentType: 'image/jpeg' } // Checks the content type
    );
  });

  test('should handle upload error', async () => {
    const error = new Error('Upload failed');
    jest.mocked(mockSupabaseClient.storage.from('id').upload).mockRejectedValue(error);
    const result = await uploadFile(mockSupabaseClient, { uri, bucket });
    expect(result).toEqual({ success: false, error: 'Upload failed', downloadUrl: null });
  });

  test('should default MIME type to text/plain if not determined', async () => {
    jest.mocked(mime.getType).mockReturnValueOnce(null);
    await uploadFile(mockSupabaseClient, { uri, bucket });

    expect(mockSupabaseClient.storage.from('id').upload).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(ArrayBuffer),
      {
        contentType: 'text/plain',
      }
    );
  });
});
