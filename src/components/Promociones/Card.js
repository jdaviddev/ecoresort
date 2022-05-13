import React from 'react'
import {
    CardContainer,
    CardBody,
    Img,
    Title,
    Info
} from './PromoElements'

function CardPromociones( { img, titulo, descripcion} ) {
  return (
    <CardContainer>
        <CardBody>
            <Img src={img} />|
            <Title> {titulo} </Title>
            <Info> {descripcion} </Info>
        </CardBody>
    </CardContainer>
 )
}

export default CardPromociones