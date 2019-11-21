import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Footer from "../../components/footer/footer";

import "./IndividualWork.scss";

const IndividualWork = props => {
  console.log("props", props);
  return (
    <div className="IndividualWork-page">
      <TransitionGroup>
        <CSSTransition
          classNames="appearBlock"
          appear
          timeout={0}
          key={props.location.pathname}
        >
          <div className="appearBlock white"></div>
        </CSSTransition>
      </TransitionGroup>
      Individual work for {props.match.params.title}
      <Footer />
    </div>
  );
};

export default IndividualWork;
