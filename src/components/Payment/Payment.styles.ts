import styled from 'styled-components';

export const Container = styled.div`
  min-height: 642px;

  .glass {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset;
    backdrop-filter: blur(20px);
    min-height: 642px;
    max-width: 463px;
    font-size: 30px;
    padding: 51px 60px;
    margin-top: -126px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 22px;
      min-height: 472px;
    }
    span:first-child {
      font-size: 27px;
    }
    span {
      font-size: 20px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    .title {
      font-size: 100px !important;
      font-weight: 700;
      @media (max-width: 768px) {
        font-size: 73px !important;
      }
    }
    .value {
      font-size: 27px;
      @media (max-width: 768px) {
        font-size: 19px;
      }
    }
    a {
      margin-top: 32px;
      padding: 20px 19px;
      display: block;
      width: 100%;
    }
    @media (max-width: 1100px) {
      margin-top: 0;
    }
    @media (max-width: 768px) {
      width: 100%;
      padding: 37px 26px;
    }
  }
`;
export const SubContainer = styled.div`
  background: linear-gradient(86deg, #16738d 3.26%, #0b3a47 100%);
  min-height: 557px;
  max-height: 574px;

  img {
    max-height: 74px;
  }
  @media (max-width: 1100px) {
    max-height: 1100px;
  }
  @media (max-width: 768px) {
    max-height: 900px;
  }
  @media (max-width: 600px) {
    max-height: 920px;
  }
  @media (max-width: 505px) {
    max-height: 946px;
  }
  @media (max-width: 421px) {
    max-height: 972px;
  }
`;
export const Content = styled.div`
  .content-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -60px;
  }
  > div {
    justify-content: space-between;
    display: flex;
    align-items: flex-start;

    @media (max-width: 1100px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .logo {
      margin-bottom: 40px;
      @media (min-width: 1100px) and (max-width: 1200px) {
        max-height: 50px;
        margin-bottom: 0;
      }
      @media (max-width: 768px) {
        max-height: 50px;
      }
    }
  }
`;

export const PaymentMethods = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 5px;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
  div {
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;

    img {
      flex: 1;

      @media (max-width: 768px) {
        max-height: 27px;
      }
    }
  }
`;
