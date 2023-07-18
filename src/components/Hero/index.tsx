import { VideoCarousel } from '../VideoCarousel';
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
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/R_HCSdrRCtM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            /> */}
            <VideoCarousel />
          </div>
        </section>
        <a
          href="https://pay.hotmart.com/T81245432Y?sck=HOTMART_PRODUCT_PAGE&hotfeature=32&_gl=1%2a122pa0x%2a_ga%2aMjQ0OTc4NzQ5LjE2NzM5NjMyMjQ.%2a_ga_GQH2V1F11Q%2aMTY4Nzc4OTY2Mi43OS4xLjE2ODc3ODk3NTguNTkuMC4w&bid=1687789763943"
          className="standard"
          target="_blank"
          rel="noreferrer"
        >
          Quero evoluir profissionalmente!
        </a>
      </Content>
    </Container>
  );
}
