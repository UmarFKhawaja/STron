import { ActionIcon } from '@mantine/core';
import { type ActionButtonProps } from './props';

export function ActionButton({ variant = 'transparent', c = 'gray', size = 'lg', radius = undefined, children, ...props }: ActionButtonProps) {
  return (
    <ActionIcon variant={variant} c={c} size={size} radius={radius} {...props}>
      {children}
    </ActionIcon>
  );
}
