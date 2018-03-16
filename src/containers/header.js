import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import headshot from '../assets/headshot.jpg';

const strikethrough = keyframes`
  0% {
    display: none;
    width: 0px;
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1
    display: block;
    width: 100%;
    visibility: visible;
  }
`;
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
  font-family: 'Nunito', sans-serif;
  color: white;
  -webkit-font-smoothing: antialiased;
  font-size: 56px;
  text-transform: uppercase;
  margin: 0.6em 0.7em 0;
`;
const SubHead = styled.p`
  font-family: 'Nunito', sans-serif;
  color: white;
  -webkit-font-smoothing: antialiased;
  margin: 0 0.7em 0.6em;
  font-size: 56px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const LeftLine = styled.div`
  height: 215px;
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
  animation: ${strikethrough} 2s infinite;
  animation-iteration-count: 1;
  animation-delay: 2s;
  animation-timing-function: ease-in;
  animation-direction: alternate;
  position: absolute;
  left: 0;
  top: 0;
  &:hover {
  }
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
