import styled from 'styled-components'

export const PromoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
    width: 100%;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-dradient(180deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%), linear-gradient (180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2; 
    }
    /* add :before styles */ 
`;

export const PromoBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImagenBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
   
`;

export const PromoContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PromoH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size:40px;
    }

    @media screen and (max-width: 480 px) {
        font-size: 32px;
    }
`;

export const PromoP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size:24px;
    }

    @media screen and (max-width: 480 px) {
        font-size: 18px;
    }
`;

export const InfoPromoContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;

`;

export const Texto = styled.p`
    color: blue;
`;

// --* STILO DE TARJETAS *-- //

//es la tarjeta en si
export const CardContainer = styled.div`
    
`;

//contenedor de tarjetas
export const ContainerTarj = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 20px 20px 20px;
    margin: 10px 10px 10px 10px;

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


export const CardBody = styled.div`
    
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    background: red;
    overflow: hidden;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
    transition: all 400ms ease;
    background: green;

    &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.div`
    padding: 1rem;
    font-weight: bold;
`;

export const Info = styled.div`
    padding: 0 1rem;
`;