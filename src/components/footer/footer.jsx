import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./footer.scss";

const Footer = props => {
  console.log("props", props);
  const classes = props.location.pathname === "/" ? "homepage" : "other";
  return (
    <footer className={`footer ${classes}`}>
      {props.extra && <div>extra</div>}
      <ul className="footer-list">
        <li className="footer-list__item">
          <Link to="/work">Work</Link>
        </li>
        <li className="footer-list__item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default withRouter(Footer);
