import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Canvas from "../../components/canvas/canvas";
import Footer from "../../components/footer/footer";

import "./Homepage.scss";

const Homepage = props => {
  console.log("this.props", props);
  return (
    <div className="home-page">
      <TransitionGroup>
        <CSSTransition
          classNames="animBc"
          appear
          timeout={0}
          key={props.location.pathname}
        >
          <div className="animBc"></div>
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup>
        <CSSTransition
          classNames="canvas"
          appear
          timeout={1200}
          key={props.location.pathname}
        >
          <Canvas />
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup>
        <CSSTransition
          classNames="footer"
          appear
          timeout={2000}
          key={props.location.pathname}
        >
          <Footer />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Homepage;
