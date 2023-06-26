import { Container, Content } from './Depoiments.styles';

export function Depoiments() {
  return (
    <Container>
      <Content className="container">
        <div>
          <h1>O que dizem os alunos do </h1>
          <img src="./course-logo.svg" alt="" />
        </div>

        <div className="content">
          <div>
            <img className="img-1" src="./depoiments/depoiment-2.png" alt="" />
            <img className="img-2" src="./depoiments/depoiment-7.png" alt="" />
            <img className="img-3" src="./depoiments/depoiment-3.png" alt="" />
          </div>
          <div>
            <img className="img-4" src="./depoiments/depoiment-5.png" alt="" />
            <img className="img-5" src="./depoiments/depoiment-4.png" alt="" />
            <img className="img-6" src="./depoiments/depoiment-6.png" alt="" />
          </div>
          <div>
            <img className="img-7" src="./depoiments/depoiment-1.png" alt="" />
            <img className="img-8" src="./depoiments/depoiment-8.png" alt="" />
          </div>
        </div>
      </Content>
    </Container>
  );
}
