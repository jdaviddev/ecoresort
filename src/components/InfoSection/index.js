import React from 'react'
import { Button } from 'react-scroll'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Colum1,
    Colum2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap, 
    Img, 
    ImgWrap } from './InfoElements'

const InfoSection = () => {
  return (
    <>
    <InfoContainer>
        <InfoWrapper>
            <InfoRow>
                <Colum1>
                    <TopLine>TopLine</TopLine>
                    <Heading>Heading</Heading>
                    <Subtitle>Subtitle</Subtitle>
                    <BtnWrap>
                        <Button to='home' />
                    </BtnWrap>
                </Colum1>
                <Colum2>
                    <ImgWrap>
                        <Img />
                    </ImgWrap>
                </Colum2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection