import { Typography } from '@mui/material';
import type { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export default function Title(props: Props) {
  const { children } = props;

  return (
    <Typography sx={{ textAlign: 'center' }}>
      <h1>{children}</h1>
    </Typography>
  );
}
