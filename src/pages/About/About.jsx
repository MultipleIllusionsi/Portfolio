import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer";
import InitialAnimation from "../../components/InitialAnimation/InitialAnimation";
import AppearAnimation from "../../components/AppearAnimation/AppearAnimation";
import PersonalPhoto from "../../assets/personal-photo.jpg";

import "./About.scss";

class About extends React.Component {
  state = {
    scroll: null
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledPercent = currScroll / height;

    // switch (scrolledPercent > 0) {
    //   case scrolledPercent > 0.5:
    //     document.body.style.backgroundColor = "#f7f1e3";
    //     break;
    //   case scrolledPercent < 0.5:
    //     document.body.style.backgroundColor = "white";
    //     break;
    //   default:
    //     break;
    // }

    if (scrolledPercent > 0.5) {
      return;
    }

    console.log("scrolledPercent", scrolledPercent);
    this.setState({ scroll: scrolledPercent });
  };

  render() {
    console.log("render from about page");
    const { scroll } = this.state;
    return (
      <>
        <div onScroll={this.listenToScroll} className="page-about">
          {/* <InitialAnimation color="white" /> */}

          <AppearAnimation classes={"PageAbout-heading"} timeout={0}>
            <div
              style={{
                transform: `translateY(${scroll * 400}%)`,
                opacity: `${1 - scroll * 2.3}`
              }}
              className={`page-about__headings`}
            >
              <h3>Frontend Developer</h3>
              <h1>Sergey Zakharov</h1>
            </div>
          </AppearAnimation>

          <AppearAnimation classes={"PageAbout"} timeout={200}>
            <div className="page-about__bio">
              <p>
                I'm a 22-year-old frontend developer from Yekaterinburg, Russia,
                graduated from a Bachelor in Information Systems and
                Technologies.
              </p>
              <p>
                I am passionate about creating beautiful and original web
                applications. I also take a very keen interest on many aspects
                of development, such as backend and web design.
              </p>
              <p>Currently looking for opportunities in Russia.</p>
            </div>
          </AppearAnimation>

          <AppearAnimation classes="PageAbout" timeout={400}>
            <section className="page-about__skills">
              <div className="page-about__skills-list">
                <h2>Skills</h2>
                <ul>
                  <li>HTML5 (Pug)</li>
                  <li>CSS3 (SCSS), CSS in JS</li>
                  <li>JavaScript (up to ES10)</li>
                  <li>React (incl. knowledge of the latest updates)</li>
                  <li>Redux (as well Async Redux)</li>
                  <li>Firebase</li>
                  <li>Git, Github</li>
                  <li>Webpack, NPM, Parcel</li>
                </ul>
              </div>
              <div className="page-about__skills-photo">
                <Link to="/">
                  <img src={PersonalPhoto} alt="sergey zakharov" />
                </Link>
              </div>
            </section>
          </AppearAnimation>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
