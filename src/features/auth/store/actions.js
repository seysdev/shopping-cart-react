import {
  AUTH_SET_IS_LOGIN,
  AUTH_SET_TOKEN,
  AUTH_LOGOUT
} from './constans'

function setIsLogin(payload) {
  return {
    type: AUTH_SET_IS_LOGIN,
    payload
  }
}

function setToken(payload) {
  return {
    type: AUTH_SET_TOKEN,
    payload
  }
}

function logout(payload) {
  return {
    type: AUTH_LOGOUT,
    payload
  }
}

export {
  setIsLogin,
  setToken,
  logout
}