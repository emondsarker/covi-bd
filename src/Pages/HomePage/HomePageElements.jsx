import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const HomeIntro = styled.div `
    padding-top: 30px;
    padding-left: 30px;

    font-weight: bolder;
    text-align:center;


    h1{

      padding-left: 10px;
      position:relative;
      z-index:11;

    }
    p{
      line-height: 1.5;

      padding: 20px;
      font-size: 30%;
      color: #404040;
      position:relative;
      z-index:10;
    }



  @media screen and (max-width: 768px){
    padding-top: 40px;
    padding-left: 0px;
    font-weight: bolder;
    text-align: center;

    /* transition: 0.8s all ease; */
    color: #000;
    h1{
      padding-top: 0px;
      padding-left: 0px;
      position:relative;
      z-index:11;
    }
    p{
      max-width: 500px;
      margin: auto;
      padding: 20px;
      text-align: center;
      padding-left: 0px;
      font-size: 50%;
      color: #404040;
      position:relative;
      z-index:10;
    }
    img{
      position: absolute;
      text-align: center;
      left: 0px;
      top: 306px;
    }
  }
`

export const HomeAbout = styled.div `
    padding-top: 30px;
    padding-left: 30px;
    font-size: 350%;

    height: 100px;

    bottom: 0px;
    width: 100%;

  @media screen and (max-width: 768px){
    padding-top: 30px;
    padding-left: 0px;
    font-size: 150%;
    /* transition: 0.8s all ease; */
    color: #000;
  }
`

export const StartBtn = styled.nav `
  padding-left: 30px;
  align-items: center;
  position: absolute;
  @media screen and (max-width: 768px){
    position: relative;
    padding-left: 0px;
    bottom: 300px;
  }
`

export const StartBtnLink = styled(LinkR) `
  border-radius: 50px;
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
    color: #fff;
  }
`

export const CovidStatOverview = styled.table `
  align-items: center;
  text-align: center;
  padding-top:20px;
  width: 100%;
  table-layout: fixed;

  .tableHeader{
    color: grey;
    font-style: italic;
    height: 30px;
  }
  .tableBody{
    font-size:150%;
    font-weight: bold;
    color: black;
  }

  @media screen and (max-width: 768px){
    max-width: 768px;
    font-size: 80%;

    .tableBody{
      font-size:150%;

      font-weight: bold;
      color: black;
    }
  }
`
