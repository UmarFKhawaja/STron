import { useContext } from 'react';
import { ActionContext } from './context';
import { type ActionValue } from './types';

export function useAction(): ActionValue {
  return useContext(ActionContext);
}
