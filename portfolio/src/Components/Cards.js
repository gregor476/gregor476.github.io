import React from 'react';
import styled from '@emotion/styled'
import whattowear from '../Images/whattowear.png'
import { Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

const CardBorder = styled.div `
  margin: 10px 10px 10px 10px;
  padding: 0.2rem;
  position: relative;
  width: 100vw;
  max-width: 350px;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  background: white;
  &:hover {
    background-image: linear-gradient(to right bottom, #4fe8ff, #00caff, #00a7ff, #007eff, #0043ff);    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);
  }
`;
const Card = styled.div`
  background: white;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;

  &:hover {
    //color: white;
    //background: transparent;
  }
`;
const Img = styled.img `
  width: 100%;
`;
const CardTitle = styled.div `
  font-size: 36px;
  padding: 0 10px 10px 10px;
`;
const CardDescription = styled.div `
  font-size: 24px;
  color: #6e6e6e;
  padding: 0 10px 15px 10px;
`;

function Cards() {  
  return (
    <React.Fragment>
      <CardBorder>
        <Card>
          <Img src={whattowear}/>
          <CardTitle>WhatToWear</CardTitle>
          <CardDescription>
          The most fail-safe weather app.
          </CardDescription>
        </Card>
      </CardBorder>
      <CardBorder>
        <Card>
          <Img src={whattowear}/>
          <CardTitle>WhatToWear</CardTitle>
          <CardDescription>
          The most fail-safe weather app.
          </CardDescription>
        </Card>
      </CardBorder>
      <CardBorder>
        <Card>
          <Img src={whattowear}/>
          <CardTitle>WhatToWear</CardTitle>
          <CardDescription>
          The most fail-safe weather app.
          </CardDescription>
        </Card>
      </CardBorder>
    </React.Fragment>
    
  );
}

export default Cards;