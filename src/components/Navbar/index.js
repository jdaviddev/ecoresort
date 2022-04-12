import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
   <>
     <Nav>
         <NavbarContainer>
             <NavLogo to='/'>EcoResort</NavLogo>
             <MobileIcon onClick={toggle}>
                 <FaBars />
             </MobileIcon>
             <NavMenu>
                 <NavItem>
                     <NavLinks to="about">Sobre Nosotros</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="discover">Eventos</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="services">Servicios</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="area">Áreas</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="rooms">Habitaciones</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="gastronomia">Gastronomía</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to="contact">Contáctenos</NavLinks>
                 </NavItem>
             </NavMenu>
             <NavBtn>
                 <NavBtnLink to="/signin">Ingresar</NavBtnLink>
             </NavBtn>
         </NavbarContainer>
     </Nav>
    </>
  )
}

export default Navbar