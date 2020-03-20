import React from "react";
import "./Footer.scss";

function Footer(props) {
  const {
    className = ''
  } = props;

  return <footer className={`Footer ${className}`}>
    <p>Todos los Derechos reservados | 2020</p>
    <p>Creado por 12-02</p>
  </footer>;
}

export { Footer };
