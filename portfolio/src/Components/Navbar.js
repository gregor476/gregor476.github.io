import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import { Link } from "react-scroll";


const Item = styled.div`
    position: fixed;
    width: 100%;
    
    text-decoration: none;
    display: block;
    color: #00a3f5;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50%;
    border-style: solid;
    border-color: #00a3f5;
    border-width: 4px;
    height: 50px;
    width: 50px;
    padding: 10px;
    margin: 10px;
    line-height: 100%;
    z-index: 10;

    &:hover {
        background-color: #00a3f5;
        color: white;
        cursor: pointer;
    }
    @media(min-width: 769px) {
        top: 30px;
        right: 10px;
    }
    @media(max-width: 768px) {
        height: 30px;
        width: 30px;
        bottom: 7px;
        left: 7px;
        line-height: 60%;
        

    }

`;

const Navbar=() => {
   return (
    <React.Fragment>
            <Link
                    activeClass="top"
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-0}
                    duration={500}>
                    <Item><div>^</div></Item>
                    </Link>
        </React.Fragment>
   )
};

export default Navbar;