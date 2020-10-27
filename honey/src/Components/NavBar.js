import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom'

const NavBar = styled.div`
  position: fixed;
  height: 100px;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 0 25px 25px white;
  z-index: 5;
  @media(max-width: 967px) {
    height: 50px;
  }
`;
const NavItems = styled.div`
  text-align: center;
  margin: 0px auto;
  display: block;
`;
const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: inline-block;
  font-size: 36px;
  margin: 0 30px;
  margin-top: 35px;
  text-align: center;

  @media(max-width: 967px) {
    font-size: 7vw;
    margin: 0 6vw;
  }
  &:hover {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: black;
    cursor: pointer;
  }
  &.active {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: black;  
  }
  
`;


class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar>
          <NavItems>
            <NavItem to={`/about`} >
                About
            </NavItem>
            <NavItem to={`/shop`}>
                Shop
            </NavItem>
          </NavItems>
        </NavBar>
      </React.Fragment>
    );
  }
}
export default Nav;
/*
<NavItem to={`/faq`}>
  F.A.Q
</NavItem>
*/
