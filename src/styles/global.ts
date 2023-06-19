import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
  }
  .container {
    padding: 80px 111px 102px;

    @media (max-width: 1200px) {
    padding: 80px 60px 102px;
    }
    @media (max-width: 992px) {
        padding: 80px 40px 102px;
    }
    @media (max-width: 768px) {
        padding: 72px 26px 59px 26px;
    }
  }
`;
