import React, { Component } from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  z-index: -1;
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
  border-bottom: 4px solid #cacaca;
  right: 18px;
  top: 17px;
  @media screen and (max-width: 767px) {
    right: 103px;
    width: 55px;
    border-bottom: 2px solid #cacaca;
  }
`;
const Brush2 = styled.div`
  position: absolute;
  width: 85px;
  height: 1px;
  border-bottom: 4px solid #cacaca;
  left: 14px;
  bottom: 17px;
  @media screen and (max-width: 767px) {
    border-bottom: 2px solid #cacaca;
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
          info: "Keen eye for detail. It's the little things that matter.",
          svg: (
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          )
        },
        {
          name: 'Development',
          info: 'Gathering information to plan and design comes first.',
          svg: (
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M0 0h24v24H0z" fill="none" />
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
            </svg>
          )
        },
        {
          name: 'Fast',
          info:
            'Fast load times and lag free interaction, my highest priority.',
          svg: (
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 2v11h3v9l7-12h-4l4-8z" />
            </svg>
          )
        },
        {
          name: 'Responsive',
          info: 'My layouts will work on any device, big or small.',
          svg: (
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
            </svg>
          )
        },
        {
          name: 'Intuitive',
          info: 'Strong preference for easy to use UX/UI.',
          svg: (
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          )
        },
        {
          name: 'Dynamic',
          info: 'Websites dont have to be static, why not give it some life.',
          svg: (
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          )
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
                <Icon>{service.svg}</Icon>
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
                <Icon>{service.svg}</Icon>
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
          My skills & services
          <Brush1 />
          <Brush2 />
        </Title>
        {this.renderServices()}
      </ServicesWrapper>
    );
  }
}

export default Service;
