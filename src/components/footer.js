import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 25vh;
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Legal = styled.p`
  -webkit-font-smoothing: antialiased;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
`;
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Links = styled.a`
  text-decoration: none;
  background: #e4e4e4;
  color: #5e5e5e;
  margin: 0 0.5em
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;

  &:first-child {
    background: transparent;
    color: #e4e4e4;
  }
  &:hover{
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Wrapper className="Footer">
      <Legal>All rights reserved Niccolo Ortega </Legal>
      <SocialLinks>
        <Links href="https://www.facebook.com/NikkosWacko">
          <i className="fa fa-facebook" aria-hidden="true" />
        </Links>
        <Links href="mailto:nfcortega89@gmail.com">
          <i className="fa fa-google" aria-hidden="true" />
        </Links>
        <Links href="https://www.pinterest.com/niccoloortega/">
          <i className="fa fa-pinterest-p" aria-hidden="true" />
        </Links>
        <Links href="https://www.instagram.com/nikkotoonaughty/">
          <i className="fa fa-instagram" aria-hidden="true" />
        </Links>
      </SocialLinks>
    </Wrapper>
  );
};

export default Footer;
