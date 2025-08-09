import { Button, Checkbox, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { useCallback } from 'react';
import { useCredentials } from '../../providers';
import { LOGIN_FORM_SCHEMA } from './schema';
import classes from './styles.module.css';
import { type LoginFields } from './types';

export function LoginForm() {
  const { setCredentials } = useCredentials();

  const form = useForm<LoginFields>({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
      options: {
        persist: false
      }
    },
    validate: zodResolver(LOGIN_FORM_SCHEMA)
  });

  const cannotSubmit: boolean = !form.isValid();

  const submitCredentials = useCallback(async ({ username, password }: LoginFields) => {
    await setCredentials(username, password);
  }, [setCredentials]);

  return (
    <Paper component="form" className={classes.form} onSubmit={form.onSubmit(submitCredentials)}>
      <TextInput
        key={form.key('username')}
        label="Username"
        size="md"
        radius="md"
        autoComplete="username"
        {...form.getInputProps('username')}
      />
      <PasswordInput
        key={form.key('password')}
        label="Password"
        mt="md"
        size="md"
        radius="md"
        autoComplete="current-password"
        {...form.getInputProps('password')}
      />
      <Checkbox
        key={form.key('options.persist')}
        label="Stay logged in"
        mt="xl"
        size="md"
        {...form.getInputProps('options.persist', {
          type: 'checkbox'
        })}
      />
      <Button fullWidth mt="xl" size="md" radius="md" type="submit" disabled={cannotSubmit}>
        Login
      </Button>
    </Paper>
  );
}
