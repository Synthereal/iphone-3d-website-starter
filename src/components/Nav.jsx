import React from "react";
import Logo from "../assets/images/Logo.svg";

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
