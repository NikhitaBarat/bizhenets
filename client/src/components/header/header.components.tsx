import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../../assets";
import "./header.styles.css";

const Header = () => {
  const ROUTES = [
    {
      nav_title: "Team",
      route: "team",
    },
    {
      nav_title: "Connect",
      route: "connect",
    },
    {
      nav_title: "Help",
      route: "help",
    },
    {
      nav_title: "SOS",
      route: "sos",
    },
  ];
  return (
    <header>
      <div className="header-content">
        <Link className="hero-logo-div" to="/">
          <img className="logo" src={LOGO} alt="" />
        </Link>

        <ul className="nav-options">
          {ROUTES.map((nav) => (
            <li className="nav-item">
              <Link to={`/${nav.route}`}>{nav.nav_title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
