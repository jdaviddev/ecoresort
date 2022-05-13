import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
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
            <HeroH1>Eco Resort El Manantial</HeroH1>
                <HeroP>
                        Vive la mejor experiencia con tus seres queridos junto a la naturaleza 
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
                Reserva el pase día  {hover ? <ArrowForward/> : <ArrowRight/>}
                </HeroBtnReservas>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection