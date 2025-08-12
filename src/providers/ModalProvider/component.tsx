import { useMap } from '@mantine/hooks';
import { ModalContext } from './context';
import { type ModalProviderProps } from './props';
import { type ModalType, type ModalValue } from './types';

export function ModalProvider({ children }: ModalProviderProps) {
  const open = useMap<ModalType, boolean>();

  const value: ModalValue = {
    open,
    showModal: (type: ModalType): void => {
      open.set(type, true);
    },
    hideModal: (type: ModalType): void => {
      open.set(type, false);
    },
    toggleModal: (type: ModalType): void => {
      open.set(type, !open.get(type));
    }
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}
