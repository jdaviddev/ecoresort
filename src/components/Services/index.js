import React from 'react';
import Icon1 from '../../images/svg/nature4.svg';
import Icon2 from '../../images/svg/cabana.svg';
import Icon3 from '../../images/svg/explorar.svg';
import Icon4 from '../../images/svg/camping.svg';
import Icon5 from '../../images/svg/pareja.svg';
import Icon6 from '../../images/svg/pesca.svg';

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
                <ServicesH2>Psicina</ServicesH2>
                <ServicesP>
                    Puedes disfrutar de nuestras hermosas cabañas pensadas en ti y tu comodidad rodeado de la naturaleza.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Rio</ServicesH2>
                <ServicesP>
                    Puedes disfrutar de nuestras hermosas cabañas pensadas en ti y tu comodidad rodeado de la naturaleza.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4} />
                <ServicesH2>Acampar</ServicesH2>
                <ServicesP>
                    Puedes acampar y disfrutar de la noche y fogata.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5} />
                <ServicesH2>Fogata en Pareja</ServicesH2>
                <ServicesP>
                    Disfruta de tu pareja y amigos junto a la fogata y ambiente de la noche rodeado de montañas.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6} />
                <ServicesH2>Pesca</ServicesH2>
                <ServicesP>
                    Puedes explrar la pesca mientras compartes momentos junto a la familia.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services