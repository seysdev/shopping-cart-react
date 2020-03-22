import React from "react";
import "./Dropdown.scss";

function Dropdown(props) {
  const {
    description = "",
    className = "",
    links = [
      {
        component: false,
        description: "Dropdown 1",
        url: "",
        cb: () => {}
      },
      {
        component: false,
        description: "Dropdown 2",
        url: "",
        cb: () => {}
      }
    ]
  } = props;

  const refDropdown = React.createRef();

  function hideShow() {
    const { current } = refDropdown;

    current.classList.toggle("is-active");
  }

  return (
    <nav className={`dropdown ${className}`}>
      <ul>
        <li onClick={hideShow}>
          {description}
          <ul className="dropdown-child" ref={refDropdown}>
            {links.map((link, id) => (
              <li key={id} onClick={link.cb}>
                {link.component ? (
                  link.component
                ) : (
                  <a href={link.url}>{link.description}</a>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export { Dropdown };
