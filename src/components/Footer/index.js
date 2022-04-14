import React from "react";
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaMapMarkedAlt} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterIconData
} from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Datos de Contacto</FooterLinkTitle>
                    <FooterLink to="/"><FooterIconData> <FaWhatsapp/> </FooterIconData> Llamadas o WhatsApp: (+593) 998452818</FooterLink>
                    <FooterLink to="/"><FooterIconData> <GoMail/> </FooterIconData>elmanantialresort@gmail.com</FooterLink>
                    
                </FooterLinksItems>
                
                <FooterLinksItems>
                    <FooterLinkTitle>Recomendaciones</FooterLinkTitle>
                    <FooterLink to="/">Oro Natural House</FooterLink>
                    <FooterLink to="/">Restaurante Taipa</FooterLink>
                    
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Ubicación</FooterLinkTitle>
                    <FooterLink to="/"> <FooterIconData> <FaMapMarkedAlt/> </FooterIconData> Valle de Saracay Km3, vía Piñas (a 3 minutos de la Y de Saracay)</FooterLink>
                  
                </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>Eco Resort El Manantial</SocialLogo>
                <WebsiteRights> jdaviddev © {new Date().getFullYear()} Todos los derechos reservados</WebsiteRights>
               {// <WebsiteRights> jdaviddev © 2022 </WebsiteRights> 
               }
                <SocialIcons>
                    <SocialIconLink href="//www.facebook.com/EcoResort-El-Manantial-112643523898646/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="//www.instagram.com/ecoresort.elmanantial?igshid=YmMyMTA2M2Y=" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="YouTube">
                        <FaYoutube />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
