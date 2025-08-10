import { type Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { type CredentialsValue } from './types';

export const CredentialsContext: Context<CredentialsValue> = createContext<CredentialsValue>(INITIAL_VALUE);
