import React from 'react';
import styled from '@emotion/styled';
import Cards from './Cards';
import Navbar from './Navbar';

const color = '#0d131a';
const mainText = '#ffffff';
const flavorText = "#c7c7c7"

const Core = styled.div `
  position: relative;
  top: 100vh;
  margin: auto;
  width: 100%;
  background: ${color};
  box-shadow: 8px 0 16px 0 rgba(0,0,0,0.6);
  //border-top-left-radius: 40px;
  //border-top-right-radius: 40px;
`;
const Section = styled.div `
  margin: 0 auto 40px auto;
  padding 100px 0px 0px 0px;
  overflow: visible;
  max-width: 800px;
  border-radius: 40px;
  color: ${mainText};

`;
const Header = styled.div `
  font-weight: 800;
  font-size: 36px;
  
`;
const Flavor = styled.div `
  padding: 10px 0;
  font-size: 16px;
  font-style: italic;
  color: ${flavorText};
`;
const Text = styled.div `
  font-size: 24px;
`;
const CardArea = styled.div `
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  margin: 0 auto 40px auto;
  width: 100vw;
  max-width: 800px;
`;
const Link = styled.a `
  text-decoration: none;
  color: #4accff;
  &:hover {
    text-decoration: underline;
  }
`;
const Buttons = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  text-align: center;
`;
const HotButton = styled.button `
  text-decoration: none;
  border-style: solid;
  border-color: white;
  overflow: visible;
  display: inline-block;
  padding: 20px 40px;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: #1c1c1c;
  margin: 80px 40px;
  &:hover {
    cursor: pointer;
    border-color: #4accff;
    color: #4accff;
  }
`;
function Body() {  
  return (
    <Core>
      <Navbar/>
      <Section id="about">
        <Header>Who am I?</Header>
        <Flavor>Good question... It seems to be always changing</Flavor>
        <Text>
          I am a Senior at <Link href={'https://oregonstate.edu/'} target={'_blank'}>Oregon State University</Link> studying 
          Computer science.<br/><br/>
          I'm eager to work with teams to solve a given problem and am excited to be able to express my mixture of creativity and efficiency.
          <br/><br/>Check out my resume for some of the technologies I've been working with.
        </Text>
        <Buttons>
          <HotButton>Resume</HotButton>
          <HotButton>LinkedIn</HotButton>
          <HotButton>GitHub</HotButton>
        </Buttons>
      </Section>
      <Section id="projects">
        <Header>What have I worked on?</Header>
        <Flavor>Bit of this, byte of that...</Flavor>
        <Text>
        </Text>
      </Section>
      <CardArea>
        <Cards/>
        
      </CardArea>
      
    </Core>
  );
}

export default Body;
