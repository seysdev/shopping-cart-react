import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { HashRouter as Router } from "react-router-dom";

import { store, persistor } from "./store";

import { setIsLogin, setToken } from "./features/auth/store/actions";

import { MainRoutes } from "./routes";

import { Layout } from "./features";

import "./assets/styles/main.scss";

const token = window.sessionStorage.getItem("token");
if (token && token !== "undefined" && token !== "") {
  // Dispatch action
  store.dispatch(setIsLogin(true));
  store.dispatch(setToken(token));
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <MainRoutes />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
