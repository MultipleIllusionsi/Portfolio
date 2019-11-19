import React from "react";

import "./About.scss";
import PersonalPhoto from "../../assets/personal-photo.jpg";

const About = () => {
  return (
    <div className="page-about">
      <div className="headings">
        <h3>Frontend Developer</h3>
        <h1>Sergey Zakharov</h1>
      </div>
      <div className="bio">
        <p>I'm a 22 years old frontend developer from Yekaterinburg</p>
      </div>
      <div className="photo">
        <img src={PersonalPhoto} alt="" />
      </div>
    </div>
  );
};

export default About;
