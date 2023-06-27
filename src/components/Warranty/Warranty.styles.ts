import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1200px) {
    background: url('./warranty-background.png');
    background-size: cover;
  }
`;

export const Content = styled.div`
  text-align: center;

  img {
    max-height: 100%;
    @media (max-width: 768px) {
      max-height: 200px;
    }
    @media (max-width: 450px) {
      max-height: 150px;
    }
  }
`;
