import React, { Component } from "react";

import { throttle } from "lodash";

import "./canvas.scss";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canva = React.createRef();
    this.state = {
      width: null,
      height: null,
      ready: false
    };
    this.moveHandlerThrottled = throttle(this.moveHandler, 50);
  }

  componentDidMount() {
    this.setState({
      width: this.canva.current.clientWidth,
      height: this.canva.current.clientHeight
    });
    setTimeout(() => {
      this.setState({ ready: true });
    }, 1500);
  }

  // componentDidUpdate() {}

  moveHandler = e => {
    const w = this.state.width;
    const h = this.state.height;
    const x = e.clientX;
    const y = e.clientY;
    const rx = (600 * x) / w;
    const ry = (600 * y) / h;

    const xcol = ~~((256 * x) / w);
    const ycol = ~~((256 * y) / h);
    const context = this.canva.current.getContext("2d");
    const g = context.createRadialGradient(rx, ry, 0, rx, ry, 600);
    g.addColorStop(0, "#000");
    g.addColorStop(
      1,
      ["rgb(", xcol, ", ", 255 - xcol, ", ", ycol, ")"].join("")
    );
    context.fillStyle = g;
    context.fillRect(0, 0, 600, 600);
  };

  render() {
    return (
      <section className="canvas-wrapper">
        <canvas
          onMouseMove={
            this.state.ready
              ? e => {
                  e.persist();
                  this.moveHandlerThrottled(e);
                }
              : undefined
          }
          ref={this.canva}
          className="canvas"
        ></canvas>
        <div className="canvas-text">
          <h3>Frontend Developer</h3>
          <h1>Zakharov Sergey</h1>
        </div>
      </section>
    );
  }
}

export default Canvas;
