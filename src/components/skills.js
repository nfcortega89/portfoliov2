import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.ul`
  background: #3B3B44;
  box-sizing: border-box;
  margin: 0;
  padding: 0
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-height: 450px;
  padding: 20px;
`;
const Row = styled.li`
  margin: 12px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SkillName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  -webkit-font-smoothing: antialiased;
`;
const ProgressBar = styled.div`
  width: 100%;
  background: #241e1e38;
  min-height: 10px;
  border-radius: 25px;
`;
const Progress = styled.div`
  height: 10px;
  width: ${props => props.progress};
  background: white;
  border-radius: 25px;
  transition: width 100% ease-in-out;
`;
function Skills({ percent }) {
  return (
    <SkillsContainer>
      <Row>
        <SkillName>Development</SkillName>
        <ProgressBar>
          <Progress progress="70%" />
        </ProgressBar>
      </Row>
      <Row>
        <SkillName>Design</SkillName>
        <ProgressBar>
          <Progress progress="90%" />
        </ProgressBar>
      </Row>
      <Row>
        <SkillName>Javascript</SkillName>
        <ProgressBar>
          <Progress progress="80%" />
        </ProgressBar>
      </Row>
      <Row>
        <SkillName>React</SkillName>
        <ProgressBar>
          <Progress progress="80%" />
        </ProgressBar>
      </Row>
    </SkillsContainer>
  );
}

export default Skills;
