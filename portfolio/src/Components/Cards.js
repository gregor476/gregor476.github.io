import React from 'react';
import styled from '@emotion/styled'
import whattowear from '../Images/whattowear.png'
import { Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';


const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Card = styled.div`
  background: white;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  width: 250px;
  height: 150px;
  &:hover {
    //color: white;
    //background: transparent;
  }
`;
const Img = styled.img `
  z-index: 1;
  height: 100%;
  width: 100%;
  &:hover {
    opacity: 0.5;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    z-index: -2;
  }
`;
const CardTitle = styled.div `
  z-index: -1;
  position: absolute;
  font-size: 36px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CardDescription = styled.div `
  z-index: -1;
  width: 100%;
  font-size: 24px;
  color: #6e6e6e;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Cards() {  
  return (
    <CardArea>

        <Card>
          <Img src={whattowear}/>
          <CardTitle>WhatToWear</CardTitle>
          <CardDescription>
          The most fail-safe weather app.
          </CardDescription>
        </Card>
        <Card>
          <Img src={whattowear}/>
          <CardTitle>WhatToWear</CardTitle>
          <CardDescription>
          The most fail-safe weather app.
          </CardDescription>
        </Card>
        <Card>
          <Img src={whattowear}/>
          <CardTitle>WhatToWear</CardTitle>
          <CardDescription>
          The most fail-safe weather app.
          </CardDescription>
        </Card>

    </CardArea>
    
  );
}

export default Cards;