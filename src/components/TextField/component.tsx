import { merge } from 'lodash';
import { TextInput } from '@mantine/core';
import { type TextFieldProps } from './props';
import classes from './styles.module.css';

export function TextField({ className, classNames, ...props }: TextFieldProps) {
  return (
    <TextInput size="xl" className={className} classNames={merge(classes, classNames)} {...props}/>
  );
}
