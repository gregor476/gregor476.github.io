import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from "react-scroll";
const TitleDiv = styled.div `
  position: fixed;
  color: white;
  top: 0px;
  height: 100vh;
  width: 100%;
  display: inline-block;
  font-weight: 400;
  text-decoration:none;
  background-color: #00a3f5;  
`;

const Terminal = styled.div`
  position: fixed;
  top: 20%;
  left: 15%;
  height: 60%;
  margin: auto;
  width: 70%;
  background-color: black;  
  border-radius: 8px;
`;
const Dr = styled.div`
  color: #5770ff;
  display: block;
  width: 200px;
  height: 50px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const File = styled.a`
  text-decoration: none;
  margin-right: 40px;
  color: #86ff57;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Words = styled.div`
  line-height: 50%;
  font-size: 28px;
  margin: -10px 20px;
  font-family: 'Source Code Pro', monospace;
`;
const Grid = styled.div `
  width: 600px;
  display: flex;
  flex-wrap: wrap;

`;
const TopBar = styled.div`
  background-color: #2d2d2d;
  width: 100%;
  height: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const TextBox = styled.input `
  width: 20%;
  color: white;
  background-color: black;
  font-size: 28px;
  font-family: 'Source Code Pro', monospace;
  border-style: solid;
  border-color: #363636;
  border-width: 2px;
  border-radius: 6px;
  padding: 4px;
  &:focus {
    border-style: none;

  }
`;
const Helper = styled.div `
  posistion: fixed;
  width: 100%;
  height: 10%;
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: 800;
  padding: 8px;
  margin: 92vh auto 0 auto;
  color: white;
  border-radius: 8px;
`;

const dynamicStyle = props => 
  css`
    background-color: ${props.color};
  `;

const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;
  margin: 6px;
  ${dynamicStyle};
`;
class Title extends React.Component {
  state={curTime : new Date().toLocaleString()}


  render () {
    return (
    <React.Fragment>
      <TitleDiv>
        <Helper>Or just scroll</Helper>
        <Terminal>
          <TopBar>
            <Dot color="#ff4036"/>
            <Dot color="#e5c02a"/>
            <Dot color="#55c22a"/>
          </TopBar>
          <Words>
            <p>Last Login: {this.state.curTime} on console</p>
            <p>Gregorys-Machine:~ gregoryblood$ ls </p>
            <Grid>
              <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={400}>
              <Dr>about</Dr>
              </Link>
              <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={400}>
              <Dr>projects</Dr>
              </Link>
              <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={400}>
              <Dr>contact</Dr>
              </Link>
              <File href="https://github.com/gregoryblood/gregoryblood.github.io/blob/master/website/resume.pdf" target="_blank">resume.pdf</File>
              <File href = "mailto: gregoryblood1998@gmail.com">e-mail.exe</File>
            
            </Grid>
            <br/>
            <p>Gregorys-Machine:~ gregoryblood$ <TextBox autoFocus="autofocus" onfocus="this.select()"></TextBox></p>
            

          </Words>
        </Terminal>

      </TitleDiv>
      
      
    </React.Fragment>
  );
  }
}

export default Title;
