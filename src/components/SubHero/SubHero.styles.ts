import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 47px;
  }
  section {
    display: flex;
    justify-content: center;
    gap: 30px;
    div {
      flex: 1;
      max-width: 368px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: flex-start;
      background: #26292c;
      box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.31);
      padding: 23px 43px 47px 43px;
      strong {
        font-weight: 700;
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;

      div {
        max-width: 100%;
      }
    }
  }
`;
