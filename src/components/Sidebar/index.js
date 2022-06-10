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
                <SidebarLink to="/promociones" onClick= {toggle}>Inicio</SidebarLink>
                <SidebarLink to="discover" onClick= {toggle}>Nosotros</SidebarLink>
                <SidebarLink to="areas" onClick= {toggle}>Servicios</SidebarLink>
                <SidebarLink to="rooms" onClick= {toggle}>Informativo</SidebarLink>
                <SidebarLink to="gastronomia" onClick= {toggle}>Procesos</SidebarLink>
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