import { BenefitsList } from './FindCourse.styles';

interface ListProps {
  isWhite?: boolean;
}
export const List = ({ isWhite }: ListProps) => (
  <BenefitsList>
    {isWhite ? (
      <>
        <li>
          <img
            src="./course-benefits/white-clock.svg"
            alt="Relógio de ponteiro"
          />{' '}
          <p>
            Mais de <strong>40h de aulas</strong> já disponíveis
          </p>
        </li>
        <li>
          <img src="./course-benefits/white-laptop.svg" alt="Notebook aberto" />{' '}
          <p>
            Aprenderá a <strong>dominar o MS e P6</strong>
          </p>
        </li>
        <li>
          <img
            src="./course-benefits/white-checklist.svg"
            alt="Lista de tarefas concluída"
          />{' '}
          <p>
            Mais de <strong>100 documentos</strong> modelo
          </p>
        </li>
        <li>
          <img src="./course-benefits/white-pencil.svg" alt="Lápis" />{' '}
          <p>
            Material de estudo <strong>completo e exclusivo</strong>
          </p>
        </li>
        <li>
          <img
            src="./course-benefits/white-question.svg"
            alt="Interrogação representando fórum"
          />{' '}
          <p>
            Espaço para tirar <strong>dúvidas</strong>
          </p>
        </li>
        <li>
          <img
            src="./course-benefits/white-couple.svg"
            alt="Pessoas interagindo"
          />{' '}
          <p>
            Grupo para <strong>network</strong> e <strong>oportunidades</strong>{' '}
            de emprego
          </p>
        </li>
      </>
    ) : (
      <>
        <li>
          <img src="./course-benefits/clock.svg" alt="Relógio de ponteiro" />{' '}
          <p>
            Mais de <strong>40h de aulas</strong> já disponíveis
          </p>
        </li>
        <li>
          <img src="./course-benefits/laptop.svg" alt="Notebook aberto" />{' '}
          <p>
            Aprenderá a <strong>dominar o MS e P6</strong>
          </p>
        </li>
        <li>
          <img
            src="./course-benefits/checklist.svg"
            alt="Lista de tarefas concluída"
          />{' '}
          <p>
            Mais de <strong>100 documentos</strong> modelo
          </p>
        </li>
        <li>
          <img src="./course-benefits/pencil.svg" alt="Lápis" />{' '}
          <p>
            Material de estudo <strong>completo e exclusivo</strong>
          </p>
        </li>
        <li>
          <img
            src="./course-benefits/question.svg"
            alt="Interrogação representando fórum"
          />{' '}
          <p>
            Espaço para tirar <strong>dúvidas</strong>
          </p>
        </li>
        <li>
          <img src="./course-benefits/couple.svg" alt="Pessoas interagindo" />{' '}
          <p>
            Grupo para <strong>network</strong> e <strong>oportunidades</strong>{' '}
            de emprego
          </p>
        </li>
      </>
    )}
  </BenefitsList>
);
