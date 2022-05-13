import React, {useState} from 'react'
import ImgPromo from '../../images/promociones.jpg'
import {
    PromoContainer,
    PromoBg,
    ImagenBg,
    PromoContent,
    PromoH1,
    PromoP,
    InfoPromoContainer,
    Texto
} from './PromoElements'

const PromoSection = ({isOpen, toggle}) => {
 
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover (!hover)
    }
    return (
        <PromoContainer isOpen={isOpen} onClick= {toggle}>
            <PromoBg>
                <ImagenBg src= {ImgPromo} />
            </PromoBg>
            <PromoContent>
                <PromoH1>Increíbles Promociones</PromoH1>
                    <PromoP>
                        Encuentra los mejores descuentos en las diferentes servicios y productos todos los meses.
                    </PromoP>
            </PromoContent>
        </PromoContainer>
  )
}

export default PromoSection