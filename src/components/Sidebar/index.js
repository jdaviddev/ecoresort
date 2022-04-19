import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute,
    SideBtnWrap 
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick= {toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick= {toggle}>Sobre Nosotros</SidebarLink>
                <SidebarLink to="discover" onClick= {toggle}>Eventos</SidebarLink>
                <SidebarLink to="areas" onClick= {toggle}>Areas</SidebarLink>
                <SidebarLink to="rooms" onClick= {toggle}>Habitaciones</SidebarLink>
                <SidebarLink to="gastronomia" onClick= {toggle}>Gastronomía</SidebarLink>
                <SidebarLink to="contact" onClick= {toggle}>Contáctenos</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin" onClick= {toggle}>Ingresar</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;