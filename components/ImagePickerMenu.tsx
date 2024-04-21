import * as DropdownMenu from 'zeego/dropdown-menu';

export function ImagePickerMenu({
  children,
  onSelect,
  remove,
}: {
  children: React.ReactElement;
  onSelect?: (mode: 'camera' | 'mediaLibrary' | 'removeImage') => void;
  remove?: boolean;
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          onSelect={() => {
            onSelect?.('camera');
          }}
          key="camera">
          <DropdownMenu.ItemTitle>Take Picture</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            onSelect?.('mediaLibrary');
          }}
          key="mediaLibrary">
          <DropdownMenu.ItemTitle>Pick image from gallery</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
        {!!remove && (
          <DropdownMenu.Item
            destructive
            onSelect={() => {
              onSelect?.('removeImage');
            }}
            key="removeImage">
            <DropdownMenu.ItemTitle>Remove image</DropdownMenu.ItemTitle>
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
