import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./footer.scss";

const Footer = props => {
  const classes = props.location.pathname === "/" ? "homepage" : "other";

  // const handleClick = async e => {
  //   e.persist();
  //   e.preventDefault();
  //   const path = e.currentTarget.dataset.path;
  //   // await doSomething();
  //   setTimeout(() => {
  //     props.history.push(path);
  //   }, 1000);
  // };

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
