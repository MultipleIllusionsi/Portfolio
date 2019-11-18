import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./footer.scss";

const Footer = props => {
  console.log("props", props);
  const classes = props.location.pathname === "/" ? "homepage" : "other";
  return (
    <footer className={`footer ${classes}`}>
      {props.extra && <div>extra</div>}
      <Link className="info__item" to="/work">
        Work
      </Link>
      <Link className="info__item" to="/about">
        About
      </Link>
    </footer>
  );
};

export default withRouter(Footer);
