import React, { Component } from 'react';
import styled from '@emotion/styled';
import honeyjar from '../Images/jar.jpeg';

const DisplayArea = styled.div`

  margin: 0 auto 30vh auto;
  width: 100%;
  max-width: 750px;

  @media(max-width: 967px) {
    width: 96%;
    left: 1%;
    margin: 70px auto;
  }
`;
const ProductImage = styled.img`
  float: left;
  width: 350px;
  margin: 0 0 40px 0;
  border-radius: 40px;
  @media(max-width: 967px) {
    float: none;
    width: 55%;
    margin: 0 auto;
    display: block;
  }
`;
const ProductWording = styled.div`
  float: right;
  margin-top: 100px;

  @media(max-width: 967px) {
    float: none;
    text-align: center;
    margin: 4vw auto 0 auto;
  }
`;
const ProductTitle = styled.div`
  font-size: 42px;
  font-weight: bold;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: black;
  width: 240px;
  text-align: left;
  margin: 0 4px;
  padding: 0 4px;

  @media(max-width: 967px) {
    font-size: 8vw;
    text-align: center;
    margin: 0px auto;
    width: 70%;
  }
  
`;
const TitleFlavor = styled.div`
  font-size: 32px;
  color: #525050;
  margin: 4px;
  @media(max-width: 967px) {
    font-size: 5vw;
    text-align: center;
    margin: 4px auto;
    width: 90%;
  }
`;
const Description = styled.div`
  font-size: 24px;
  width: 300px;
  margin: 4px;
  @media(max-width: 967px) {
    font-size: 6vw;
    text-align: center;
    margin: 4px auto;
    width: 90%;
  }
`;

const Purchase = styled.div`
  text-decoration: none;
  text-align: center;
  border-radius: 28px;
  border-style: solid;
  border-width: 2px;
  border-color: black;

  margin: 40px 0;
  padding: 8px 0;
  font-size: 32px;

  &:hover {
    background-color: #fcdf03;
    cursor: pointer;
  }
  @media(max-width: 967px) {
    margin: 4vw auto 100px auto;
    width: 80%;
  }
  
`;
class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        <DisplayArea>
          <ProductImage src={honeyjar}/>
          <ProductWording>
            <ProductTitle>Pure Honey</ProductTitle>
            <TitleFlavor>From bear Lake Valley</TitleFlavor>
            <Description>
              This honey is all natural, organic, raw unpasteurized mountain flower honey.
            </Description>
            <Purchase>Purchase</Purchase>
          </ProductWording>
        </DisplayArea>
      </React.Fragment>
    );
  }
}
export default Shop;
