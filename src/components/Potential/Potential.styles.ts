import styled from 'styled-components';

export const Container = styled.div`
  background: url('./bg-potential2.png') no-repeat left center, #151515;
  background-size: cover;
  min-height: 564px;
  margin-left: -214px;

  @media (max-width: 992px) {
    margin-left: 0;
    background: url('./bg-potential-tablet.png') no-repeat center, #151515;
  }
  @media (max-width: 768px) {
    background: url('./bg-potential-mb2.svg') no-repeat left center, #151515;
    margin-left: 0;
    background-size: cover;
  }
`;
export const Content = styled.div`
  margin-left: 214px;
  min-height: 500px;
  @media (max-width: 768px) {
    margin-left: 0;
  }

  img {
    max-width: 637px;
    max-height: 648px;
    position: relative;
    left: -97px;
  }

  p {
    max-width: 637px;
    font-size: 34px;
    margin-left: auto;
    margin-top: 137px;
    line-height: 54px;
    /* text-shadow: 2px 2px black; */
    strong {
      color: #fff;
      font-weight: 700;
      &:first-child {
        color: #00b4e5;
      }
    }
    @media (max-width: 1350px) {
      max-width: 500px;
      font-size: 26px;
      line-height: 40px;
    }
    @media (max-width: 1200px) {
      max-width: 400px;
      font-size: 20px;
      line-height: 30px;
    }
    @media (max-width: 768px) {
      max-width: none;
      margin-top: -39px;
    }
  }
`;
