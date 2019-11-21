import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';

//import App from './components/App';
import Main from './components/Main';
import './styles/app.scss';

const component = (
    <Provider store={store}>
        <Main />
    </Provider>
);

const container = document.getElementById('root');

ReactDOM.render(component, container);
