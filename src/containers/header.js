import React, { Component } from 'react';
import styled from 'styled-components';
import headshot from '../assets/headshot.jpg';

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${headshot});
  box-shadow: inset 0 0 85px rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: grayscale(92%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const Head = styled.h1`
  color: white;
  -webkit-font-smoothing: antialiased;
  font-size: 56px;
  text-transform: uppercase;
  margin: 0.6em 0.7em 0;
`;
const SubHead = styled.p`
  color: white;
  -webkit-font-smoothing: antialiased;
  margin: 0 0.7em 0.6em;
  font-size: 56px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const LeftLine = styled.div`
  height: 195px;
  border-left: 5px solid white;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const BottomLine = styled.div`
  width: 390px;
  border-bottom: 5px solid white;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const TopLine = styled.div`
  width: 800px;
  border-bottom: 5px solid white;
  position: absolute;
  left: 0;
  top: 0;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <HeadContainer>
          <Head>Hi I am Niccolo Ortega</Head>
          <SubHead>Designer & Developer</SubHead>
          <LeftLine />
          <BottomLine />
          <TopLine />
        </HeadContainer>
      </Wrapper>
    );
  }
}

export default Header;
