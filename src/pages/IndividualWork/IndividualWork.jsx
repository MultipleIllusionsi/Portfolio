import React from "react";

import Footer from "../../components/footer/footer";
import InitialAnimation from "../../components/InitialAnimation/InitialAnimation";
import listOfWorks from "../../assets/static/listOfWorks";

import "./IndividualWork.scss";

const IndividualWork = ({ match: { params } }) => {
  let data = listOfWorks.filter(work => work.title === params.title);
  const {
    title,
    preview,
    stack,
    describe_one,
    describe_two,
    image_one,
    image_two
  } = data[0];
  return (
    <div className="IndividualWork-page">
      <InitialAnimation color="white" size="full" />
      <div className="page-content">
        <h1>{title}</h1>
        <p>{describe_one}</p>
        <img src={preview} alt="" />
        <ul className="stack-list">
          Stack:
          {stack.map(item => (
            <li className="stack-list__item">{item}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualWork;
