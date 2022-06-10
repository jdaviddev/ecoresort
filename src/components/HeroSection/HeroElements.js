import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
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
        z-index:2; 
    }
    /* add :before styles */
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.div`

`;

export const HeroH1 = styled.h1`
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

export const HeroP = styled.p`
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

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: colum;
    align-items: center;
    text-decoration: none;

`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const HeroBtnReservas = styled(LinkR)`
    border-radius: 50px;
    text-decoration: none;
    background: #cd2525; //color boton 01bf71
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606; //color texto boton del menu mobile
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;



/*----- Sile Form ------*/

export const HeroReservaH2 = styled.h2`
    margin-top: 20px;
`;

export const Reserva = styled.div`
    position: absolute;
    display: flex;
    top: 75%;
    width: 60vh;
    background-color: rgba(0, 0, 0, 0.7);
    height: 18vh;
    boder-radius: 5px;
    color: #fff;

    @screen and (max-width: 768px){
        width: 100%;
        position: none;

    }
`;

export const Input = styled.input.attrs(props => ({type: "text"}))`
    display: flex;
    width: 45vh;
    align: center;
    outline: none;
    border: none;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: #fff;
    border: none;
    border-radius: 3px;
    ::placeholder {
        color: #000;
    }

`;

export const HeroReservaContainer = styled.div`
    color: #fff;;
    border: none;
    text-align: center;

`;

export const ReservaComponente = styled.div`
    width: 100%;
    height: 8vh;
    margin: 10px 0px 0px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ReservaCheckIn = styled.div`
    background: red;
    width: 15vh;
`;

export const ReservaCheckOut = styled.div`
    background: #555;
    width: 15vh;
`;

export const ReservaCheckPersona = styled.div`
    background: #000;
    width: 15vh;
`;

export const ReservaCheckBtn = styled.div`
    background: blue;
    width: 15vh;
`;