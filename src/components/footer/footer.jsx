import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./footer.scss";

const Footer = props => {
  const classes = props.location.pathname === "/" ? "homepage" : "other";
  return (
    <footer className={`footer ${classes}`}>
      {props.extra && <div>extra</div>}
      <ul className="footer-list">
        <li>
          <NavLink activeClassName="active-link" to="/work">
            <span className="footer-list__item">Work</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/about">
            <span className="footer-list__item">About</span>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default withRouter(Footer);
