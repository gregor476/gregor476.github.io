import React from 'react';
import styled from '@emotion/styled';
import img from '../Images/capstone.PNG';

const Body = styled.div `
  margin: 0px auto 0 auto;
  padding: 0 0 1000px 0;
  width: 100%;
  padding 50px 20px;
  overflow: visible;
  max-width: 900px;
`;
const ProjectTitle = styled.h1 `
  font-size: 48px;

`;
const ProjectTools = styled.div `
  font-size: 22px;
  font-weight: regular;
  font-style: italic;
`;
const ProjectHighlights = styled.div `
  font-size: 22px;
  font-weight: regular;
  font-style: italic;
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
    border-color: #20a3fa;
    color: black;
    background-color: white;
  }
`;
const ProjectAbout = styled.h2 `
  font-size: 36px;

`;
const ProjectAboutText = styled.div `
  font-size: 24px;
`;
const Link = styled.a `
  text-decoration: none;
  color: #20a3fa;
  &:hover {
    text-decoration: underline;
  }
`;
const Img = styled.img `
  position: relative;
  z-index: 2;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: 0 auto 0 auto;
  width: 40%;
  border-radius: 8px;
`;
function Capstone () {  
  window.scrollTo(0, 0);
  return (
    <Body>
        <ProjectTitle>OSU Event App</ProjectTitle>
        <ProjectTools>React Native</ProjectTools><br/>
        <ProjectHighlights>Full stack development - Database Management - Deadline Heavy - OAUTH </ProjectHighlights><br/>
        <Img src={img}/>
        <Buttons>
            <a href="https://github.com/gregoryblood/Event-Management-App" target="_blank"><HotButton>GitHub</HotButton></a>
        </Buttons>
        <ProjectAbout>About</ProjectAbout>
        <ProjectAboutText>
          This app was for my senior capstone, a 9-month group project. I picked this specific 
          project because I wanted to something that I felt challenged me and had a tangable result 
          that I would enjoy talking about.<br/><br/>
          Our goal given to us by a professor in the College of Business at Oregon State University was 
          to develop an app for the school that streamlines the process for students to find out about events 
          going on around the school. We worked closely with the professor to figure out key features of the app and 
          the design. Administrators would needed to be identified at login, and have the ability to create/edit/delete 
          events. Students could then sign-up for whichever event they want to attend and have their calendar 
          updated. 
        </ProjectAboutText>
        <ProjectAbout>Where's the 'I' in 'Team' ?</ProjectAbout>
        <ProjectAboutText>
          One of the challenges of this project, and in my opinion the most important, was working closely with 
          two other students, a professor, and a teacher's assistant. Because I was the most experienced with 
          the kind of development we were doing, I was put in a leadership role.
          <br/><br/>
          I immedietly researched different tools that we would need to learn to accomplish our task. 
          I decided to use React Native for the front end since it allowed us to develop for both IOS, 
          Android, and web which was ideal since we weren't experienced with app development.
          I then worked closely with the professor to create a <Link href='https://xd.adobe.com/view/8076e940-3750-4138-a939-32692b7e0e67-d525/?fullscreen'>design prototype </Link>
          that would help us plan out the features we would have, the user interface and experience, and helped us 
          all be on the page when we would start to develop. <br/><br/>
          To begin development I created a <Link href='https://www.heroku.com/home'>Heroku </Link> server to host an express server.
          Next I started our React Native app and set it up to be able to make API calls. This was mainly to help the group see 
          what React frameworks look like. I also set a timeline of the entire app development for us to follow.
        </ProjectAboutText>
    </Body>
    
  );
}

export default Capstone;