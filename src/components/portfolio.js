import React, { Component } from 'react';
import styled from 'styled-components';
import airtime from '../assets/Airtime2.png';
import trendr from '../assets/Trendr2.png';
import yummly from '../assets/Yummly2.png';
import Info from './info';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f7f7f7;
  padding: 2em;
`;
const PortfolioH2 = styled.h2`
  color: black;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  position: relative;
  background: transparent;
`;
const PortfolioList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PortfolioCol = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PortfolioItem = styled.div`
  background-image: url(${props => props.bg});
  margin: 0.5em 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  opacity: 0.5;
  transition: 0.3s all ease-in;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const Brush = styled.hr`
  width: ${props => props.width}
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  border: 2px solid #cacaca;
`;
const Portfolio = () => {
  return (
    <Wrapper className="Portfolio">
      <PortfolioH2>
        Portfolio
        <Brush width="75px" top="-15px" right="-6px" />
        <Brush width="75px" bottom="-15px" left="-6px" />
      </PortfolioH2>
      <PortfolioList>
        <PortfolioCol>
          <PortfolioItem bg={airtime} height="516px" width="300px" />
        </PortfolioCol>
        <PortfolioCol>
          <PortfolioItem bg={yummly} height="250px" width="300px" />
          <PortfolioItem height="250px" width="300px" />
        </PortfolioCol>
        <PortfolioCol>
          <PortfolioItem bg={trendr} height="516px" width="300px" />
        </PortfolioCol>
      </PortfolioList>
    </Wrapper>
  );
};
export default Portfolio;
