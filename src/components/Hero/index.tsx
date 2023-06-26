import { Container, Content } from './styles';

export function Hero() {
  return (
    <Container>
      <Content className="container">
        <div className="course-title">
          <img src="./helmet.svg" alt="" />

          <span>
            <span className="uppercase">CURSO </span>planejamento e gestão de{' '}
            <strong>PROJETOS MULTIDISCIPLINARES</strong>
          </span>
        </div>
        <section>
          <div>
            <p className="sales-text">
              Torne-se um Profissional de Planejamento especialista em{' '}
              <strong>gerenciar projetos complexos</strong> e impulsione sua
              evolução profissional em apenas <strong>90 dias</strong>
            </p>

            <p className="sub-text">
              Domine as melhores práticas e técnicas para gerir projetos de alta
              complexidade, conquistando{' '}
              <strong>mais valor e reconhecimento</strong>, tornando-se um{' '}
              <strong>destaque na área!</strong>
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2uU_WrANmxI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
        <button type="button" className="standard">
          Quero evoluir profissionalmente!
        </button>
      </Content>
    </Container>
  );
}
