import React from 'react';

import {
  HashRouter as Router
} from "react-router-dom";

import {
  MainRoutes
} from './routes';

import {
  Layout
} from './features';

import './assets/styles/main.scss';

function App() {
  return (
    <Router>
      <Layout>
        <MainRoutes />
      </Layout>
    </Router>
  );
}

export default App;
