import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  padding: 2.5em 0 2.5em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
  margin-left: 5em;
  padding-bottom: 1em;
`;
const Brush1 = styled.hr`
  position: absolute;
  right: -8px;
  top: -18px;
  width: 80px;
  height: 3px;
  background: black;
  border: 0;
  margin-left: 1.5em;
`;
const Brush2 = styled.hr`
  position: absolute;
  left: -10px;
  top: 19px;
  width: 85px;
  height: 2px;
  background: black;
  border: 0;
`;
const ServiceBlock = styled.div`
  margin-left: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Service = () => {
  return (
    <Container>
      <ServicesWrapper>
        <Title>
          <Brush1 />My skills & services
          <Brush2 />
        </Title>
        <ServiceBlock>
          <Row>
            <ServiceCard>
              <svg
                fill="#000000"
                height="36"
                viewBox="0 0 24 24"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <ServiceDescription>Design</ServiceDescription>
              <Info>
                Keen eye for detail. It's the little things that matter.
              </Info>
            </ServiceCard>
            <ServiceCard>
              <svg
                fill="#000000"
                height="36"
                viewBox="0 0 24 24"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <ServiceDescription>Development</ServiceDescription>
              <Info>Gathering information to plan and design comes first.</Info>
            </ServiceCard>
            <ServiceCard>
              <svg
                fill="#000000"
                height="36"
                viewBox="0 0 24 24"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <ServiceDescription>Fast</ServiceDescription>
              <Info>
                Fast load times and lag free interaction, my highest priority.
              </Info>
            </ServiceCard>
          </Row>
          <Row>
            <ServiceCard>
              <svg
                fill="#000000"
                height="36"
                viewBox="0 0 24 24"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <ServiceDescription>Responsive</ServiceDescription>
              <Info>My layouts will work on any device, big or small.</Info>
            </ServiceCard>
            <ServiceCard>
              <svg
                fill="#000000"
                height="36"
                viewBox="0 0 24 24"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <ServiceDescription>Intuitive</ServiceDescription>
              <Info>Strong preference for easy to use UX/UI.</Info>
            </ServiceCard>
            <ServiceCard>
              <svg
                fill="#000000"
                height="36"
                viewBox="0 0 24 24"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <ServiceDescription>Dynamic</ServiceDescription>
              <Info>
                Websites dont have to be static, I love making pages come to
                life.
              </Info>
            </ServiceCard>
          </Row>
        </ServiceBlock>
      </ServicesWrapper>
    </Container>
  );
};

export default Service;
