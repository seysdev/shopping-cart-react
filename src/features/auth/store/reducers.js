import {
  initialState
} from './state';

import {
  AUTH_SET_IS_LOGIN,
  AUTH_SET_TOKEN,
  AUTH_LOGOUT,
  AUTH_SET_USER
} from './constans';


function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SET_IS_LOGIN: {
      const {
        payload: isLogin
      } = action;

      return Object.assign({}, state, {
        isLogin
      })
    }

    case AUTH_SET_TOKEN: {
      const {
        payload: token
      } = action;

      return Object.assign({}, state, {
        token
      })
    }

    case AUTH_SET_USER: {
      const {
        payload: user
      } = action;

      return Object.assign({}, state, {
        user
      })
    }

    case AUTH_LOGOUT: {
      return initialState;
    }

    default:
      return state
  }
}

export {
  AuthReducer
}