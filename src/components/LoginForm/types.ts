import { z } from 'zod';
import { type LOGIN_FORM_SCHEMA } from './schema';

export type LoginFields = z.infer<typeof LOGIN_FORM_SCHEMA>;
