import styled from 'styled-components';

export const Container = styled.div`
  background: #030e12;
  min-height: 856px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 36px;
  img {
    max-height: 60px;
  }
  @media (max-width: 550px) {
    img {
      max-height: 44px;
    }
    h1 {
      font-size: 22px;
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;

      img {
        max-width: 368px;

        @media (max-width: 1200px) {
          max-width: 340px;
        }
      }
      .img-1 {
        max-height: 224px;
      }

      .img-2 {
        max-height: 114px;
      }

      .img-3 {
        max-height: 156px;
      }

      .img-4 {
        max-height: 139px;
      }

      .img-5 {
        max-height: 139px;
      }

      .img-6 {
        max-height: 282px;
      }

      .img-7 {
        max-height: 451px;
        max-width: 309px;
      }

      .img-8 {
        max-height: 112px;
        max-width: 309px;
      }
    }
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      img {
        max-width: 340px;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
