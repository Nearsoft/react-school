import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Header } from './components/common/Header/Header';
import { SideNav }  from './components/common/SideNav/SideNav';
import Routes, { routes } from './Routes';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=PT+Mono|Roboto&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Router>
          <div className="Main">
            <Row>
              <Col sm={4} md={3} lg={2}>
                <SideNav routes={routes.map(({ name, route }) => ({ title: name, route }))} />
              </Col>
              <Col sm={8} md={9} lg={10}>
                <div className="Home">
                  <Routes />
                </div>
              </Col>
            </Row>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
