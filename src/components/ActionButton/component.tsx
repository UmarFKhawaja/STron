import { ActionIcon } from '@mantine/core';
import { type ActionButtonProps } from './props';

export function ActionButton({ variant = 'default', c = 'gray', size = 'xl', radius = 'md', children, ...props }: ActionButtonProps) {
  return (
    <ActionIcon variant={variant} c={c} size={size} radius={radius} {...props}>
      {children}
    </ActionIcon>
  );
}
