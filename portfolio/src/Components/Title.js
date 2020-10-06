import React from 'react';
import styled from '@emotion/styled';

const TitleDiv = styled.div `
  z-index: -1;
  position: fixed;
  color: white;

  height: 100vh;
  width: 100%;
  display: inline-block;
  font-weight: 400;
  background-color: #2372cf;
  //background-image: linear-gradient(to right bottom, #4fe8ff, #00caff, #00a7ff, #007eff, #0043ff);
  
`;
const TitleWords = styled.div `
  position: absolute;
  bottom: 2vw;
  left: 2vw;
`;
const Name = styled.div `
  margin-top: 100px;
  display: inline;
  font-size: 100px;
  line-height: 1;
`;
const Cursor = styled.div `
  display: inline;
  font-size: 120px;
  font-weight: 100;
  animation:blinkingText 1.2s infinite;
  @keyframes blinkingText{
    0%{     color: white;    }
    49%{    color: white; }
    60%{    color: transparent; }
    99%{    color:transparent;  }
    100%{   color: white;    }
  }

`;

function Title() {
  return (
    <React.Fragment>
      <TitleDiv>
        <TitleWords>
          <Name>Gregory Blood</Name>
          <Cursor>|</Cursor>
        </TitleWords>
      </TitleDiv>
      
      
    </React.Fragment>
  );
}

export default Title;
