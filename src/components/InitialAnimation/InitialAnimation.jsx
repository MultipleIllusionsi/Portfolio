import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withRouter } from "react-router-dom";

import "./InitialAnimation.scss";

const InitialAnimation = ({ location, size, color }) => (
  <TransitionGroup>
    <CSSTransition
      classNames="appearBlock"
      appear
      timeout={0}
      key={location.pathname}
    >
      <div className={`appearBlock ${size && size} ${color}`} />
    </CSSTransition>
  </TransitionGroup>
);
export default withRouter(InitialAnimation);
