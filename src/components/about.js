import React from 'react';
import styled from 'styled-components';
import desk from '../assets/desk.jpg';
import aboutpic from '../assets/aboutpic.jpg';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background: #f7f7f7;
  z-index: 9;
  @media screen and (max-width: 767px) {
    padding: 1em;
  }
`;
const AboutH2 = styled.h2`
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2em
  font-size: 1.5em;
  position: relative;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
const Brush1 = styled.div`
  position: absolute;
  top: -4px;
  right: -3px;
  border: 2px solid #cacaca;
  width: 74px;
  @media screen and (max-width: 767px) {
    width: 54px;
    top: -2px;
    right: 0px;
    border: 1px solid #cacaca;
  }
`;
const Brush2 = styled.div`
  position: absolute;
  bottom: -4px;
  left: -3px;
  border: 2px solid #cacaca;
  width: 74px;
  @media screen and (max-width: 767px) {
    border: 1px solid #cacaca;
    bottom: 0px;
    width: 40px;
    left: -1px;
  }
`;
const AboutBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const PictureCol = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: ${props => props.size};
  background-position: ${props => props.position}
  background-repeat: no-repeat;
  width: 300px;
  height: 460px;
  margin: 0 0.5em;
  @media  screen and (max-width:767px) {
  width: 200px;
  height: 200px;
  }
`;
const BioCol = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const BioP = styled.p`
  width: 100%;
  line-height: 33px;
  margin: 1em 0;
  padding: 0 2em;
  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 1em;
    font-size: 14px;
    text-align: justify;
  }
`;
const About = () => {
  return (
    <Wrapper className="About">
      <AboutH2>
        About me
        <Brush1 />
        <Brush2 />
      </AboutH2>
      <AboutBlock>
        <PictureCol>
          <Image src={desk} size="290% 110%;" />
          <Image src={aboutpic} size="138% 120%;" position="60% 70%" />
        </PictureCol>
        <BioCol>
          <BioP>
            Hi my name is Niccolo Ortega - a front end developer based in Los
            Angeles and recent grad from Thinkful’s intensive mentorship
            program. It was there I was able to learn web development to create
            full-stack applications with the awesome power of Node.js with React
            for the front end.
          </BioP>
          <BioP>
            I primarily focus on writing clean, elegant, and efficient code and
            I am proficient in HTML, CSS, Javascript, and Wordpress. Although I
            am in the earlier stages of my career, my background in web
            developing along with my education in Entrepreneurship have
            re-enforced my logical skills as well as being more resilient and
            paying close attention to detail.
          </BioP>
          <BioP>
            I am also highly motivated and have the eagerness to learn. When I
            am not coding on projects, I am usually doing a coding challenge and
            picking up classes in Udemy to hone my skills further.
          </BioP>
        </BioCol>
      </AboutBlock>
    </Wrapper>
  );
};

export default About;
