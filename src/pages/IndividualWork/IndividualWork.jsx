import React from "react";

import Footer from "../../components/footer/footer";
import InitialAnimation from "../../components/InitialAnimation/InitialAnimation";
import listOfWorks from "../../assets/static/listOfWorks";
import AppearAnimation from "../../components/AppearAnimation/AppearAnimation";

import "./IndividualWork.scss";

const IndividualWork = ({ match: { params } }) => {
  let data = listOfWorks.filter(work => work.title === params.title);
  const {
    title,
    preview,
    link,
    stack,
    describe_one,
    describe_two,
    image_one,
    image_two,
    image_three,
    image_four
  } = data[0];
  return (
    <div className="IndividualWork-page">
      <InitialAnimation color="white" size="full" />
      <div className="page-content">
        <AppearAnimation classes={"IndividualWork"} timeout={800}>
          <h1>{title}</h1>
        </AppearAnimation>
        <p>{describe_one}</p>
        <img src={image_one} alt="" />
        <img src={image_two} alt="" />
        <ul className="stack-list">
          Stack:
          {stack.map((item, index) => (
            <li key={index} className="stack-list__item">
              {item}
            </li>
          ))}
        </ul>
        <img src={image_three} alt="" />
        <img src={image_four} alt="" />
        <div className="link-wrapper">
          <a target="blank" href={link}>
            <span className="link-style">Link</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualWork;
