import { Accordion } from '../Accordion';
import { Container, Content } from './Faq.styles';

export function Faq() {
  return (
    <Container>
      <Content className="container">
        <h1>Perguntas frequentes</h1>

        <Accordion boldTitle="Quais são os benefícios de fazer o curso de planejamento de obras online?">
          <p>
            Quando você está em busca de trabalhar, migrar ou progredir na área
            de gestão de projetos. Os entrevistadores irão querer saber quais
            conhecimentos específicos você desenvolveu para atuar neste
            seguimento. E este curso foi desenvolvido justamente pensando nisso.
            Municiar você com conhecimentos, repertório e ferramentas para
            passar nas entrevistas de trabalho, desenvolver um trabalho
            extraordinário onde estiver contratado e ser um diferencial para o
            mercado.
          </p>
        </Accordion>
        <Accordion boldTitle="Quais são os pré requisitos para se inscrever no curso?">
          <p>
            Conhecimentos prévios de informática, desejo de atuar na área de
            operacionalização de metodologias de gerenciamento de projetos,
            dedicação para assistir aulas online.
          </p>
        </Accordion>
        <Accordion boldTitle="Quanto tempo dura o curso?">
          <p>
            São 40 horas aulas gravadas que você precisa assistir até o final
            para receber ser certificado. Se assistir o programa de duas em duas
            aulas (ideal). Em 20 dias estará concluído. Mas você é livre para
            escolher a velocidade e volume de informações que é capaz de
            absorver.
          </p>
        </Accordion>
        <Accordion boldTitle="O curso oferece algum certificado?">
          <p>
            Sim. Ao término das aulas você pode receber seu certificado que é
            válido em todo o território nacional.
          </p>
        </Accordion>
        <Accordion boldTitle="O curso aborda quais tópicos principais?">
          <p>
            <ul>
              <li>O que é ser um profissional de Planejamento;</li>
              <li>Como e onde atua um profissional de Planejamento;</li>
              <li>
                Quais os principais atributos que os empregadores buscam nos
                profissionais de Planejamento;
              </li>
              <li>Introdução ao gerenciamento de projetos;</li>
              <li>
                Principais metodologias utilizadas no gerenciamento de projetos;
              </li>
              <li>Operacionalização de metodologias;</li>
              <li>Principais técnicas utilizadas na operacionalização;</li>
              <li>
                Principais documentos utilizados durante as fases de um
                empreendimento;
              </li>
              <li>
                Aplicação de técnicas de liderança no planejamento de obras;
              </li>
              <li>
                Utilização do MS-PROJECT no planejamento e controle de obras;
              </li>
              <li>
                Utilização do PRIMAVERA no planejamento e controle de obras.
              </li>
              <li>
                Temos materiais adicionais como livros, apostilas, planilhas,
                gráficos, vídeos de dicas. Entre outros inseridos no curso.
              </li>
            </ul>
          </p>
        </Accordion>

        <Accordion boldTitle="Quanto ganha o profissional de Planejamento?">
          <p>
            Como não é uma profissão com piso salarial definido. Mas uma
            profissão essencial na construção, manutenção e indústria. Os
            profissionais de planejamento estão categorizados nas seguintes
            funções e salário aproximado (em salários mínimos):
            <ul>
              <li>Auxiliar: 1,5 - 2,5</li>
              <li>Assistente: 2-5</li>
              <li>Técnico: 3-10</li>
              <li>Analista: 5-11</li>
              <li>Supervisor: 8-20</li>
              <li>Engenheiro: 8-22</li>
              <li>Coordenador: 10- em diante</li>
              <li>Gerente: 14- em diante</li>
            </ul>
          </p>
        </Accordion>

        <Accordion boldTitle="Como posso me inscrever no curso?">
          <p>
            Através de{' '}
            <a
              href="https://pay.hotmart.com/T81245432Y?sck=HOTMART_PRODUCT_PAGE&hotfeature=32&_gl=1%2a122pa0x%2a_ga%2aMjQ0OTc4NzQ5LjE2NzM5NjMyMjQ.%2a_ga_GQH2V1F11Q%2aMTY4Nzc4OTY2Mi43OS4xLjE2ODc3ODk3NTguNTkuMC4w&bid=1687789763943"
              target="_blank"
              rel="noreferrer"
            >
              nossa página no Hatmart
            </a>
          </p>
        </Accordion>
        <Accordion boldTitle="Há suporte disponível durante o curso?">
          <p>
            Sim. Você poderá participar de nossa comunidade no WhatsApp e tirar
            dúvidas, compartilhar experiência e materiais além de divulgar
            vagas. Tem o suporte técnico da plataforma e pode tirar dúvidas com
            os professores.
          </p>
        </Accordion>
        <Accordion boldTitle="Quanto tempo o curso estará disponível para fazer consulta?">
          <p>
            É uma assinatura de 2 anos. Durante esse tempo você terá acesso a
            todo o material
          </p>
        </Accordion>
      </Content>
    </Container>
  );
}
