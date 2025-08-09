import { merge } from 'lodash';
import { PasswordInput } from '@mantine/core';
import { type PasswordFieldProps } from './props';
import classes from './styles.module.css';

export function PasswordField({ className, classNames, ...props }: PasswordFieldProps) {
  return (
    <PasswordInput size="xl" className={className} classNames={merge(classes, classNames)} {...props}/>
  );
}
