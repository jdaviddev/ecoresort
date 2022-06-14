import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import logo from '../../images/logo.png';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    Logo,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroBtnReservas,
} from './HeroElements'
const HeroSection = ({isOpen, toggle}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover (!hover)
    }

  return (
    <HeroContainer isOpen={isOpen} onClick= {toggle}>
        <HeroBg>
            <VideoBg autoPlay loop muted src = {Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <figure><Logo><img src={logo} alt='Logo'/> </Logo> </figure>
                <HeroP>
                        Acompañamos al gremio Bananero 
                </HeroP>
            <HeroBtnWrapper>
                <HeroBtnReservas 
                        to='/daypass'
                        onMouseEnter={onHover} 
                        onMouseLeave ={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                >        
                Escuela de Piloto, conoce más  {hover ? <ArrowForward/> : <ArrowRight/>}
                </HeroBtnReservas>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection