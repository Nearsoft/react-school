import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from '../components/Main';
import Events from '../components/events/index';
import Event from '../components/event/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Main Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = Enzyme.shallow(<Main/>);
    });

    it('should have Event component inside the tree', () => {
        expect(wrapper.find(Event)).toBeDefined();
        expect(wrapper.find(Event)).toHaveLength(0);
    });

    it('should have Event component inside the tree', () => {
        expect(wrapper.find(Events)).toBeDefined();
        expect(wrapper.find(Events)).toHaveLength(1);
    });
});