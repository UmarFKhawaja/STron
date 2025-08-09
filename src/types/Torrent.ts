import { z } from 'zod';

export const TORRENT_SCHEMA = z.object({
  title: z.string(),
  author: z.string(),
  year: z.number().min(1900).max(2100),
  reviews: z.object({
    positive: z.number(),
    negative: z.number()
  })
});

export type Torrent = z.infer<typeof TORRENT_SCHEMA>;
