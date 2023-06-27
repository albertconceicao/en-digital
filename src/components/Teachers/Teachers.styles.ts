import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  img {
    max-width: 539px;

    @media (max-width: 600px) {
      max-width: 366px;
    }
  }
  h1 {
    text-align: center;
    font-size: 42px;
    font-weight: 700;

    strong {
      color: #01b4e5;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  .teachers {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      gap: 100px;
    }

    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 100px;

      @media (max-width: 768px) {
        gap: 50px;
      }
      @media (max-width: 1200px) {
        flex-direction: column-reverse;

        &:nth-child(even) {
          flex-direction: column;
        }
      }
      p {
        font-size: 20px;
        line-height: 35px;
        margin-top: 10px;
        span {
          font-weight: 700;
        }
      }
      strong {
        color: #01b4e5;
        font-size: 30px;
        font-family: Poppins;
        font-weight: 700;
      }
    }
  }
`;
