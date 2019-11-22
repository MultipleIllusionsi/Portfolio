import React from "react";

import Footer from "../../components/footer/footer";
import listOfWorks from "../../assets/static/listOfWorks";
import WorkItem from "../../components/WorkItem/WorkItem";
import InitialAnimation from "../../components/InitialAnimation/InitialAnimation";

import "./Work.scss";

const Work = () => (
  <>
    <div className="page-work">
      <InitialAnimation color="black" />
      <ul className="work-list">
        {listOfWorks.map((work, index) => (
          <WorkItem key={index} data={work} />
        ))}
      </ul>
      <Footer />
    </div>
  </>
);

export default Work;
