import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
`;
const Head = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  margin: 0;
`;
const SubHead = styled.p`
  margin: 0;
  font-size: 35px;
  letter-spacing: 0px;
  text-transform: uppercase;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <HeadContainer>
          <Head>Hi I'm Niccolo Ortega</Head>
          <SubHead>Designer & Developer</SubHead>
        </HeadContainer>
      </Wrapper>
    );
  }
}

export default Header;
