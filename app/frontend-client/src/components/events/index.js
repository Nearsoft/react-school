import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

import { getEvents } from '../../services/events';
import Event from '../event';

class Events extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     events: [],
        // };
    }

    componentDidMount() {
        if (this.props.events.length === 0) {
            getEvents()
            .then((response) => {
                return response.data.data;
            })
            .then((events) => {
                // this.setState({
                //     events,
                // });
                //console.log(this.state);
                this.props.getEvents(events);
            });
        }
    }

    render() {
        const { events } = this.props;
        return (
            <div className="events-wrapper">
                <h1>Events</h1>
                {
                    events && events.map((event, index) => {
                        return <Event key={index} event={event} />;
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { events } = state;
    return {
        events
    };
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Events);
