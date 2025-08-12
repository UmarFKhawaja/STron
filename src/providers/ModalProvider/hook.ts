import { useContext } from 'react';
import { ModalContext } from './context';
import { type ModalValue } from './types';

export function useModal(): ModalValue {
  return useContext(ModalContext);
}
