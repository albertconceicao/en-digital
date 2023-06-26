import { Container, Content } from './Market.styles';
import { List } from './List';

export function Market() {
  return (
    <Container>
      <Content className="container">
        <section>
          <div>
            <div className="title">
              <h1>
                O mercado está <strong>saturado</strong> de Profissionais de
                Planejamento que:
              </h1>
            </div>
            <List />
          </div>
        </section>
      </Content>
    </Container>
  );
}
