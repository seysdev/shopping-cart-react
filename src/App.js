import React from 'react';
import { Provider } from 'react-redux';

import {
  HashRouter as Router
} from "react-router-dom";

import {
  store
} from './store';

import {
  setIsLogin,
  setToken
} from './features/auth/store/actions';

import {
  MainRoutes
} from './routes';

import {
  Layout
} from './features';

import './assets/styles/main.scss';


const token = window.sessionStorage.getItem('token');
if (token && token !== 'undefined' && token !== '') {
    // Dispatch action
  store.dispatch(setIsLogin(true));
  store.dispatch(setToken(token));
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <MainRoutes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
