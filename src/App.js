import React, { Component } from 'react';
import styled from 'styled-components';
import Services from './components/services';
import Skills from './components/skills';
import Header from './containers/header';

const App = styled.div`
  height: 100%;
  min-width: 1224px;
`;
const TwoBlocks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
class app extends Component {
  render() {
    return (
      <App>
        <Header />
        <TwoBlocks>
          <Services />
          <Skills />
        </TwoBlocks>
      </App>
    );
  }
}

export default app;
