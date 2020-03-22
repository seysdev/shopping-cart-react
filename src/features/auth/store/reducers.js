import {
  initialState
} from './state';

import {
  AUTH_SET_IS_LOGIN,
  AUTH_SET_TOKEN,
  AUTH_LOGOUT
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