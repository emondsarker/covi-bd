import React from 'react'
import {SideBarContainer, Icon, CloseIcon,
SideBarWrapper, SideBarMenu, SideBarLink,
SideBtnWrap, SideBarRoute} from './SideBarElements'


const SideBar = ({ isOpen, toggle }) => {
  return(
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
      <SideBtnWrap>
        <SideBarRoute to='/emergency'> EMERGENCY </SideBarRoute>
      </SideBtnWrap>
        <SideBarMenu>
          <SideBarLink to='/home'> Home </SideBarLink>
          <SideBarLink to='/services'> Services </SideBarLink>
          <SideBarLink to='/hospital'> Hospitals </SideBarLink>
          <SideBarLink to='/vaccine'> Vaccines </SideBarLink>
          <SideBarLink to= 'signup'> Sign Up</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
