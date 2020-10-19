import React from 'react';
import styled from '@emotion/styled';
import Cards from './Cards';
import Navbar from './Navbar';

const color = 'white';
const mainText = 'black';
const flavorText = "gray"
const flavorColor = "#20a3fa"

const Core = styled.div `
  position: relative;
  top: 100vh;
  margin: 40px auto 0 auto;
  padding: 0 0 1000px 0;
  width: 100%;
  font-weight: 600px;
  background: ${color};
  box-shadow: 8px 0 16px 0 rgba(0,0,0,0.6);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const Section = styled.div `
  margin: 40px auto 40px auto;
  padding 50px 50px;
  overflow: visible;
  max-width: 900px;
  border-radius: 40px;
  color: ${mainText};

`;
const Header = styled.div `
  font-weight: 800;
  font-size: 36px;
  
`;
const Flavor = styled.div `
  padding: 10px 0;
  font-size: 20px;
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
  color: ${flavorColor};
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
  border-width: 4px;
  overflow: visible;
  display: inline-block;
  padding: 30px 50px;
  border-radius: 8px;
  text-align: center;
  font-size: 22px;
  color: white;
  background-color: #1c1c1c;
  margin: 80px 40px;
  transition-duration: 10s;
  transition-property: width;
  &:hover {
    cursor: pointer;
    border-color: ${flavorColor};
    color: black;
    background-color: white;
    
  }

`;

function Body() {  
  return (
    <React.Fragment>
      <span id="top"/>
      <Core>
        <Navbar/>
        <Section id="about">
          <Header>Who am I?</Header>
          <Flavor>Good question... It seems to be always changing</Flavor>
          <Text>
            I am a Senior at <Link href={'https://oregonstate.edu/'} target={'_blank'}>Oregon State University</Link> studying 
            Computer science and I'm eager to work with teams to solve real world problems.<br/><br/>
            When I'm away from the computer I enjoy fishing, camping, and thinking about my 
            computer. I also spend a bit of my free time making games with Unity or playing 
            them with my friends.<br/><br/>
            Check out my resumé for some technologies I've been working with.
            
            
          </Text>
          <Buttons>
            <a href="https://drive.google.com/file/d/1g15lJY_vtDGeXp6hpz82Ufd9roBxmys4/view?usp=sharing" target="_blank"><HotButton>Resumé</HotButton></a>
            <a href="https://www.linkedin.com/in/gregoryblood" target="_blank"><HotButton>LinkedIn</HotButton></a>
            <a href="https://github.com/gregoryblood" target="_blank"><HotButton>GitHub</HotButton></a>
          </Buttons>
        </Section>
        <Section id="projects">
          <Header>What have I worked on?</Header>
          <Flavor>Bit of this, a byte of that...</Flavor>
          <CardArea>
            <Cards/>
          </CardArea>
        </Section>
        <Section id="contact">
          <Header>Send me a message!</Header>
          <Flavor>Especially if you have a job</Flavor>
          <Text>Have a comment on the website? Have a specific question? Just want to talk? Email me!</Text>
           

<form action="mailto:gregoryblood1998@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
  Name:<br/>
  <input type="text" size="19" name="ContactName"/><br/>
  Message:<br/> <textarea name="ContactComment" rows="6" cols="20">
  </textarea>
  <input type="submit" value="Submit"/> 
</form>


        </Section>
      </Core>
    </React.Fragment>
    
  );
}

export default Body;
