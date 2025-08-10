import { useContext } from 'react';
import { ActionsContext } from './context';
import { type ActionsValue } from './types';

export function useActions(): ActionsValue {
  return useContext(ActionsContext);
}
