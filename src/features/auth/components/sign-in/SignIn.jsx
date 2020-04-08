import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

import {
  setIsLogin,
  setToken,
  setUser
} from '../../store/actions';

import "./SignIn.scss";

function SignIn(props) {
  const history = useHistory();
  const [dataAccessUser, setDataAccessUser] = useState({
    user: "",
    password: ""
  });
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, errors } = useForm()


  function successLogin() {
    sessionStorage.setItem("isLogin", true);
    sessionStorage.setItem("token", 1234);
    dispatch(setIsLogin(true));
    dispatch(setToken(1234));
    history.replace("/videos");
  }

  function onSubmit(e) {
    // peticion al servidor!!
    dispatch(setUser({ name: 'Sebastian Yabiku' }))
    successLogin();
  }

  function handleChange(e) {
    setDataAccessUser({
      ...dataAccessUser,
      [e.target.name]: e.target.value
    });
  }

  function onSuccessGoogle(response) {
    console.log('response', response)
    const {
      profileObj
    } = response;

    // peticion a back end con correo

    dispatch(setUser(profileObj))
    successLogin()
  }

  function onFailureGoogle(response) {
    console.log('response', response)
  }

  return (
    <div className="SignIn">
      <h1 className="t-a-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="frm">
        <div className="row">
          <div className="col">
            <input
              className="frm-ctrl"
              type="text"
              name="username"
              placeholder="Usuario"
              onChange={handleChange}
              ref={register({ required: true })}
            />
          </div>
        </div>
        {errors.username && <span>El campo usuario es requerido</span>}
        <div className="row">
          <div className="col">
            <input
              className="frm-ctrl"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              ref={register({ required: true })}
            />
          </div>
        </div>
        {errors.password && <span>El campo password es requerido</span>}
        <div className="row">
          <div className="col">
            <button className="btn btn-primary btn-full-width">
              Inicia sesión
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col t-a-center m-b-20">
            <GoogleLogin
              clientId="322927841572-n1jacq7k1m60nfjt0hnj4mrb0cql9ih6.apps.googleusercontent.com"
              buttonText="Ingresar con Google"
              onSuccess={onSuccessGoogle}
              onFailure={onFailureGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex j-c-between a-i-center">
            <label className="frm-label">
              Recordar
              <input className="frm-ctrl m-b-0" type="checkbox" />
            </label>
            <a className="c-tertiary f-s-xsmall" href="">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
};


export { SignIn };
