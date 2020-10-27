import React from 'react';
import styled from '@emotion/styled';
import { Switch,
  Route } from 'react-router-dom';
import Nav from './Components/NavBar';
import Shop from './Components/Shop';
import About from './Components/About';

const Title = styled.div`
  width: 40%;
  max-width: 500px;
  position: absolute;
  text-align: center;
  left: 4%;
  top: 35px;
  font-size: 48px;
  color: black;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: black;

  @media(max-width: 967px) {
    position: fixed;
    font-size: 24px;
    text-align: center;
    margin: 0;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    padding: 10px;
    text-align: center;
    background: white;
    box-shadow: 0px 0 20px 25px white;
  }
`;
const FlavorText = styled.div`
  position: absolute;
  right: 4%;
  top: 50px;
  font-style: italic;
  color: grey;

  @media(max-width: 967px) {
    display: none;
  }
`;

function App() {
  return (
    <div>
      <Title>Bear Lake Honey</Title>
      <FlavorText>Bee Happy</FlavorText>
      <Nav/>
        <Switch >
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route path="/">
            <About/>
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
