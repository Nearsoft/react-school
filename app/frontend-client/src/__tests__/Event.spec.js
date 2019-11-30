import React from "react";
import TestRenderer from 'react-test-renderer';
import Event from '../components/event/index';

describe('Event Component', () => {
    it('Render the Event component and check for properties', () => {
        const event = {
            title: '',
            description: '',
            limit: 0,
            address: '',
            user_id: 1
        };

        const testRenderer = TestRenderer.create(
            <Event key={0} event={event} />
        );
        console.log(testRenderer.toJSON());

        expect(testRenderer.toJSON().type).toEqual('div');
        expect(testRenderer.toJSON().props.className).toEqual('event-card r-padding-large r-margin-bottom-small');
        expect(testRenderer).toMatchSnapshot();
    });
});