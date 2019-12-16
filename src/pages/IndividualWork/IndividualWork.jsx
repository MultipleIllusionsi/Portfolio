import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer";
import InitialAnimation from "../../components/InitialAnimation/InitialAnimation";
import listOfWorks from "../../assets/static/listOfWorks";
import AppearAnimation from "../../components/AppearAnimation/AppearAnimation";

import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { ReactComponent as GithubIcon } from "../../assets/github-icon.svg";

import "./IndividualWork.scss";

const IndividualWork = ({ match: { params } }) => {
  let data = listOfWorks.filter(work => work.title === params.title);
  const {
    title,
    link,
    git_link,
    stack,
    describe_one,
    image_one,
    image_two,
    image_three,
    image_four
  } = data[0];

  return (
    <div className="IndividualWork-page">
      <InitialAnimation color="white" size="full" />
      <div className="page-content">
        <Link to="/work">
          <ArrowIcon />
        </Link>
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
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <span className="link-style">Link</span>
          </a>
          <a target="_blank" rel="noopener noreferrer" href={git_link}>
            <GithubIcon className="github-icon" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualWork;
