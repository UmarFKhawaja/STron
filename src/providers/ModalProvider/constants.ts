import type { ModalState, ModalType, ModalValue } from './types';

export const INITIAL_STATE: ModalState = {
  open: new Map<ModalType, boolean>([
    ['logout', false],
    ['add-torrent', false],
    ['rename-torrent', false],
    ['set-torrent-location', false],
    ['edit-torrent-labels', false]
  ])
};

export const INITIAL_VALUE: ModalValue = {
  ...INITIAL_STATE,
  showModal: (): void => {
  },
  hideModal: (): void => {
  },
  toggleModal: (): void => {
  }
};
