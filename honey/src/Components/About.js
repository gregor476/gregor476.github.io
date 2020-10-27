import React, { Component } from 'react';
import styled from '@emotion/styled';
import them from '../Images/themakers.jpg';
import action from '../Images/action.jpg';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  them,
  action
]

const DisplayArea = styled.div`

  margin: 0 auto 30vh auto;
  width: 100%;
  max-width: 1000px;
  @media(max-width: 967px) {
    width: 96%;
    left: 1%;
    margin: 0 auto;
  }
`;

const FadedImg = styled.img `
  float: left;
  width: 300px;
  height: 400px;
  position: absolute;
  border-radius: 40px;
  margin-left: 40px;
  @media(max-width: 967px) {

    display: none;
  }
`;
const UnFadedImg = styled.img `
  display: none;

  @media(max-width: 967px) {
    position: fixed;
    width: 100%;
    height: 126vw;
    margin: 0 auto;
    z-index: -1;
    display: block;
    top: 70px;
    border-radius: 40px;
}
`;
const BottomImg = styled.img `
  display: none;

  @media(max-width: 967px) {
    width: 100%;
    height: 126vw;
    margin: 0 auto;
    display: block;
    background: white;
    padding: 100px 0;
    border-radius: 40px;
}
`;
const Wording = styled.div`
  float: right;

  @media(max-width: 967px) {
    float: none;
    z-index: -1;
    margin: 70vh auto 0 auto;
    position: relative;
    background: white;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 40px 0;
    z-index: -1;
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: black;
  width: 90%;
  text-align: left;
  margin: 0 4px;
  padding: 0 4px;

  @media(max-width: 967px) {
    font-size: 3vw;
    margin: 0px auto;
    padding-top: 20px;
    font-weight: normal;
    width: 30%;
    text-align: center;
  }
  
`;
const Description = styled.div`
  font-size: 24px;
  width: 600px;
  text-align: left;
  margin: 0 4px;
  padding: 0 4px;

  @media(max-width: 967px) {
    font-size: 6vw;
    margin: 12px auto;
    width: 90%;
    text-align: center;
  }
  
`;


class About extends Component {
  render() {
    return (
      <React.Fragment>
        <DisplayArea>
            <Fade>
              <FadedImg src={fadeImages[0]}/>
              <FadedImg src={fadeImages[1]}/>
            </Fade>
            <UnFadedImg src={fadeImages[0]}/>
          <Wording>
            <Title>The Story</Title>
            <Description>
              Born in 1937 Papa Cecil became interested in beekeeping at a young age when his family 
              moved to a farm, and he discovered some discarded bee boxes. Because the smell of 
              honey never leaves the wood, wild bees were attracted and had moved in to use the boxes 
              even though they were in disrepair.<br/><br/>He started frequenting the local library and reading 
              National Geographic for any information he could get his hands on about raising bees. This 
              led to a lifetime hobby.<br/><br/>Later in life, he spent 8 years as the beekeeper at Red Butte Garden 
              for the University of Utah. Now he is retired to the Bear Lake Valley, where he grows flowers and 
              vegetables in his garden and raises bees in his spare time.
            </Description>
            <BottomImg src={fadeImages[1]}/>
          </Wording>
          

        </DisplayArea>
      </React.Fragment>
    );
  }
}
export default About;
