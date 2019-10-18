import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/app.scss';

// Pages
import AppRoutes from './js/routes/AppRoutes';
import Layout from './js/components/Layout';

const App = () => (
  <Router>
    <Layout>
      <AppRoutes />
    </Layout>
  </Router>
);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
