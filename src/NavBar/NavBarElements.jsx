import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Nav = styled.nav`
  background: #fafafa;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 884px){
    transition: 0.8s all ease;
    color: #000;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  color: #000;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  text-decoration: none;

  img{
    width: 30px;
    height: 50px;
    padding-top: 2px;
    padding-right: 3px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 884px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 884px) {
    display: none;
  }
`

export const NavItem = styled.li `
  height: 80px;
`
export const NavLinks = styled(LinkR) `
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    color: #004a47;
  }
  &.active {
    color: #004a47;
  }
`
export const NavLinks2 = styled(LinkR) `
  color: #000;
  background: #fafafa;
  border-radius: 25px;
  margin-left: 6px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 32px;
  cursor: pointer;
  &:hover{
    background: #004a47;
    color: white;
  }
  &.active {
    color: #004a47;
  }
`

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  color: #004a47;

  .AccountCircleIcon{
    padding: 10px;
  }
  @media screen and (max-width: 884px){
    display: none;
  }
`
export const AccountCircle = styled(AccountCircleIcon) `
  display: flex;
  align-items: center;
  color: darkgrey;
  margin-right: 10px;

  &:hover{
    color: #004a47;

  }
  @media screen and (max-width: 884px){
    display: none;
  }
`
export const NavBtn2 = styled.nav `
  display: flex;
  align-items: center;

  @media screen and (max-width: 884px){

  }
`

export const NavBtnLink = styled(LinkR) `
  border-radius: 50px;
  background: #fafafa;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f24726;
  border-style: solid;
  border-color: #f24726;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #f24726;
    color: #fff;
  }

  @media screen and (max-width: 884px){
    /* display: none; */
  }
`

export const NavBtnLink2 = styled(LinkR) `
  display:none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #f24726;
    color: #fff;
  }

  @media screen and (max-width: 884px){
    /* display: none; */
    border-radius: 50px;
    background: #fafafa;
    white-space: nowrap;
    padding: 10px 22px;
    color: #f24726;
    border-style: solid;
    border-color: #f24726;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 40%);
    cursor: pointer;
  }

    @media screen and (max-width: 380px){
      display:none;
    }
`
