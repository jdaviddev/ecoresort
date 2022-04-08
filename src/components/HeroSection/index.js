import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight 
} from './HeroElements'
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover (!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src = {Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Eco Resort El Manantial</HeroH1>
                <HeroP>
                        Vive la mejor experiencia con tus seres queridos junto a la naturaleza 
                </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave ={onHover}
                        primary='true'
                        dark='true'>
                Reserva Ahora {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection