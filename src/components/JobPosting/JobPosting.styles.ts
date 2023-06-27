import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(325deg, #151515 35.6%, #16738d 100%);
  min-height: 764px;
`;

export const Content = styled.section`
  > div {
    display: flex;
    align-items: center;

    img {
      max-width: 683px;
      max-height: 683px;
      @media (max-width: 768px) {
        max-height: 374px;
      }
    }
  }
  p {
    font-size: 31px;
    strong:first-child {
      color: #a5c882;
    }
    strong {
      color: #fff;
    }
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  .content-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    a {
      padding: 10px 19px;
      strong {
        color: #fff;
      }
      @media (max-width: 768px) {
        font-size: 16px;
        padding: 10px 19px;
      }
    }
  }
  @media (max-width: 1300px) {
    > div {
      flex-direction: column-reverse;
      justify-content: center;
    }
    .content-box {
      justify-content: center;
      align-items: center;
    }
  }
`;
