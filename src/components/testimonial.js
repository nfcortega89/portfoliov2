import React, { Component } from 'react';
import styled from 'styled-components';
import one from '../assets/arthur.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import seven from '../assets/7.png';
import eight from '../assets/8.png';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
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
  min-height: 418.81px;
  max-height: 418.81px;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 0 0 1em;
    height: 100%;
  }
`;
const TestimonialH2 = styled.h2`
  width: 100%;
  color: white;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-size: 1.5em;
  position: relative;
  @media screen and (max-width: 767px) {
    font-size: 1.2em;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 23px;
  }
`;
const Name = styled.p`
  color: white;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 17px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin: 1em 0;
  }
`;
const Title = styled.p`
  color: white;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 250px;
    top: -82px;
    right: 13px;
  }
`;
const TestimonialRight = styled.div`
  width: 50%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 418.81px;
  max-height: 418.81px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    width: 100%;
    display: none;
  }
`;
const PictureRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 33.33%;
  width: 100%;
  margin: 0.3em 0;
  &:first-of-type {
    margin: 0 0 0.3em 0;
  }
  &:last-of-type {
    margin: 0;
  }
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
`;
const Picture = styled.div`
  filter: grayscale(1);
  margin: 0 0.15em;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100px;
  height: 100px;
  opacity: 0.1;
`;

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [one, two, three, four, five, six, seven, eight]
    };
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    return this.state.images.map((image, index) => {
      return <Picture key={index} bg={image} />;
    });
  }
  render() {
    return (
      <Wrapper className="Testimonial">
        <TestimonialBlock>
          <TestimonialH2>
            Testimonials
            <Brush width="83px" bottom="-17px" left="1px" />
            <Brush width="80px" top="-16px" right="383px" />
          </TestimonialH2>
          <TestimonialP>
            Nikko is an ambitious, driven and excellent problem solver. As his
            mentor, he has been an absolute pleasure to work with as he
            constantly strives to achieve his goals creatively while using best
            practices. His ability to work through difficult problems is
            impressive and never gives up. I highly recommend Nikko as a
            frontend developer!
          </TestimonialP>
          <Name>Arthur Longbottom</Name>
          <Title>
            Sr. React / React Native Developer at Omni Holding Company
          </Title>
          <Decoration>''</Decoration>
        </TestimonialBlock>
        <TestimonialRight>
          <PictureRow>{this.renderList()}</PictureRow>
          <PictureRow>{this.renderList()}</PictureRow>
          <PictureRow>{this.renderList()}</PictureRow>
          <PictureRow>{this.renderList()}</PictureRow>
        </TestimonialRight>
      </Wrapper>
    );
  }
}

export default Testimonial;
