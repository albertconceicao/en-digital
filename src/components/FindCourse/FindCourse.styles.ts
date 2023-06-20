import styled from 'styled-components';

export const Container = styled.div`
background: radial-gradient(122.85% 714.73% at 0% 0%, #151515 0%, rgba(11, 58, 71, 0.85) 100%);
min-height: 597px;
`;
export const Content = styled.div`
section {
    display: flex;
    > img {
        margin-left: auto;
        max-width: 531px;
        max-height: 506px;
    }
    .title {
        max-width: 547px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        h1 {
            font-size: 42px;
            font-weight: 800;
            line-height: 47.88px;
        }
        p {
            font-size: 23px;
            line-height: 34.5px;
        }
        margin-bottom: 33px;
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 60px;
        > img {
        margin-left: 0;
    }
    }
    @media (max-width: 768px) {
        .title {
            gap: 31px;

            h1 {
                font-size: 22px;
                line-height: 26.62px;
            }
            p {
                font-size: 20px;
                line-height: 30px;
            }
        }
        > img {
            max-width: 341px;
            max-height: 326px;
        }
    }
    
}
`;

export const BenefitsList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
max-width: 565px;
li {
    display: flex;
    gap: 20px;
    align-items: center;
    
    p {
        font-size: 20px;
        line-height: 40px;
        @media (max-width: 768px) {
            font-size: 16px;
            line-height: 30px;
        }
    }
}
`;