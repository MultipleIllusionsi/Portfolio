import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer";

import PersonalPhoto from "../../assets/personal-photo.jpg";

import "./About.scss";

class About extends React.PureComponent {
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
    console.log("-winscroll-", currScroll);
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    console.log("==height==", height);
    const scrolledPercent = currScroll / height;
    this.setState({ scrolledPercent: scrolledPercent });
  };

  render() {
    console.log("render from about page");
    const { scrolledPercent } = this.state;
    return (
      <>
        <div onScroll={this.listenToScroll} className="page-about">
          <div
            style={{
              transform: `translateY(${scrolledPercent * 200}%)`,
              opacity: `${1 - scrolledPercent}`
            }}
            className={`headings`}
          >
            <h3>Frontend Developer</h3>
            <h1>Sergey Zakharov</h1>
          </div>
          <div className="bio">
            <p>I'm a 22 years old frontend developer from Yekaterinburg</p>
          </div>
          <div className="photo">
            <Link to="/">
              <img src={PersonalPhoto} alt="" />
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
