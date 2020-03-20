import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";


function PrivateRoute(props) {
  let isLogin = sessionStorage.getItem("isLogin");
  return (
    <>
      {(isLogin) ?
        (
          <Route {...props} />
        ) :
        (
          <Redirect to={{
            pathname: '/sign-in'
          }} />
        )
      }
    </>
  )
}

export {
  PrivateRoute
}