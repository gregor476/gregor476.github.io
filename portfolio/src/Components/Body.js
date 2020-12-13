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
  background: ${color};
  box-shadow: 8px 0 16px 0 rgba(0,0,0,0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const Section = styled.div `
  margin: 40px auto 40px auto;
  padding 50px 20px;
  overflow: visible;
  max-width: 900px;
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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
  margin: 40px 0 0 0;
  overflow: visible;
  text-align: center;
`;
const HotButton = styled.button `
  text-decoration: none;
  border-style: solid;
  border-color: white;
  border-width: 4px;
  border-radius: 8px;

  display: inline-block;
  padding: 30px 50px;
  font-size: 22px;
  color: white;
  background-color: #1c1c1c;
  width: 200px;
  margin: 20px 40px 0 0px;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  &:hover {
    cursor: pointer;
    border-color: ${flavorColor};
    color: black;
    background-color: white;
  }
`;

const Form_ = styled.form `
  width: 100%;
  font-size: 24px;
  margin: 30px 0 0 0;
`;
const Input_ = styled.input `
  width: 100%;
  height: 40px;
  border: 2px solid ${flavorColor};
  border-radius: 8px;
  font-size: 24px;
  margin: 10px 0;
  padding: 0 10px;

  `;
const Submit_ = styled.input `
  width: 100%;
  height: 50px;
  border: 2px solid ${flavorColor};
  border-radius: 8px;
  background: white;
  margin: 20px 0;
  font-size: 22px;
  font-family: inherit;
  &:hover {
    background-color: ${flavorColor};
    color: white;
    cursor: pointer;
  }
`;
const TextArea_ = styled.textarea `
  font-family: inherit;
  width: 100%;
  height: 200px;
  border: 2px solid ${flavorColor};
  border-radius: 8px;
  font-size: 24px;
  box-sizing: border-box;
  padding: 8px;
  margin: 10px 0;

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
            <a href="https://github.com/gregoryblood/gregoryblood.github.io/blob/master/website/resume.pdf" target="_blank"><HotButton>Resumé</HotButton></a>
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
          <Flavor>Especially if you have a job opportunity</Flavor>
          <Text>Have a comment on the website? Have a specific question? Just want to talk? Email me!</Text>

          <Form_ action="mailto:gregoryblood1998@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
            Subject:<br/>
            <Input_ type="text" size="19" name="ContactName"/><br/>
            Message:<br/> <TextArea_ name="ContactComment">
            </TextArea_>
            <Submit_ type="submit" value="Submit"/> 
          </Form_>

        </Section>
      </Core>
    </React.Fragment>
    
  );
}

export default Body;
