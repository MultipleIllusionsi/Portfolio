import React, { Component } from "react";

import "./canvas.scss";

class Canvas extends Component {
  canva = React.createRef();
  state = {
    width: null,
    height: null
  };

  componentDidMount() {
    this.setState({
      width: this.canva.current.clientWidth,
      height: this.canva.current.clientHeight
    });
  }

  componentDidUpdate() {
    this.paint();
  }

  paint() {
    const context = this.canva.current.getContext("2d");
    context.clearRect(0, 0, this.state.width, this.state.height);
    context.save();

    const g = context.createRadialGradient(0, 0, 0, 0, 0, 600);
    g.addColorStop(0, "#000");
    g.addColorStop(1, "rgb(" + 255 + ", " + 255 + ", " + 255 + ")");

    context.fillStyle = g;

    context.fillRect(0, 0, this.state.width, this.state.height);
    context.save();
  }

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
          onMouseMove={this.moveHandler}
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
