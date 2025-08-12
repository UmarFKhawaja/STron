import { type Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { type ModalValue } from './types';

export const ModalContext: Context<ModalValue> = createContext<ModalValue>(INITIAL_VALUE);
