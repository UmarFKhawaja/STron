import { z } from 'zod';

export const CONFIG_SCHEMA = z.object({
  host: z.hostname().default('localhost'),
  port: z.number().min(0).max(65535).default(9091),
  transmission: z.object({
    host: z.hostname().default('localhost'),
    port: z.number().min(0).max(65535).default(9091),
    username: z.string(),
    password: z.string(),
    sslMode: z.literal([
      'require',
      'none'
    ]).default('none'),
    url: z.string().default('/transmission/')
  })
});

export type Config = z.infer<typeof CONFIG_SCHEMA>;
