import React, { Component } from 'react';
import styled from 'styled-components';
import Services from './components/services';

const app = styled.div`
  height: 100%;
  min-width: 1224px;
`;
class App extends Component {
  render() {
    return (
      <app>
        <Services />
      </app>
    );
  }
}

export default App;
