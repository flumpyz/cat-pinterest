import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 64px;

  background-color: #2196F3;
`;

export const Nav = styled.nav`
  display: flex;

  height: 100%;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 23px;
  padding-left: 23px;
  
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.25px;
  line-height: 21px;
  text-decoration: none;
  
  cursor: pointer;
  
  transition: 0.35s ease-in;
  
  &:hover {
    background-color: #1E88E5;

    color: rgba(255, 255, 255, 1);
  }
`;