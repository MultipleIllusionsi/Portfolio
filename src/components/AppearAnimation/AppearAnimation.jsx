import React from "react";
import { withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AppearAnimation = props => (
  <TransitionGroup>
    <CSSTransition
      classNames={props.classes}
      appear
      timeout={props.timeout}
      key={props.location.pathname}
    >
      {props.children}
    </CSSTransition>
  </TransitionGroup>
);

export default withRouter(AppearAnimation);
