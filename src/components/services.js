import React, { Component } from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  background: #f3f3f3;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const Title = styled.h2`
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  position: relative;
  margin-left: 3em;
  padding: 1em;
`;
const Brush1 = styled.div`
  position: absolute;
  width: 80px;
  height: 1px;
  border-bottom: 4px solid black;
  right: 18px;
  top: 17px;
`;
const Brush2 = styled.div`
  position: absolute;
  width: 85px;
  height: 1px;
  border-bottom: 4px solid black;
  left: 14px;
  bottom: 17px;
`;
const ServiceBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceCard = styled.div`
  margin: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 202px;
  min-height: 150px;
  max-width: 202px;
  max-height: 150px;
`;
const ServiceDescription = styled.div`
  text-transform: uppercase;
  color: black;
  -webkit-font-smoothing: antialiased;
  margin-top: 0.5em;
  font-weight: 600;
`;
const Info = styled.div`
  color: grey;
  -webkit-font-smoothing: antialiased;
  margin-top: 1.5em;
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
          info: 'Strong preference for easy to use UX/UI.'
        },
        {
          name: 'Dynamic',
          info:
            'Websites dont have to be static, I love making pages come to life.'
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
                <svg
                  fill="#000000"
                  height="36"
                  viewBox="0 0 24 24"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
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
                <svg
                  fill="#000000"
                  height="36"
                  viewBox="0 0 24 24"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
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
