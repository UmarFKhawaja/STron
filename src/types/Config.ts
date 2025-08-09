import { z } from 'zod';

export const CONFIG_SCHEMA = z.object({
  host: z.hostname().default('localhost'),
  port: z.number().min(0).max(65535).default(9091),
  transmission: z.object({
    host: z.hostname().default('localhost'),
    port: z.number().min(0).max(65535).default(9091),
    mode: z.literal([
      'SSL',
      ''
    ]).default(''),
    url: z.string().default('/transmission/')
  })
});

export type Config = z.infer<typeof CONFIG_SCHEMA>;
