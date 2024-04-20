import prettyBytes from 'pretty-bytes';

export function formatBytes(bytes: number) {
  return prettyBytes(bytes);
}
