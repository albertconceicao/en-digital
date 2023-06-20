import { Container, Content } from './Methodology.styles';


export function Methodology() {
  return (
    <Container>
      <Content className='container'>
        <section>
          <div>
            <p className='sales-text'>Decidimos revelar a <strong>metodologia</strong> que nos trouxe o título de gestores <strong>requisitados e desejados.</strong></p>
            <p className='sub-text'>Transformamos nossa experiência adquirida em <strong>mais de 20 anos de atuação</strong> em empreendimentos de diversas modalidades, desde a Construção Civil a Montagem de grandes plantas industriais, e <strong>transformamos em um curso prático e completo</strong> para <strong>acelerar sua carreira.</strong></p>
          </div>

          <button className='standard button-web'>Quero acelerar meus resultados!</button>
          <button className='standard button-mobile'>Quero acelerar resultados!</button>
        </section>
      </Content>
    </Container>
  );
}
