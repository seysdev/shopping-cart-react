import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./SignIn.scss";

function SignIn(props) {
  const history = useHistory();
  const [dataAccessUser, setDataAccessUser] = useState({
    user: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    sessionStorage.setItem("isLogin", JSON.stringify(dataAccessUser));
    history.replace("/");
  }

  function handleChange(e) {
    setDataAccessUser({
      ...dataAccessUser,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="SignIn">
      <h1 className="t-a-center">Login</h1>
      <form onSubmit={handleSubmit} className="frm">
        <div className="row">
          <div className="col">
            <input
              className="frm-ctrl"
              type="text"
              name="username"
              placeholder="Usuario"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="frm-ctrl"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary btn-full-width">
              Inicia sesión
            </button>
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

export { SignIn };
