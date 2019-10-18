import React, { Component } from 'react';

class SignInEvent extends Component {

  render() {
    const { params: { eventId } } = this.props.match;
    return (
      <h1>Inscribete al evento {eventId}</h1>
    );
  }
}

export default SignInEvent;
