import { type Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { type ActionsValue } from './types';

export const ActionsContext: Context<ActionsValue> = createContext<ActionsValue>(INITIAL_VALUE);
