export type ModalType =
  | 'logout'
  | 'add-torrent'
  | 'rename-torrent'
  | 'set-torrent-location'
  | 'edit-torrent-labels';

export interface ModalState {
  open: Map<ModalType, boolean>;
}

export interface ModalValue extends ModalState {
  showModal(type: ModalType): void;
  hideModal(type: ModalType): void;
  toggleModal(type: ModalType): void;
}
