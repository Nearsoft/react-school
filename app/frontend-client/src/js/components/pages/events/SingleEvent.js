import React, { Component } from 'react';
import EventCard from './EventCard';

class SingleEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      singleEvent: {}
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { location: { state: { singleEvent } } } = this.props;
      this.setState({ singleEvent });
    } else {
      this.props.history.replace('/events');
    }
  }

  render() {
    const { singleEvent } = this.state;
    return (
      <div>
        <EventCard singleEvent={singleEvent} showButton={false} />
        <div>
          <form>
            <label>Field</label>
            <input type='text' />
          </form>
        </div>
      </div>
    );
  }
}

export default SingleEvent;
