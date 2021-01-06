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
    height: 30px;
    width: 30px;
    padding: 10px;
    margin: 10px;
    line-height: 23%;
    z-index: 10;
    transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
    &:hover {
        background-color: #00a3f5;
        color: white;
        cursor: pointer;
    }
    @media(min-width: 769px) {
        top: 15px;
        right: 10px;
    }
    @media(max-width: 768px) {
        bottom: 45px;
        left: 7px;
    }
`;
const BottomShadow= styled.div`
    position: fixed;
    box-shadow: 0 -16px 16px 16px white;
    width: 100%;
    top: 102vh;
    z-index: 10;
    background: red;
    height: 10px;
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
                    <Item><div>^ I</div></Item>
                    <BottomShadow/>
            </Link>
        </React.Fragment>
   )
};

export default Navbar;