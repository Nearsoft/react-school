import React from 'react';
import { Link } from 'react-router-dom';


function EventCard({ singleEvent, showButton }) {
  const { id, name, description, event_start_date, event_end_date } = singleEvent;
  return (
    <div className="event-card r-padding-large r-margin-bottom-small" >
      <h3>{ name }</h3>
      <p>{ description }</p>
      {showButton && <Link to={{
        pathname: `/events/${id}`,
        state: { singleEvent }
      }} className="btn btn-primary">Inscribirse</Link>}
    </div>
  )
}

export default EventCard;
