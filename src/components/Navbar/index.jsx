import React, {useEffect, useState} from "react";
import { Nav, NavLogo, NavBarContainer, NavItem, NavLinks, NavMenu, MobileIcon, NavBtn, NavBtnLink } from "./NavBarElements";
import { FaBars } from 'react-icons/fa';
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from "react-scroll"

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>BankBros</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
              >Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
              >Benefits</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='profits'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
              >Profits</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
              >How To Join</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/premium'>Get Premium</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
