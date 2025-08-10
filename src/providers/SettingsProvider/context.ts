import { type Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { type SettingsValue } from './types';

export const SettingsContext: Context<SettingsValue> = createContext<SettingsValue>(INITIAL_VALUE);
