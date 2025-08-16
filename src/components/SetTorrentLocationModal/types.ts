import { type ComboboxItem } from '@mantine/core';

export interface ParseTorrentLocationResult {
  name: string;
  folder: ComboboxItem;
  availableFolders: string[];
}
