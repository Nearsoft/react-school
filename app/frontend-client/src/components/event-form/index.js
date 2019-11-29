import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import { getEvent, createEvent } from '../../services/events';

class EventForm extends Component {

	constructor(props) {
		super(props);

		console.log(props, props.match.params.id);

		this.state = {
		    event: {
					title: '',
					description: '',
					limit: 0,
					address: '',
					user_id: 1
				}
		};
	}

	componentDidMount() {
		// const event = this.props.events.find((event) => {
		// 	return event.id === parseInt(this.props.match.params.id);
		// });

		// if (event) {
		// 	this.props.getEvent(event);
		// } else {
		// 	getEvent(this.props.match.params.id)
		// 		.then((response) => {
		// 			this.props.getEvent(response.data.data);
		// 		});
		// }
	}

	onNameChange(evt) {
		this.props.changeEventName(evt.target.value);
	}

	handleOnChange = (ev) => {
		const {event} = this.state;
		event[ev.target.name] = ev.target.value;
		this.setState({event});
	}

	handleOnSubmit = (ev) => {
		ev.preventDefault();
		const {event} = this.state;
		createEvent({event}).then((response) => {
			this.props.setEvent(response.data.data);
			this.props.getEvents([response.data.data]);
		});
	}

	render() {
		const { event } = this.state;

		return (
			<div className='event-form-wrapper'>
          <h1>Create event</h1>
          <form action="" onSubmit={this.handleOnSubmit}>
            <div className='field-group u-margin-bottom-small'>
              <label>Name:</label>
              <input className='input-field' type="text" name="name" value={event.name} onChange={this.handleOnChange} />
            </div>
            <div className='field-group u-margin-bottom-small'>
              <label>Description:</label>
              <input className='input-field' type="text" name="description" value={event.description} onChange={this.handleOnChange} />
            </div>
            <div className='field-group u-margin-bottom-small'>
              <label>Limit:</label>
              <input className='input-field' name='limit' type="text" value={event.limit} onChange={this.handleOnChange} />
            </div>
            <div className='field-group u-margin-bottom-small'>
              <label>Address:</label>
              <input className='input-field' name='address' type="text" value={event.address} onChange={this.handleOnChange} />
            </div>
            <button className='btn btn-primary' type="submit">Submit</button>
          </form>
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
