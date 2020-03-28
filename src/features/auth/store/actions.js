import {
  AUTH_SET_IS_LOGIN,
  AUTH_SET_TOKEN,
  AUTH_LOGOUT,
  AUTH_SET_USER
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

function setUser(payload) {
  return {
    type: AUTH_SET_USER,
    payload
  }
}

export {
  setIsLogin,
  setToken,
  logout,
  setUser
}