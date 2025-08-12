import { z } from 'zod';

export const LOGIN_FORM_SCHEMA = z.object({
  username: z.string(),
  password: z.string()
});
