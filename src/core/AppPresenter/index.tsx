import { Notifications } from '@mantine/notifications';
import { AddTorrentModal, LogoutModal } from '../../components';
import { PrivateLayout, PublicLayout } from '../../layouts';
import { LoginForm, TorrentsView } from '../../outlets';
import { useCredentials } from '../../providers';

export function AppPresenter() {
  const { hasCredentials } = useCredentials();

  return (
    <>
      {
        hasCredentials
          ? (
            <PrivateLayout>
              <TorrentsView/>
            </PrivateLayout>
          )
          : (
            <PublicLayout>
              <LoginForm/>
            </PublicLayout>
          )
      }
      <LogoutModal/>
      <AddTorrentModal/>
      <Notifications/>
    </>
  );
}
