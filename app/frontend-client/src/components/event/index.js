import React from 'react';

const Event = (props) => {
    const { event } = props;

    return (
        <div className="event-card r-padding-large r-margin-bottom-small">
            {
                event.thumbnail_url &&
                (
                    <div className="thumbnail r-margin-bottom-small" style={{
                        backgroundImage: `url(${event.thumbnail_url})`
                    }}></div>
                )
            }
            <div>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <a href={'#/events/' + event.id} className="btn btn-primary">Inscribirse</a>
            </div>
        </div>
    );
};

export default Event;
