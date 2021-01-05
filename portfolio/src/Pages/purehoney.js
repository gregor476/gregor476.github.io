import React from 'react';
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text, Img} from './style';
import {Buttons, HotButton} from '../Components/Body';
import ph2 from '../Images/ph2.png'

export class PureHoney extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>Bear Lake Honey</PTitle>
          <Flavor>A Website to Buy Honey...</Flavor>
        </TitleBar>
        <Core>
          <Body>
          <Img src={ph2}/>
            <Buttons>
              <a href='https://www.gregoryblood.me/honey/#/' target='_blank'><HotButton>Visit</HotButton></a>
              <a href='https://github.com/gregoryblood/gregoryblood.github.io/tree/master/honey' target='_blank'><HotButton>GitHub</HotButton></a>
            </Buttons>
            <Header>
              What I Learned
            </Header>
            <Tools>How to Work with a Client</Tools>
            <Text>
              I was super excited for someone to reach out to me to pay me to build a website for them.
              They were inexperienced with web development and I really enjoyed helping them through the 
              process. I loved talking with them about what they wanted and their future plans. Unfortunatly 
              after many hours of consultation, design and prototype building. I discovered that they didn't 
              have the legal requirements to sell honey online. I could of asked for full payment but I determined 
              I really enjoyed the process and learned a lot. 
            </Text>
            <Header>
              About
            </Header>
            <Tools>ReactJS (HTML5/CSS3/Javascript)</Tools>
            <Text>
              
            </Text>
            
          </Body>
        </Core>
      </React.Fragment>
    );
  };
}

export default PureHoney;