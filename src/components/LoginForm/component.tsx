import { useCallback } from 'react';
import { Button, Paper, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { useCredentials } from '../../providers';
import { PasswordField } from '../PasswordField';
import { TextField } from '../TextField';
import { LOGIN_FORM_SCHEMA } from './schema';
import classes from './styles.module.css';
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

  return (
    <Paper component="form" className={classes.form} onSubmit={form.onSubmit(submitCredentials)}>
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
