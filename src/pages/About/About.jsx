import React from "react";

import "./About.scss";

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
        <img
          src="https://sun9-45.userapi.com/c844723/v844723604/1e3053/LO3UImQ6tFk.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
