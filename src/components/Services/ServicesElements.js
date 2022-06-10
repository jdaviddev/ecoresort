import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }

`;

export const ServicesWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 20px 20px 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        grid-template-columns: 1fr;
        padding: 0px 20px 20px 20px;
    }
`;

export const ServicesCard = styled.div`
    width: 100%;
    background: #276E90;
    color: #fff;
    display: flex;
    flex-direction: colum;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        max-widht: 100%;
        max-height: 100%; 
    }

    @media screen and (max-width: 480px) {
        max-widht: 100%;
        max-height: 100%; 
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        height: 90px;
        width: 90px;
        @media screen and (max-width: 768px) {
            height: 60px;
            width: 60px;
            margin-bottom: 10px;
        }
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    @media screen and (max-width: 480px) {
        width: 100%;
     }
`;

export const ServicesP =styled.p`
    font-size: 1rem;
    text-align: center;

    
`;