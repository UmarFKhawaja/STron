import { type MouseEventHandler } from 'react';
import { type ActionIconProps } from '@mantine/core';

export interface ActionButtonProps extends ActionIconProps {
  onClick?: MouseEventHandler | undefined;
}
