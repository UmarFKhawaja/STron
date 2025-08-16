import { useCallback } from 'react';
import { Button, Paper, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useColorScheme } from '@mantine/hooks';
import { zodResolver } from 'mantine-form-zod-resolver';
import { useCredentials } from '../../providers';
import { PasswordField, TextField } from '../../components';
import { LOGIN_FORM_SCHEMA } from './schema';
import { type LoginFields } from './types';

export function LoginForm() {
  const { setCredentials } = useCredentials();

  const form = useForm<LoginFields>({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: ''
    },
    validate: zodResolver(LOGIN_FORM_SCHEMA)
  });

  const cannotSubmit: boolean = !form.isValid();

  const submitCredentials = useCallback(async ({ username, password }: LoginFields) => {
    await setCredentials(username, password);
  }, [setCredentials]);

  const colorScheme = useColorScheme();

  return (
    <Paper
      component="form"
      onSubmit={form.onSubmit(submitCredentials)}
      style={(theme) => ({
        borderRight: `1px solid ${
          colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[3]
        }`,
        height: '100vh',
        maxWidth: 450,
        padding: 30,
        paddingTop: 80,
        borderRadius: 0,
        [theme.breakpoints.sm]: {
          maxWidth: '100%',
        },
      })}
    >
      <Stack>
        <TextField
          key={form.key('username')}
          label="Username"
          autoComplete="username"
          {...form.getInputProps('username')}
        />
        <PasswordField
          key={form.key('password')}
          label="Password"
          autoComplete="current-password"
          {...form.getInputProps('password')}
        />
        <Button fullWidth size="lg" type="submit" disabled={cannotSubmit}>
          Login
        </Button>
      </Stack>
    </Paper>
  );
}
