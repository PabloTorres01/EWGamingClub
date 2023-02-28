import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 0px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Navbar = styled.nav`
  flex: 1;
  text-align: center;
  margin: 0 80px;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  margin: 0 40px;
  margin-top: 15px;
  font-family: Lato, sans-serif;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: 600;

  &:hover {
    color: #666666;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <NavList>
          <NavItem>
            <NavLink href="#">TEAMS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CALENDARIO</NavLink>
          </NavItem>
             <LogoContainer>
                <Logo src= 'my-app\public\EWLOGO.png' alt="Logo" />
            </LogoContainer>
          <NavItem>
            <NavLink href="#">SOMOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CONTACTO</NavLink>
          </NavItem>
        </NavList>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
