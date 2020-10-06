import React from 'react';
import styled from '@emotion/styled';

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

function Navbar() {
    return (
        <React.Fragment>
            <List>
                <Item>About</Item>
                <Item>Projects</Item>
                <Item>Info</Item>
            </List>
        </React.Fragment>
    );
}
export default Navbar;