import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>TechNova</Logo>
      <NavMenu>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
