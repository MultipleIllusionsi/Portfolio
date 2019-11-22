import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer";
import InitialAnimation from "../../components/InitialAnimation/InitialAnimation";
import PersonalPhoto from "../../assets/personal-photo.jpg";

import "./About.scss";

class About extends React.Component {
  state = {
    position: null
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
    if (scrolledPercent > 0.5) {
      return;
    }
    console.log("scrolledPercent", scrolledPercent);
    this.setState({ scrolledPercent: scrolledPercent });
  };

  render() {
    console.log("render from about page");
    const { scrolledPercent } = this.state;
    return (
      <>
        <div onScroll={this.listenToScroll} className="page-about">
          <InitialAnimation color="white" />
          <div
            style={{
              transform: `translateY(${scrolledPercent * 400}%)`,
              opacity: `${1 - scrolledPercent * 2.3}`
            }}
            className={`page-about__headings`}
          >
            <h3>Frontend Developer</h3>
            <h1>Sergey Zakharov</h1>
          </div>
          <div className="page-about__bio">
            <p>
              I'm a 22-year-old frontend developer from Yekaterinburg, Russia,
              graduated from a Bachelor in Information Systems and Technologies.
            </p>
            <p>
              I am passionate about creating beautiful and original web
              applications. I also take a very keen interest on many aspects of
              development, such as backend and web design.
            </p>
            <p>Currently looking for opportunities in Russia.</p>
          </div>
          <div className="page-about__photo">
            <Link to="/">
              <img src={PersonalPhoto} alt="sergey zakharov" />
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
