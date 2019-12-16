import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer";
import AppearAnimation from "../../components/AppearAnimation/AppearAnimation";
import PersonalPhoto from "../../assets/personal-photo.jpg";

import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { ReactComponent as GithubIcon } from "../../assets/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-icon.svg";
import { ReactComponent as VkIcon } from "../../assets/vk-icon.svg";
import { ReactComponent as GmailIcon } from "../../assets/gmail-icon.svg";

import "./About.scss";

const About = () => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (currScroll > 300) {
      return;
    }
    setScroll(currScroll);
  };

  return (
    <>
      <div onScroll={listenToScroll} className="page-about page-width">
        <Link to="/">
          <ArrowIcon />
        </Link>
        <AppearAnimation classes={"PageAbout-heading"} timeout={0}>
          <div
            style={{
              transform: `translateY(${scroll * 0.8}%)`,
              opacity: `${1 - scroll * 0.004}`
            }}
            className={`page-about__headings`}
          >
            <h3>Frontend Developer</h3>
            <h1>Sergey Zakharov</h1>
          </div>
        </AppearAnimation>

        <AppearAnimation classes="PageAbout" timeout={200}>
          <div className="page-about__bio">
            <p className="text-margin">
              I'm a 22-year-old frontend developer from Yekaterinburg, Russia,
              graduated from a Bachelor in Information Systems and Technologies.
            </p>
            <p>
              I am passionate about creating beautiful and original web
              applications.
            </p>
            <p className="text-margin">
              I also take a very keen interest on many aspects of development,
              such as backend and web design.
            </p>
            <p className="text-margin">
              Being self-taught, I completed more than 250 hours of courses from
              the best foreign instructors in various fields of development (of
              which 80% are front-end), and also spent countless hours learning
              on my own.
            </p>
            <p>Currently looking for opportunities in Russia.</p>
          </div>
        </AppearAnimation>

        <AppearAnimation classes="PageAbout" timeout={400}>
          <section className="page-about__talents">
            <div className="page-about__talents-list">
              <div className="SkillList">
                <h2>Skills</h2>
                <ul>
                  <li>Layout, Functionality</li>
                  <li>Clean code, best practices</li>
                  <li>Web Optimization, Responsive design</li>
                  <li>Basic UI/UX edits</li>
                </ul>
              </div>
              <div className="ToolsList">
                <h2>Tools</h2>
                <ul>
                  <li>HTML5 (Pug)</li>
                  <li>CSS3 (SCSS), Bootstrap, CSS in JS</li>
                  <li>JavaScript (up to ES10)</li>
                  <li>React (incl. recent updates)</li>
                  <li>Redux </li>
                  <li>Firebase</li>
                  <li>Git, Github</li>
                  <li>Webpack, NPM, Parcel</li>
                </ul>
              </div>
            </div>

            <div className="page-about__photo">
              <img src={PersonalPhoto} alt="sergey zakharov" />
            </div>
          </section>
        </AppearAnimation>

        <section className="page-about__get-in-touch">
          <h4>Get in touch!</h4>
          <ul className="social-list">
            <li>
              <a href="mailto:zakharov.nsg@gmail.com">
                <GmailIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/zakharov-ss/"
              >
                <LinkedinIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MultipleIllusionsi"
              >
                <GithubIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com/zakharov_nsg"
              >
                <VkIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1Fx25pv19YYzhX6UQV2SpTlySNu32j7x_/view"
              >
                CV
              </a>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
