import React, { Component } from 'react';
import EventApi from '../../../api/events_api';
import EventCard from './EventCard';

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    EventApi.getEvents().then(({ data }) => {
      this.setState({ events: data });
    });
  }

  render() {
    const { events } = this.state;
    return (
      <div className="events-wrapper">
        <h1>Eventos</h1>
        {events && events.map((singleEvent) => (
          <EventCard singleEvent={singleEvent} key={singleEvent.id} showButton />
        ))}
      </div>
    );
  }
}

export default Events;
