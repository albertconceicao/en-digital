import { Accordion } from '../Accordion';
import { Container, Content } from './CourseModules.styles';

export function CourseModules() {
  return (
    <Container>
      <Content className="container">
        <div>
          <h1>O que você vai aprender no</h1>
          <img src="./course-logo.svg" alt="" />
        </div>

        <Accordion title="Modulo I" boldTitle="Introdução">
          <p>
            Você aprenderá a base para iniciar seu estudo. <br />
            Saberá o que é ser um profissional de planejamento, conhecerá os
            modelos de gestão, CAPEX e OPEX, estudo de escopo, gerenciamento de
            projetos e muito mais.
          </p>
        </Accordion>
        <Accordion
          title="Modulo II"
          boldTitle="Projeto e Rotina de Planejamento"
        >
          <p>
            Você aprenderá todos os passos necessários para planejar um projeto
            <strong> com sucesso</strong>. <br />
            Conhecerá as fases de execução de um projeto, os principais
            documentos e métodos utilizados, as entradas e saídas do
            planejamento, a rotina de trabalho do planejamento, as técnicas de
            planejamento, a execução do planejamento, replanejamento, estudo de
            matriz de responsabilidades, rotina do PMO e estudo e planejamento
            de projetos multidisciplinares.
          </p>
        </Accordion>
        <Accordion title="Modulo III" boldTitle="MS na Prática">
          <p>
            Você será capaz de dominar todas as funcionalidades oferecidas pelo
            Microsoft [nome completo]. <br /> Aprenderá as configurações
            essenciais da ferramenta, a modelagem de EAP por produto e fase, a
            definição de pool de recursos, elaboração de cronograma, definição
            de curva de avanço, modalidades de nivelamento, custos do projeto,
            definição de preço do orçamento.
          </p>
        </Accordion>
        <Accordion title="Modulo IV" boldTitle="Primavera na prática">
          <p>
            Você será capaz de dominar todas as funcionalidades oferecidas pelo
            Primavera P6. <br />
            Aprenderá as configurações essenciais da ferramenta, a modelagem de
            EAP, a definição de pool de recursos, elaboração de cronograma,
            definição de linha de base, extração de histogramas dos recursos,
            definição de relatórios e extração de curvas de avanços.
          </p>
        </Accordion>
        <Accordion boldTitle="Módulo de insights">
          <p>
            Neste módulo você encontra aulas bônus repletas de insights
            poderosos sobre planejamento e gestão de projetos.
          </p>
        </Accordion>
      </Content>
    </Container>
  );
}
