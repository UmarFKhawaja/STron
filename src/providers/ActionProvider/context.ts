import { type Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { type ActionValue } from './types';

export const ActionContext: Context<ActionValue> = createContext<ActionValue>(INITIAL_VALUE);
