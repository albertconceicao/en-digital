import { Container, Content } from './SubHero.styles';

export function SubHero() {
  return (
    <Container>
      <Content className="container">
        <h1>Se você:</h1>

        <section>
          <div>
            <img src="./calendar.svg" alt="" />
            <span>
              Falha em entregar projetos <strong>dentro dos prazos</strong>
            </span>
          </div>
          <div>
            <img src="./systems.svg" alt="" />
            <span>
              <strong>Não domina</strong> os melhores sistemas de planejamento
            </span>
          </div>
          <div>
            <img src="./projects.svg" alt="" />
            <span>
              Se sente <strong>inseguro</strong> em assumir projetos de alta
              complexidade e rendimento
            </span>
          </div>
        </section>
      </Content>
    </Container>
  );
}
