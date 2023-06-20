import styled from 'styled-components';

export const Container = styled.div`
background: linear-gradient(270.51deg, #151515 50.44%, #16738D 727.94%);
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
        max-width: 776px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        h1 {
            font-size: 42px;
            font-weight: 800;
            line-height: 47.88px;
        }
        strong {
            color: #D84727;
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
max-width: 640px;
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