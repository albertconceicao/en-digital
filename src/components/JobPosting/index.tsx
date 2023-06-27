import { Container, Content } from './JobPosting.styles';

export function JobPosting() {
  return (
    <Container>
      <Content className="container">
        <div>
          <img src="./job-posting.webp" alt="" />

          <div className="content-box">
            <p>
              Mas está <strong>carente</strong> de profissionais que assumem
              projetos complexos e trazem <strong>resultados reais</strong>,
              carregando a essência do verdadeiro gestor de projetos.
            </p>
            <a
              href="https://pay.hotmart.com/T81245432Y?sck=HOTMART_PRODUCT_PAGE&hotfeature=32&_gl=1%2a122pa0x%2a_ga%2aMjQ0OTc4NzQ5LjE2NzM5NjMyMjQ.%2a_ga_GQH2V1F11Q%2aMTY4Nzc4OTY2Mi43OS4xLjE2ODc3ODk3NTguNTkuMC4w&bid=1687789763943"
              className="standard"
              target="_blank"
              rel="noreferrer"
            >
              Quero ser um <strong>verdadeiro</strong> Profissional de
              Planejamento!
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
}
