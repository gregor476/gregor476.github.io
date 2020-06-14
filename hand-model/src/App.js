import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import img1 from './imgs/img1.jpeg'

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 10vw;
  color: white;
`;
const Img = styled.img`
  width: 90%;
`;

function App() {
  return (
    <div className="App">
      <Title>Brooke: Hand Model</Title>
      <Img src={img1}></Img>
    </div>
  );
}

export default App;
