import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav(props) {
  const {
    links = [
      {
        url: "/videos",
        description: "Videos"
      },
      {
        url: "/payment",
        description: "Shopping"
      }
    ],
    className = ""
  } = props;

  return (
    <nav className={`Nav ${className}`}>
      <ul>
        {links.map(({ url, description }, id) => (
          <li key={id}>
            <NavLink to={url} activeClassName="is-active">
              {description}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Nav };
