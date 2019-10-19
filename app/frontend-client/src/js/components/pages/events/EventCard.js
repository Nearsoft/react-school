import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ singleEvent, showButton }) {
  const { id, name, description, event_start_date, event_end_date, thumbnail_url } = singleEvent;
  return (
    <div className="event-card r-padding-large r-margin-bottom-small" >
      {thumbnail_url && (
        <div className="thumbnail r-margin-bottom-small" style={{
          backgroundImage: `url(${thumbnail_url})`
        }}></div>
      )}
      <div>
        <h3>{ name }</h3>
        <p>{ description }</p>
        {showButton && <Link to={{
          pathname: `/events/${id}`,
          state: { singleEvent }
        }} className="btn btn-primary">Inscribirse</Link>}
      </div>
    </div>
  )
}

export default EventCard;
