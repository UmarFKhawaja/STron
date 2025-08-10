export interface CredentialsState {
  username: string;
  password: string;
}

export interface CredentialsValue extends CredentialsState {
  hasCredentials: boolean;
  setCredentials(username: string, password: string): Promise<void>;
  unsetCredentials(): Promise<void>;
}

export type CredentialsAction = SetCredentialsCredentialsAction | UnsetCredentialsCredentialsAction;

export interface SetCredentialsCredentialsAction {
  type: 'SET_CREDENTIALS';
  username: string;
  password: string;
}

export interface UnsetCredentialsCredentialsAction {
  type: 'UNSET_CREDENTIALS';
}
