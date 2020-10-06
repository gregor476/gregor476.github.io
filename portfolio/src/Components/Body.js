import React from 'react';
import styled from '@emotion/styled'
import whattowear from '../Images/whattowear.png'

const color = '#edf2f7';

const Core = styled.div `
  position: relative;
  top: 100vh;
  margin: auto;
  width: 100vw;
  background: ${color};

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;
const Section = styled.div `
  
  margin: 0 auto 40px auto;
  padding 100px 20px 0px 20px;
  overflow: visible;

  max-width: 800px;

  border-radius: 40px;
`;
const Header = styled.div `
  font-weight: 800;
  font-size: 48px;
`;
const Flavor = styled.div `
  font-size: 28px;
  font-style: italic;
  color: gray;
`;
const Text = styled.div `
  font-size: 36px;
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
const CardBorder = styled.div `
  border-radius: 40px;
  
  margin: 20px 20px 20px 20px;
  padding: 0.2rem;
  position: relative;
  width: 100vw;
  max-width: 350px;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  background: transparent;
  &:hover {
    background-image: linear-gradient(to right bottom, #4fe8ff, #00caff, #00a7ff, #007eff, #0043ff);    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);

  }
`;
const Card = styled.div `
  border-radius: 40px;
  background: white;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;

  &:hover {
    //color: white;
    //background: transparent;
  }
`;
const Img = styled.img `
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
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
const Link = styled.a `
  text-decoration: none;
  color: #2e65ff;

`;
function Body() {  
  return (
    <Core>
      <Section>
        <Header>Who am I?</Header>
        <Flavor>Good question... Do we ever really know?</Flavor>
        <Text>
          I am a Senior at <Link href={'https://oregonstate.edu/'} target={'_blank'}>Oregon State University</Link> studying 
          Computer science. I specialize in Web and Cloud 
          Development but in my free time time I create websites 
          and games.<br/><br/>
          I'm eager to work with teams to solve a given problem and am excited to be able to express my mixture of creativity and efficiency.
          <br/><br/>Check out my resume for some of the technologies I've been working with.
        </Text>
      </Section>
      <Section>
        <Header>What have I worked on?</Header>
        <Flavor>Bit of this, byte of that...</Flavor>
        <Text>
        </Text>
      </Section>
      <CardArea>
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
        
      </CardArea>
      
    </Core>
  );
}

export default Body;
