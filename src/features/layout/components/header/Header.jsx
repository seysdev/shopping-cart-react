import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Nav, NavRegister, NavProfile } from "../";

import "./Header.scss";

function connectedHeader(props) {
  const { className, stateIsLogin } = props;

  return (
    <header className={`Header ${className}`}>
      <div className="Header__left d-flex j-c-between a-i-center">
        <Link className="Header__logo" to="/">
          codiGO - Play
        </Link>
        {stateIsLogin ? <Nav className="Header__Nav" /> : ""}
      </div>
      <div className="Header__right">
        {stateIsLogin ? <NavProfile /> : <NavRegister />}
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  const { isLogin: stateIsLogin } = state.AuthReducer;

  return {
    stateIsLogin
  };
};

const Header = connect(mapStateToProps, null)(connectedHeader);

export { Header };
