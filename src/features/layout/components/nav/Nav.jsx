import React from "react";
import "./Nav.scss";

function Nav(props) {
  const {
    links = [
      {
        url: "/",
        description: "Home"
      },
      {
        url: "/users",
        description: "Users"
      },
      {
        url: "/videos",
        description: "Videos"
      },
      {
        url: "/payment",
        description: "Payment"
      }
    ],
    className = ''
  } = props;

  return (
    <nav className={`Nav ${className}`}>
      <ul>
        {links.map(({ url, description }, id) => (
          <li key={id}>
            <a href={url}>
              {description}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Nav };
