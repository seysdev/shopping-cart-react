import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import {
  logout as actionLogout
} from '../../../auth/store/actions';

import { Dropdown } from "../../../../ui";

import "./NavProfile.scss";

function NavProfile(props) {
  const { className = "" } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  function logout() {
    sessionStorage.clear();
    dispatch(actionLogout());
    history.replace("/sign-in");
  }

  const links = [
    {
      component: <Link to="/profile">Perfil</Link>
    },
    {
      component: (
        <Link
          to="/logout"
          onClick={e => {
            e.preventDefault();
            logout();
          }}
        >
          Logout
        </Link>
      )
    }
  ];

  return (
    <nav className={`NavProfile ${className}`}>
      <Dropdown description={`Bienvenido Sebastian Yabiku`} links={links} />
    </nav>
  );
}

export { NavProfile };
