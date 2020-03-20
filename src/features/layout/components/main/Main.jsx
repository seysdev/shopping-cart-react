import React from "react";
import "./Main.scss";

function Main(props) {
  const { 
    children, 
    className = '' 
  } = props;

  return <main className={`Main ${className}`}>{children}</main>;
}

export { Main };
