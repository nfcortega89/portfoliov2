import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AboutH2 = styled.h2`
  -webkit-font-smoothing: antialiased;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
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
  padding: 0px 2em;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  background: ${props => props.bg};
  width: 250px;
  height: 500px;
  margin: 0 0.5em;
`;
const BioCol = styled.div`
  width: 50%;
  height: 100%;
`;
const BioP = styled.p`
  width: 100%;
  padding-right: 8em;
  line-height: 28px;
`;
const About = () => {
  return (
    <Wrapper>
      <AboutH2>About me</AboutH2>
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
            PageMaker including versions of Lorem Ipsum.
          </BioP>
        </BioCol>
      </AboutBlock>
    </Wrapper>
  );
};

export default About;
