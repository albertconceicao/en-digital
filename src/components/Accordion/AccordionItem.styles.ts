import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 0;
`;
export const Content = styled.div`
  max-width: 679px;
  margin: 0 auto;
  border: none !important;
  button {
    width: 100%;
    position: relative;
    text-align: left;
    padding: 16px 20px;
    border: none;
    background: #16738d;
    outline: none;
    cursor: pointer;
    border-radius: 7px;
    transition: height 5.5s ease-in-out;
    p,
    ul {
      color: #fff;
      font-size: 17px;
      line-height: 35px;
      @media (max-width: 500px) {
        font-size: 14px;
      }
      @media (max-width: 410px) {
        font-size: 13px;
      }
      a {
        text-decoration: none;
        font-weight: bolder;
        color: #041418;
      }
    }
    ul {
      padding: 0 18px;
    }

    > p {
      display: flex;
      justify-content: space-between;
    }
    div {
      color: #fff;
      margin: 20px 0;
      transition: display 5.5s ease-in-out;
    }
    .icon {
      font-size: 24px;
    }
    &:active,
    &:target {
      background: #16738d;
    }
  }
`;
