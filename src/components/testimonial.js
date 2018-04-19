import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TestimonialBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: #282828;
  padding: 2em 2em 2em 7em;
  position: relative;
  z-index: -1;
`;
const TestimonialRight = styled.div`
  width: 50%;
`;
const TestimonialH2 = styled.h2`
  width: 100%;
  color: white;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-size: 1.5em;
  position: relative;
`;
const Brush = styled.hr`
  width: ${props => props.width}
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  border: 2px solid #404040;
`;
const TestimonialP = styled.p`
  line-height: 28px;
  color: white;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  margin: 2em 0;
`;
const Name = styled.p`
  color: white;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 17px;
`;
const Title = styled.p`
  color: white;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  margin: 0;
`;
const Decoration = styled.p`
  position: absolute;
  top: -89px;
  right: 21px;
  margin: 0;
  font-size: 290px;
  color: #404040;
  letter-spacing: -30px;
  font-family: 'Secular One', sans-serif;
`;
const Testimonial = () => {
  return (
    <Wrapper>
      <TestimonialBlock>
        <TestimonialH2>
          Testimonials
          <Brush width="83px" bottom="-17px" left="1px" />
          <Brush width="80px" top="-16px" right="383px" />
        </TestimonialH2>
        <TestimonialP>
          Nikko is an ambitious, driven and excellent problem solver. As his
          mentor, he has been an absolute pleasure to work with as he constantly
          strives to achieve his goals creatively while using best practices.
          His ability to work through difficult problems is impressive and never
          gives up. I highly recommend Nikko as a full-stack developer!
        </TestimonialP>
        <Name>Arthur Longbottom</Name>
        <Title>
          Sr. React / React Native Developer at Omni Holding Company
        </Title>
        <Decoration>''</Decoration>
      </TestimonialBlock>
      <TestimonialRight />
    </Wrapper>
  );
};

export default Testimonial;
