import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/header';

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
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ListItems = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

class Canvas extends Component {
  render() {
    return (
      <Wrapper onClick={this.props.closeNav} open={this.props.open}>
        <Drawing id="drawing" />
        <ListItems>Resume</ListItems>
        <ListItems>Email</ListItems>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ header }) => ({
  open: header.open
});

export default connect(mapStateToProps, actions)(Canvas);
