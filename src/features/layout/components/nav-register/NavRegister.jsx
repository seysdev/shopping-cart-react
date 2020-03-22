import React from "react";

import { Nav } from "../";

import "./NavRegister.scss";

function NavRegister(props) {
  const {
    links = [
      {
        url: "/sign-in",
        description: "Sign In"
      },
      {
        url: "/sign-up",
        description: "Sign Up"
      }
    ],
    className = ""
  } = props;

  return <Nav links={links} />;
}

export { NavRegister };
