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
  z-index: -1;
  background: #3b3b44;
  box-sizing: border-box;
  margin: 0;
  padding: 3em 9em 3em 3em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 545px;
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
const SkillName = styled.p`
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
const Percentage = styled.p`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content:
  text-align:right;
  position: absolute;
  right: 6px;
  top: -6px;
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
      skills: [
        {
          name: 'HTML',
          score: '92%'
        },
        {
          name: 'CSS',
          score: '85%'
        },
        {
          name: 'React',
          score: '82%'
        },
        {
          name: 'Javascript',
          score: '75%'
        }
      ]
    };
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    return this.state.skills.map((skill, index) => {
      return (
        <Row key={index}>
          <SkillName>{skill.name}</SkillName>
          <ProgressBar>
            <Progress progress={skill.score} />
            <Percentage>{skill.score}</Percentage>
          </ProgressBar>
        </Row>
      );
    });
  }
  render() {
    return <SkillsContainer>{this.renderList()}</SkillsContainer>;
  }
}

export default Skills;
