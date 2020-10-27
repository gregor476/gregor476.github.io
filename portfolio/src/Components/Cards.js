import React from 'react';
import styled from '@emotion/styled'
import whattowear from '../Images/whattowear.png'
import ships from '../Images/ships.png'
import { useRouteMatch, Switch, Route, NavLink } from 'react-router-dom';


const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  align-items: center;

`;
const Card = styled(NavLink)`
  text-decoration: none;
  background: #20a3fa;
  width: 300px;
  height: 200px;
  display: block;
  &:hover {
    cursor: pointer;
  }
`;
const Img = styled.img `
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  &:hover {
    opacity: 0.15;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }
`;
const CardTitle = styled.div `
  z-index: 1;
  position: relative;
  top: -80%;
  font-size: 28px;
  font-weight: 800;
  color: white;
`;
const CardDescription = styled.div `
  z-index: 1;
  width: 95%;
  margin: auto;
  position: relative;
  top: -70%;
  font-size: 18px;
  color: white;
`;

function Cards() {  
  return (
    <CardArea>
        
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>WhatToWear</CardTitle>
          <CardDescription>
          The most fail-safe weather app.
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Oblivion</CardTitle>
          <CardDescription>
          Physics, puzzles, horror.
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Nature Simulation</CardTitle>
          <CardDescription>
          Nature simulating machine learning
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={ships}/>
          <CardTitle>Ships!</CardTitle>
          <CardDescription>
          A party game for pirate lovers
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Affair of Honor</CardTitle>
          <CardDescription>
          A party game for competitive people
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Master Blaster</CardTitle>
          <CardDescription>
          Retro game with a twist
          </CardDescription>
        </Card>

        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Pure Honey</CardTitle>
          <CardDescription>
          A place to buy honey
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Spotify App</CardTitle>
          <CardDescription>
          Organize your music... fast
          </CardDescription>
        </Card>


    </CardArea>
    
  );
}

export default Cards;