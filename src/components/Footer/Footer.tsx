import { Container } from './Footer.styles';

export function Footer() {
  return (
    <Container>
      <p>
        &copy; Copyright 2023.{' '}
        <a
          href="https://www.instagram.com/aetoslandingpages/"
          target="_blank"
          rel="noreferrer"
        >
          Todos os direitos reservados
        </a>
      </p>
    </Container>
  );
}
