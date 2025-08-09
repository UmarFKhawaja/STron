import { Notifications } from '@mantine/notifications';
import { LoginForm, PrivateLayout, PublicLayout, TorrentsView } from '../../components';
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
      <Notifications/>
    </>
  );
}
