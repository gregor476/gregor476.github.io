import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import { Link } from "react-scroll";
const List = styled.ul `
    background-color: #1c1c1c;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
    
`;

const Item = styled.li`
    text-decoration: none;
    float: left;
    display: block;
    color: white;
    text-align: center;
    font-size: 26px;
    padding: 28px 32px;
    text-decoration: none;
    &:hover {
        background-color: lightblue;
        color: black;
        cursor: pointer;
    }
`;

const Navbar=() => {


   return (
    <React.Fragment>
            <List>
                    <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <Item>About</Item>
                    </Link>
                    <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <Item>Projects</Item>
                    </Link>
                    <Link
                    activeClass="active"
                    to="info"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <Item>Info</Item>
                    </Link>
            </List>
        </React.Fragment>
   )
};

export default Navbar;