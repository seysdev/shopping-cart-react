import React from "react";
import { Header, Main, Footer } from "../";

import "./Layout.scss";

function Layout(props) {
  const { children } = props;

  return (
    <div className="Layout">
      <Header className='Layout__Header' />
      <Main className='Layout__Main'>{children}</Main>
      <Footer className='Layout__Footer' />
    </div>
  );
}

export { Layout };
