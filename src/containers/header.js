import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import * as actions from '../actions/header';
import headshot from '../assets/headshot.jpg';
import logo from '../assets/NFCO_02.png';

const strikethroughTop = keyframes`
  100% {
    width: 800px;
  }
`;
const strikethroughBottom = keyframes`
  100% {
    width: 390px;
  }
`;
const strikethroughLeft = keyframes`
  100% {
    height: 218px;
  }
`;
const Wrapper = styled.header`
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
  position: relative;
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
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const LeftLine = styled.div`
  height: 0;
  border-left: 5px solid white;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: ${strikethroughLeft} 1s infinite;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-delay: 1.4s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
`;
const BottomLine = styled.div`
  width: 0px;
  border-bottom: 5px solid white;
  position: absolute;
  right: 390px;
  bottom: 0;
  animation: ${strikethroughBottom} 1s infinite;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
`;
const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  z-index: 9
  height: 2px;
  border-bottom: 5px solid white;
  animation: ${strikethroughTop} 1s infinite;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-delay: 2.3s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
`;

const Nav = styled.div`
  margin: 1em 1em 0;
  padding: 1em;
  z-index: 9
  width: 100%;
  height: 50px;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
`;

const Hamburger = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 2px;

  &:hover {
    cursor: pointer;
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
        <Nav>
          <Hamburger>
            <svg
              onClick={this.props.toggleNav}
              fill="#ffffff"
              height="36"
              viewBox="0 0 24 24"
              width="36"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </Hamburger>
        </Nav>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ header }) => ({
  open: header.open
});

export default withRouter(connect(mapStateToProps, actions)(Header));
