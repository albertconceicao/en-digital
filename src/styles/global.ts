import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Poppins, sans-serif;
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
  .standard {
    max-width: 374px;
    min-height: 70px;
    background: #00B4E5;
    border: 1px solid #00B4E5;
    border-radius: 7px;
    padding: 10px 88px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    line-height: 30px;
    text-decoration: none;
    @media (max-width: 1264px) {
        margin: 0 auto;
        max-width: 100%;
    }
}
`;
