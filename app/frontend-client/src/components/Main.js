import React, { Component } from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

//import Home from './pages/Home';
import Events from './events';
import EventForm from './event-form';

class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/events/:id" component={EventForm} />
                    <Route path="/">
                        <div className="app-wrapper r-padding-vertical-large">
                            <Events />
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Main;
