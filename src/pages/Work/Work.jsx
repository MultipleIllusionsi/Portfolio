import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Footer from "../../components/footer/footer";
import listOfWorks from "../../assets/static/listOfWorks";
import WorkItem from "../../components/WorkItem/WorkItem";

import "./Work.scss";

const Work = props => {
  console.log("listOfWorks", listOfWorks);
  return (
    <>
      <div className="page-work">
        <TransitionGroup>
          <CSSTransition
            classNames="appearBlock"
            appear
            timeout={0}
            key={props.location.pathname}
          >
            <div className="appearBlock black"></div>
          </CSSTransition>
        </TransitionGroup>
        <ul className="work-list">
          {listOfWorks.map(work => (
            <WorkItem data={work} />
          ))}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Work;
