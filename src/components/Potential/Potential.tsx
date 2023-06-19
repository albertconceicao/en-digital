import { ReactNode } from 'react';

import { Container } from './Potential.styles';

interface PotentialProps {
  children: ReactNode;
}

export function Potential({ children }: PotentialProps) {
  return (
    <Container>
      <h1>Potential</h1>
      {children}
    </Container>
  );
}
