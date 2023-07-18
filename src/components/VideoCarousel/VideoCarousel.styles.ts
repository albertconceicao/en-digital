import styled from 'styled-components';

export const Container = styled.div`
  .carousel {
  }
  .carousel-control-prev,
  .carousel-control-next {
    max-height: 100px;
  }
  .carousel-indicators {
    margin-bottom: -20px !important;
  }
  button {
    background: #fff;
    background-clip: unset;
    border-bottom: none !important;
  }
  button.active {
    background: #00b4e5 !important;
    max-height: 10px;
  }
`;
