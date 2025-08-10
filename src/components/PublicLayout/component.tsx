import { Box } from '@mantine/core';
import classes from './styles.module.css';
import { type PublicLayoutProps } from './props';

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <Box className={classes.wrapper}>
      {children}
    </Box>
  );
}
