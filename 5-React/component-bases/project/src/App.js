import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Header } from './components/common/Header/Header';
import { SideNav }  from './components/common/SideNav/SideNav';
import Routes, { routes } from './Routes';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=PT+Mono|Roboto&display=swap" rel="stylesheet" />
        <Router>
          <SideNav title="Components" routes={routes.map(({ name, route }) => ({ title: name, route }))} />
          <Header />
          <div className="App__Home">
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
