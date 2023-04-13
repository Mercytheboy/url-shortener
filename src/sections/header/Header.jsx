import React, { useState } from "react";
import Btn from "../../components/btn/Btn";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.svg";

import "./header.css";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="header">
      <header className="header__content  container">
        <div className="header__links">
          <a href="#">
            <img src={logo} alt="" className="header__logo" />
          </a>

          <nav className="header__nav-links">
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </nav>
        </div>

        {toggleMenu && (
          <div className="header__menu-toggle">
            <nav className="header__nav-links_toggle">
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav>

            <nav className="header__login-toggle">
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>

                <Btn
                  label={"sign up"}
                  buttonStyle={"rounded"}
                  isFullWidth={true}
                />
              </ul>
            </nav>
          </div>
        )}

        <nav className="header__login">
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <Btn label={"sign up"} buttonStyle={"rounded"} />
            </li>
          </ul>
        </nav>

        {toggleMenu ? (
          <FaTimes
            size={27}
            color="var(--gray)"
            className="toggle__menu"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FaBars
            size={27}
            color="var(--gray)"
            className="toggle__menu"
            onClick={() => setToggleMenu(true)}
          />
        )}
      </header>
    </div>
  );
}

export default Header;
