import styled from 'styled-components';

export const Container = styled.div`
  background: url('./methodology.svg') no-repeat center;
  min-height: 639px;
  background-size: cover;

  @media (max-width: 768px) {
    background: url('./methodology-mb.svg') no-repeat center;
    background-size: cover;
  }
`;
export const Content = styled.div`
  max-width: 798px;
  .standard {
    padding: 10px 26px;
  }
  .button-mobile {
    display: none;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;

    .sales-text {
      font-weight: 700;
      font-size: 32px;
      line-height: 52.5px;
      strong {
        color: #00b4e5;
      }
    }
    .sub-text {
      font-size: 25px;
      line-height: 37.5px;
      strong:last-child {
        color: #00b4e5;
      }
    }
  }
  @media (max-width: 768px) {
    div .sales-text {
      font-size: 22px;
      line-height: 33px;
    }
    div .sub-text {
      font-size: 17px;
      line-height: 25.5px;
    }
    .button-mobile {
      display: block;
      width: 100%;
    }
    .button-web {
      display: none;
    }
  }
`;
