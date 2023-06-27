import { Container, Content } from './Teachers.styles';

export function Teachers() {
  return (
    <Container>
      <Content className="container">
        <h1>
          Conheça seus <strong>professores</strong>
        </h1>

        <div className="teachers">
          <div>
            <div>
              <strong>Edgar Neto</strong>
              <p>
                Atua há 16 anos em diversos segmentos industriais, sendo
                especialista em obras de construção e montagem
                multidisciplinares. É responsável pelo planejamento de grande
                grupo brasileiro. <br /> <br />É professor de capacitação de
                planejadores e profissionais de diversos setores.
              </p>
            </div>
            <img src="./edgar.png" alt="" />
          </div>
          <div>
            <img src="./lenisson.png" alt="" />
            <div>
              <strong>Lenisson Xavier</strong>
              <p>
                Profissional de Planejamento de obras desde 2002, já planejou e
                executou com sucesso empreendimentos dos mais variados
                seguimentos e disciplinas (incluindo projetos para MRV,
                Petrobras, AMBEV, Ford Motors, LARCO, BRASKEM, BAYER, entre
                outros). <br />
                <br />
                <span>Ensina pessoas há 29 anos</span>, foi responsável pela
                <span>
                  {' '}
                  primeira turma do curso de Planejamento de Obras
                </span>{' '}
                de grande escola técnica da cidade de Camaçari, Bahia no ano de
                2004.
              </p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
