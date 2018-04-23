import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/header';
import Resume from '../assets/NIKKORESUME1.pdf';

const Wrapper = styled.div`
  z-index: 999;
  background: white;
  width: 100%;
  height: 110vh;
  position: fixed;
  top: 0;
  transform: translateY(${props => (props.open ? '0' : '-100%')});
  transition: 1s all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`;
const Drawing = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1em;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Link = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  margin: 1em;
  &:hover {
    cursor: pointer;
    color: purple;
  }
`;

class Canvas extends Component {
  render() {
    return (
      <Wrapper onClick={this.props.closeNav} open={this.props.open}>
        <Drawing id="drawing" />
        <Link href="https://www.github.com/nfcortega89">
          <i className="fa fa-github-alt fa-3x" aria-hidden="true" />
        </Link>
        <Link href={Resume} download>
          Resume
        </Link>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ header }) => ({
  open: header.open
});

export default connect(mapStateToProps, actions)(Canvas);
