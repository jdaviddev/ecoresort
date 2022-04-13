import React from "react";
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
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
    SocialIconLink
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
                    <FooterLinkTitle>Sobre Nostros</FooterLinkTitle>
                    <FooterLink to="/signin">Enlace 1</FooterLink>
                    <FooterLink to="/signin">Enlace 2</FooterLink>
                    <FooterLink to="/signin">Enlace 3</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/signin">Enlace 1</FooterLink>
                    <FooterLink to="/signin">Enlace 2</FooterLink>
                    <FooterLink to="/signin">Enlace 3</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Recomendaciones</FooterLinkTitle>
                    <FooterLink to="/signin">Enlace 1</FooterLink>
                    <FooterLink to="/signin">Enlace 2</FooterLink>
                    <FooterLink to="/signin">Enlace 3</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Redes Sciales</FooterLinkTitle>
                    <FooterLink to="/signin">Enlace 1</FooterLink>
                    <FooterLink to="/signin">Enlace 2</FooterLink>
                    <FooterLink to="/signin">Enlace 3</FooterLink>
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
                    <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
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
