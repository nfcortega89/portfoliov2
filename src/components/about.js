import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
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
`;
const Brush1 = styled.div`
  position: absolute;
  top: -4px;
  right: -3px;
  border: 2px solid grey;
  width: 74px;
`;
const AboutBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PictureCol = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  background: ${props => props.bg};
  width: 300px;
  height: 500px;
  margin: 0 0.5em;
`;
const BioCol = styled.div`
  width: 50%;
  height: 100%;
`;
const BioP = styled.p`
  width: 100%;
  line-height: 33px;
  margin: 0;
  padding: 0 2em;
`;
const About = () => {
  return (
    <Wrapper>
      <AboutH2>
        About me
        <Brush1 />
      </AboutH2>
      <AboutBlock>
        <PictureCol>
          <Image bg="grey" />
          <Image bg="yellow" />
        </PictureCol>
        <BioCol>
          <BioP>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </BioP>
        </BioCol>
      </AboutBlock>
    </Wrapper>
  );
};

export default About;
