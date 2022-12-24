import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SideBarContainer = styled.aside `
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fafafa;
  display: grid;
  align-items: center;
  top: 0;

  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  right: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes) `
  color: #000;
`;

export const Icon = styled.div `
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div `
  color: #fff;
`;

export const SideBarMenu = styled.ul `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`

export const SideBarLink = styled(LinkR) `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #800020;
    transition: 0.2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div `
  display: flex;
  justify-content: center;
`

export const SideBarRoute = styled(LinkR) `
  border-radius: 50px;
  background: #fafafa;
  white-space: no-wrap;
  padding: 16px 64px;
  color: #f2564b;
  font-size: 16px;
  outline: none;
  border-style: solid;
  border-color: #f2564b;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all ease-in-out;
    background: #f2564b;
    color: #fff;
  }

`
