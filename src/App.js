import React, { Component } from 'react';
import styled from 'styled-components';
import Services from './components/services';
import Skills from './components/skills';
import Contact from './components/contact';
import About from './components/about';
import Footer from './components/footer';
import Testimonial from './components/testimonial';
import Portfolio from './containers/portfolio';
import Header from './containers/header';

const App = styled.div`
  height: 100%;
  width: 100%;
`;
const SSBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

class app extends Component {
  render() {
    return (
      <App>
        <Header />
        <About />
        <SSBlock>
          <Services />
          <Skills />
        </SSBlock>
        <Portfolio />
        <Testimonial />
        {/* <Contact /> */}
        <Footer />
      </App>
    );
  }
}

export default app;
