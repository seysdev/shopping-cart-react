import React from "react";
import { Nav } from "../";

import "./Header.scss";

function Header(props) {
  const { className } = props;

  return (
    <header className={`Header ${className}`}>
      <a className="Header__logo" href="">
        Logo
      </a>
      <Nav className="Header__Nav" />
    </header>
  );
}

export { Header };
