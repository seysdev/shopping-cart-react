import React from "react";
import { useSelector } from 'react-redux';
import {
  Route,
  Redirect
} from "react-router-dom";


function PrivateRoute(props) {
  const isLogin = useSelector(state => state.AuthReducer.isLogin);
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