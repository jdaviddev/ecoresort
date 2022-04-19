import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import ReactDOM from 'react-dom';
import '../Styles/PikersCalendar.css';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CalendarIn from './Calendario';
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
    HeroReservaH2,
    Reserva,
    HeroReservaContainer,
    ReservaComponente,
    ReservaCheckIn,
    ReservaCheckOut,
    ReservaCheckPersona,
    ReservaCheckBtn
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
                <Button to="/daypass" 
                        onClick= {toggle}
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
                Reserva el pase día {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
       {/*<Reserva> 
            <HeroReservaContainer>
                <HeroReservaH2>Disfruta de la estadía</HeroReservaH2>
                <span>Busca tu día ideal para compartir y disfrutar con las personas que más quieres</span>
                    <ReservaComponente>
                        <ReservaCheckIn>
                            Fecha Ingreso
                        </ReservaCheckIn>
                        <ReservaCheckOut>
                            Fecha Salida
                        </ReservaCheckOut>
                        <ReservaCheckPersona>
                            Numero Personas
                        </ReservaCheckPersona>
                        <ReservaCheckBtn>
                            Boton
                        </ReservaCheckBtn>

                    </ReservaComponente>
            </HeroReservaContainer>
  </Reserva> */}
    </HeroContainer>
  )
}

export default HeroSection