import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  AuthRoutes,
  NotFound,
  PaymentRoutes,
  VideosRoutes
} from "../features";

import {
  PrivateRoute
} from "./private-route";

const routes = [...AuthRoutes, ...VideosRoutes, ...PaymentRoutes];

function MainRoutes() {
  return (
    <Switch>
      {routes.map((route, index) => !route.auth ? <Route {...route} key={index} /> : <PrivateRoute {...route} key={index} />)}
      <Redirect
        from="/"
        to="/videos"
        exact
      />
      <Route to="*">
        <NotFound />
      </Route>
    </Switch>
  )
}

export { MainRoutes };