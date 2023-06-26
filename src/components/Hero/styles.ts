import styled from 'styled-components';

export const Container = styled.div`
  background: url('./heroImage.png') no-repeat center;
  background-size: cover;
  min-height: 792px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    color: #01b4e5;
  }
  .course-title {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 515px;
    margin-bottom: 59px;

    span {
      font-size: 24px;
      .uppercase {
        font-weight: 700;
      }
    }
    @media (max-width: 768px) {
      span {
        font-size: 16px;
      }
      img {
        width: 56.39px;
        height: 33.56px;
      }
      gap: 6px;
      margin-bottom: 28px;
    }
  }
  > section {
    display: flex;
    justify-content: center;
    gap: 70px;
    .sales-text {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
    }
    .sub-text {
      font-size: 25px;

      strong:first-child {
        color: #fff;
      }
    }
    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    margin-bottom: 30px;
  }

  @media (max-width: 1264px) {
    section {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    .sales-text {
      font-size: 22px !important;
      line-height: normal !important;
      max-width: fit-content;
    }
    .sub-text {
      font-size: 16px !important;
    }
    section {
      gap: 18px;
    }
    iframe {
      max-width: 430px;
    }
  }
  @media (max-width: 500px) {
    iframe {
      max-width: 320px;
    }
  }
`;
