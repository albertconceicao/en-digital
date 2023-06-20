import { BenefitsList } from "./Market.styles";

export const List = () => {
    return (
        <BenefitsList>
              <li>
                <img src="./negative.svg" alt="Ícone de tarefa falha" /> <p><strong>Falham</strong> em otimizar recursos, cronogramas e orçamentos</p>
              </li>
              <li>
                <img src="./negative.svg" alt="Ícone de tarefa falha" /> <p>Entregam projetos <strong>fora de prazos</strong></p>
              </li>
              <li>
                <img src="./negative.svg" alt="Ícone de tarefa falha" /> <p><strong>Não dominam</strong> os melhores sistemas (MS e Primavera P6)</p>
              </li>
              
        </BenefitsList>
    );
}