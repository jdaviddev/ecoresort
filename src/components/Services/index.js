import React from 'react';
import Icon1 from '../../images/svg/nature4.svg';
import Icon2 from '../../images/svg/cabana.svg';
import Icon3 from '../../images/svg/explorar.svg';
import Icon4 from '../../images/svg/bicicleta.svg';
import Icon5 from '../../images/svg/camping.svg';
import Icon6 from '../../images/svg/pareja.svg';
import Icon7 from '../../images/svg/pesca.svg';
import Icon8 from '../../images/svg/futbol.svg';
import Icon9 from '../../images/svg/restaurant.svg';
import Icon10 from '../../images/svg/parrilla.svg';
import Icon11 from '../../images/svg/bar.svg';
import Icon12 from '../../images/svg/golf.svg';

import { 
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Nuestros Servicios</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Hospedaje en Cabaña</ServicesH2>
                <ServicesP>
                    Puedes disfrutar de nuestras hermosas cabañas pensadas en ti y tu comodidad rodeado de la naturaleza.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Piscina</ServicesH2>
                <ServicesP>
                    Para adultos y niños, vive la mejor experiencia.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Rio</ServicesH2>
                <ServicesP>
                    Disfruta del agua natural acompañado con una cascada, con un chorro de agua relajante.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4} />
                <ServicesH2>Ciclismo</ServicesH2>
                <ServicesP>
                    Recorre la montaña y disfruta del ecosistema en buena compañía.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5} />
                <ServicesH2>Acampar</ServicesH2>
                <ServicesP>
                    Puedes acampar y disfrutar de la noche y fogata.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6} />
                <ServicesH2>Fogata en Pareja</ServicesH2>
                <ServicesP>
                    Disfruta de tu pareja y amigos junto a la fogata y ambiente de la noche rodeado de montañas.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon7} />
                <ServicesH2>Pesca</ServicesH2>
                <ServicesP>
                    Puedes explrar la pesca mientras compartes momentos junto a la familia.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon8} />
                <ServicesH2>Canchas de Futbol</ServicesH2>
                <ServicesP>
                    Organiza tu equipo y disfruta de las canchas de futbol y voley.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon9} />
                <ServicesH2>Restaurante</ServicesH2>
                <ServicesP>
                    Deleitate de la gastronomía que ofrece El Manantial, con platos criollos y a la carta.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon10} />
                <ServicesH2>Parrillas para asados</ServicesH2>
                <ServicesP>
                    Comparte momentos especiales junto a la familia y amigos utilizando las parrillas para asados en grupos.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon11} />
                <ServicesH2>Bar</ServicesH2>
                <ServicesP>
                    Snack, vinos, bebidas y piqueos para disfrutar al aire libre rodeado de la naturaleza o servicio a cabaña, de tus productos favoritos.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon12} />
                <ServicesH2>Golf</ServicesH2>
                <ServicesP>
                    Diviertete en la mini cancha de Golf y realiza exploración de la hacienda, caminando por sus alrededores, cruzando el puente colgante y utilizando tarabita gigante hasta llegar a los avestruces.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services