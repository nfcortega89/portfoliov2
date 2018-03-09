import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const loading = props => keyframes`
  0%{
      width: 0%;
  }
  100% {
    width: ${props};
  }
`;

const SkillsContainer = styled.ul`
  background: #3b3b44;
  box-sizing: border-box;
  margin: 0;
  padding: 5em 2em 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 500px;
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
const Percentage = styled.div`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content:
  text-align:right;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  color: white;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -1px;
  font-size: 13px;
  font-weight: 900;
`;
const ProgressBar = styled.div`
  width: 100%;
  background: #241e1e38;
  min-height: 15px;
  border-radius: 25px;
  position: relative;
`;
const Progress = styled.div`
  min-height: 15px;
  width: ${props => props.progress}
  animation: ${props => loading(props.progress)} 1.3s ease
  background: white;
  border-radius: 25px;
`;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      development: '80%',
      design: '90%',
      javascript: '68%',
      react: '75%'
    };
  }
  render() {
    return (
      <SkillsContainer>
        <Row>
          <SkillName>Development</SkillName>
          <ProgressBar>
            <Progress progress={this.state.development} />
            <Percentage>{this.state.development}</Percentage>
          </ProgressBar>
        </Row>
        <Row>
          <SkillName>Design</SkillName>
          <ProgressBar>
            <Progress progress={this.state.design} />
            <Percentage>{this.state.design}</Percentage>
          </ProgressBar>
        </Row>
        <Row>
          <SkillName>Javascript</SkillName>
          <ProgressBar>
            <Progress progress={this.state.javascript} />
            <Percentage>{this.state.javascript}</Percentage>
          </ProgressBar>
        </Row>
        <Row>
          <SkillName>React</SkillName>
          <ProgressBar>
            <Progress progress={this.state.react} />
            <Percentage>{this.state.react}</Percentage>
          </ProgressBar>
        </Row>
      </SkillsContainer>
    );
  }
}

export default Skills;
