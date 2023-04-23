import type { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export default function Title(props: Props) {
  const { children } = props;

  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}
