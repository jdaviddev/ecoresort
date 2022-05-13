import React, {useState} from 'react'
import ImgPromo1 from '../../images/promo1.jpeg'
import ImgPromo2 from '../../images/promo2.jpeg'
import ImgPromo3 from '../../images/promo3.jpeg'
import CardPromociones from './Card'
import { ContainerTarj } from './PromoElements'
const DataPromociones = () => {
 
    return (
    <ContainerTarj>
        <CardPromociones 
            img= {ImgPromo1}
            titulo='Card 1'
            descripcion='Detalle de card 1 colocar bastante texto para el desatlle de la card y verificar si funciona'
        />

        <CardPromociones 
            img= {ImgPromo2}
            titulo='Card 1'
            descripcion='Detalle de card 1 colocar bastante texto para el desatlle de la card y verificar si funciona'
        />

        <CardPromociones 
            img= {ImgPromo3}
            titulo='Card 1'
            descripcion='Detalle de card 1 colocar bastante texto para el desatlle de la card y verificar si funciona'
        />

    </ContainerTarj>

  )
}

export default DataPromociones