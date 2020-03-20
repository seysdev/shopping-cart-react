import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import {
  AuthRoutes,
  HomeRoutes,
  NotFound,
  PaymentRoutes,
  UsersRoutes,
  VideosRoutes
} from "../features";

import {
  PrivateRoute
} from "./private-route";

const routes = [...AuthRoutes, ...HomeRoutes, ...UsersRoutes, ...VideosRoutes, ...PaymentRoutes];

console.log('routes', routes);

function MainRoutes() {
  return (
    <Switch>
      {routes.map((route, index) => !route.auth ? <Route {...route} key={index} /> : <PrivateRoute {...route} key={index} />)}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export { MainRoutes };