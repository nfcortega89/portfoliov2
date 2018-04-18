import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 35vh;
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Legal = styled.p`
  color: white;
  font-weight: 400;
  text-transform: uppercase;
`;
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Links = styled.div`
  color: white;
  margin: 0 0.5em
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Legal>All rights reserved Nikko Ortega </Legal>
      <SocialLinks>
        <Links>
          <i className="fa fa-facebook" aria-hidden="true" />
        </Links>
        <Links>
          <i className="fa fa-google-plus" aria-hidden="true" />
        </Links>
        <Links>
          <i className="fa fa-pinterest-p" aria-hidden="true" />
        </Links>
        <Links>
          <i className="fa fa-instagram" aria-hidden="true" />
        </Links>
      </SocialLinks>
    </Wrapper>
  );
};

export default Footer;
