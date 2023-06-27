import styled from 'styled-components';

export const Container = styled.div`
  background: #041418;
  min-height: 840px;
  text-align: center;
`;
export const Content = styled.div`
  h1 {
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;
