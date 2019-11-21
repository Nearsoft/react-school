import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import { getEvent } from '../../services/events';

class EventForm extends Component {

    constructor(props) {
        super(props);

        console.log(props, props.match.params.id);

        // this.state = {
        //     event: {},
        //     name: '',
        // };
    }

    componentDidMount() {
        const event = this.props.events.find((event) => {
            return event.id === parseInt(this.props.match.params.id);
        });

        if (event) {
            this.props.getEvent(event);
            // this.setState({
            //     event
            // });
        } else {
            getEvent(this.props.match.params.id)
                .then((response) => {
                    this.props.getEvent(response.data.data);
                    // this.setState({
                    //     event: { ...response.data.data }
                    // });
                });
        }
    }

    onNameChange(evt) {
        // this.setState({
        //     name: evt.target.value,
        // });
        this.props.changeEventName(evt.target.value);
    }

    render() {
        const { description, name } = this.props.event;

        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <input value={name} onChange={(evt) => this.onNameChange(evt)} />
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { events, event } = state;
    return {
        event,
        events
    };
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(EventForm);
