import { TorrentStatus } from '@brielov/transmission-rpc';

export function formatStatus(status: TorrentStatus): string {
  switch (status) {
    case TorrentStatus.Stopped:
      return 'Stopped';

    case TorrentStatus.QueuedToVerify:
      return 'Queued to verify';

    case TorrentStatus.Verifying:
      return 'Verifying';

    case TorrentStatus.QueuedToDownload:
      return 'Queued to download';

    case TorrentStatus.Downloading:
      return 'Downloading';

    case TorrentStatus.QueuedToSeed:
      return 'Queued to seed';

    case TorrentStatus.Seeding:
      return 'Seeding';

    default:
      return '';
  }
}
