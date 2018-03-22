import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Block = styled.div`
  height: 100%;
  width: 100%;
  background: pink;
  word-wrap: break-word;
  @media only screen and (max-width: 600px) {
    width: 100%;
    background: purple;
  }
`;

class Testing extends Component {
  render() {
    return (
      <Block>
        HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
        Hello
      </Block>
    );
  }
}

export default Testing;
