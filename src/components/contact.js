import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  padding: 3em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 500px;
  height: 30px};
`;

const SendButton = styled.button`
  width: 50px;
`;
const TextArea = styled.textarea`
  width: 500px;
  height: 200px;
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name',
      email: 'email',
      message: 'message'
    };
  }
  render() {
    return (
      <Wrapper id="form" method="POST" action="mailto:nfcortega89@gmail.com">
        <Input
          type="name"
          placeholder={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
          id="name"
        />
        <Input
          type="email"
          placeholder={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          id="email"
        />
        <TextArea
          onChange={e => this.setState({ message: e.target.value })}
          id="message"
        />
        <SendButton onSubmit={this.onSubmit} type="submit">
          Send
        </SendButton>
      </Wrapper>
    );
  }
}

export default ContactForm;
