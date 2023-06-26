import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.section`
  text-align: center;

  h1 {
    font-size: 35px;
  }
  img {
    margin-bottom: 40px;
    max-height: 74px;
  }
  @media (max-width: 550px) {
    img {
      max-height: 44px;
    }
    h1 {
      font-size: 22px;
    }
  }
`;
