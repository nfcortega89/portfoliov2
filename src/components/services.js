import React, { Component } from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  z-index: -1;
  background: #f3f3f3;
  position: relative;
  box-sizing: border-box;
  width: 50%;
  min-height: 545px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const Title = styled.h2`
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  position: relative;
  margin-left: 0.8em;
  padding: 1em;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 18px;
  }
`;
const Brush1 = styled.div`
  position: absolute;
  width: 80px;
  height: 1px;
  border-bottom: 4px solid black;
  right: 18px;
  top: 17px;
  @media screen and (max-width: 767px) {
    right: 103px;
    width: 55px;
    border-bottom: 2px solid black;
  }
`;
const Brush2 = styled.div`
  position: absolute;
  width: 85px;
  height: 1px;
  border-bottom: 4px solid black;
  left: 14px;
  bottom: 17px;
  @media screen and (max-width: 767px) {
    border-bottom: 2px solid black;
    width: 55px;
    left: 103px;
  }
`;
const ServiceBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-left: 2em;
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;
const Row = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
`;

const ServiceCard = styled.li`
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 33.33%;
  height: 21vh;
  width: 17vw;
  @media screen and (max-width: 767px) {
    width: 33.33%;
    height: 23vh;
    justify-content: center;
    align-items: center;
  }
`;
const ServiceDescription = styled.p`
  text-transform: uppercase;
  color: black;
  -webkit-font-smoothing: antialiased;
  margin: 0.5em 0;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
const Info = styled.p`
  color: grey;
  -webkit-font-smoothing: antialiased;
  margin: 0.5em 0;
  font-size: 14px;
  padding: 0 0.5em 0 0;
  @media screen and (max-width: 767px) {
    font-size: 12.5px;
    text-align: center;
    width: 125px;
  }
`;

const Icon = styled.div`
  height: 36px;
  width: 36px;
  @media screen and (max-width: 767px) {
    height: 24px;
    width: 24px;
  }
`;
class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          name: 'Design',
          info: "Keen eye for detail. It's the little things that matter."
        },
        {
          name: 'Development',
          info: 'Gathering information to plan and design comes first.'
        },
        {
          name: 'Fast',
          info: 'Fast load times and lag free interaction, my highest priority.'
        },
        {
          name: 'Responsive',
          info: 'My layouts will work on any device, big or small.'
        },
        {
          name: 'Intuitive',
          info: 'Easy interface. Strong preference for easy to use UX/UI.'
        },
        {
          name: 'Dynamic',
          info: 'Websites dont have to be static, why not give it some life.'
        }
      ]
    };
  }
  renderServices() {
    const row1 = this.state.services.slice(0, 3);
    const row2 = this.state.services.slice(3);
    return (
      <ServiceBlock>
        <Row>
          {row1.map((service, index) => {
            return (
              <ServiceCard key={index}>
                <Icon>
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </Icon>
                <ServiceDescription>{service.name}</ServiceDescription>
                <Info>{service.info}</Info>
              </ServiceCard>
            );
          })}
        </Row>
        <Row>
          {row2.map((service, index) => {
            return (
              <ServiceCard key={index}>
                <Icon>
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </Icon>
                <ServiceDescription>{service.name}</ServiceDescription>
                <Info>{service.info}</Info>
              </ServiceCard>
            );
          })}
        </Row>
      </ServiceBlock>
    );
  }
  render() {
    return (
      <ServicesWrapper>
        <Title>
          <Brush1 />My skills & services
          <Brush2 />
        </Title>
        {this.renderServices()}
      </ServicesWrapper>
    );
  }
}

export default Service;
