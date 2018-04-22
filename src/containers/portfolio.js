import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/info';
import airtime from '../assets/Airtime2.png';
import trendr from '../assets/Trendr2.png';
import yummly from '../assets/Yummly2.png';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f7f7f7;
  padding: 2em;
  position: relative;
`;
const PortfolioH2 = styled.h2`
  color: black;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  position: relative;
  background: transparent;
  @media screen and (max-width: 767px) {
    font-size: 1.2em;
  }
`;
const PortfolioList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const PortfolioCol = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PicBig = styled.div`
  background-image: url(${props => props.bg});
  margin: 0.5em 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  opacity: 0.5;
  transition: 0.3s all ease-in;
  z-index: 1;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media screen and (max-width: 767px) {
    width: 365px;
    height: 120px;
  }
`;
const PicSmall = styled.div`
  background-image: url(${props => props.bg});
  background: ${props => props.color}
  margin: 0.5em 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 242px;
  width:300px
  opacity: 0.5;
  transition: 0.3s all ease-in;
  z-index: 1;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media screen and (max-width:767px){
    width: 365px;
    height: 120px;
  }
`;
const Brush = styled.hr`
  width: ${props => props.width}
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  border: 2px solid #cacaca;
`;
const Info = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  line-height: 25px;
  padding: 0 1em;
`;
const Title = styled.h3`
  -webkit-font-smoothing: antialiased;
  text-transform: capitalize;
  font-size: ${props => props.size}
  font-weight: 600;
  margin: 0;
`;
const ProjectInfo = styled.p`
  -webkit-font-smoothing: antialiased;
  font-size: ${props => props.size};
  line-height: ${props => props.height};
`;
const Stacks = styled.p`
  -webkit-font-smoothing: antialiased;
  font-size: ${props => props.size}
  margin: 0;
`;
const Url = styled.a`
  font-size: ${props => props.size}
  -webkit-font-smoothing: antialiased;
  text-transform: capitalize;
  color: white;
  text-decoration: underline;
  text-decoration-color: white;
  margin: 0.5em;
`;
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airtimeIsShowing: false,
      whosHungryIsShowing: false,
      trendrIsShowing: false,
      projects: [
        {
          title: 'Airtime',
          info:
            'Airtime is a powerful app made to help the user check weather conditions to make flying drones easier. With Airtime the user is given a variety of legal fly-zones in San Diego along with the current weather conditions, wind speed, and humidity.',
          stack: 'React, Nodemon, Node',
          url: 'https://advocate-bear-76680.netlify.com/'
        },
        {
          title: "Who's Hungry",
          info:
            "Who's Hungry is a food app designed to promote healthy eating. For those who are tired of eating the same bland food, it's time to spice things up and concoct delicious yet healthy meals. Powered by Yummly",
          stack: 'JQuery, Express, Unirest, Node, Nodemon',
          url: 'https://limitless-mountain-11507.herokuapp.com/'
        },
        {
          title: 'Trendr',
          info:
            'Trendr is a gallery page that showcases trending images from carefully curated photos. Images are organized into categories where viewers can vote on them. The photo with the most up votes is displayed on the home page, and automatically changes based on the trending pictures.',
          stack:
            'Stack: React, Express , Node, Mongodb, Mongoose, Firebase Auth, Nodemon',
          url: 'https://trendr-3eddc.firebaseapp.com'
        }
      ]
    };
    this.showAirtime = this.showAirtime.bind(this);
    this.showWhosHungry = this.showWhosHungry.bind(this);
    this.showTrendr = this.showTrendr.bind(this);
  }
  showAirtime() {
    this.setState({
      airtimeIsShowing: !this.state.airtimeIsShowing
    });
  }
  showWhosHungry() {
    this.setState({
      whosHungryIsShowing: !this.state.whosHungryIsShowing
    });
  }
  showTrendr() {
    this.setState({
      trendrIsShowing: !this.state.trendrIsShowing
    });
  }
  render() {
    return (
      <Wrapper className="Portfolio">
        <PortfolioH2>
          Portfolio
          <Brush width="75px" top="-15px" right="-6px" />
          <Brush width="75px" bottom="-15px" left="-6px" />
        </PortfolioH2>
        <PortfolioList>
          <PortfolioCol>
            <PicBig bg={airtime} onClick={this.showAirtime}>
              <Info
                onClick={this.showAirtime}
                open={this.state.airtimeIsShowing}>
                <Title size="1.5em">{this.state.projects[0].title}</Title>
                <ProjectInfo height="23px" size="18px">
                  {this.state.projects[0].info}
                </ProjectInfo>
                <Stacks size="18px">
                  Stack: {this.state.projects[0].stack}
                </Stacks>
                <Url
                  size="18px"
                  href="https://advocate-bear-76680.netlify.com/">
                  https://advocate-bear-76680.netlify.com/
                </Url>
              </Info>
            </PicBig>
          </PortfolioCol>
          <PortfolioCol>
            <PicSmall bg={yummly} onClick={this.showWhosHungry}>
              <Info
                onClick={this.showWhosHungry}
                open={this.state.whosHungryIsShowing}>
                <Title size="18px">{this.state.projects[1].title}</Title>
                <ProjectInfo height="16px" size="14px">
                  {this.state.projects[1].info}
                </ProjectInfo>
                <Stacks size="14px">
                  Stack: {this.state.projects[1].stack}
                </Stacks>
                <Url
                  size="14px"
                  href="https://limitless-mountain-11507.herokuapp.com/">
                  https://limitless-mountain-11507.herokuapp.com/
                </Url>
              </Info>
            </PicSmall>
            <PicSmall color="black" />
          </PortfolioCol>
          <PortfolioCol>
            <PicBig bg={trendr} onClick={this.showTrendr}>
              <Info onClick={this.showTrendr} open={this.state.trendrIsShowing}>
                <Title size="1.5em">{this.state.projects[2].title}</Title>
                <ProjectInfo height="23px" size="18px">
                  {this.state.projects[2].info}
                </ProjectInfo>
                <Stacks size="18px">
                  Stack: {this.state.projects[2].stack}
                </Stacks>
                <Url size="18px" href="https://trendr-3eddc.firebaseapp.com">
                  https://trendr-3eddc.firebaseapp.com
                </Url>
              </Info>
            </PicBig>
          </PortfolioCol>
        </PortfolioList>
      </Wrapper>
    );
  }
}

const mapStatetoProps = ({ info }) => ({
  open: info.open
});

export default connect(mapStatetoProps, actions)(Portfolio);