import React from "react";

import "./canvas.scss";

const Canvas = () => {
  return (
    <section className="canvas-wrapper">
      <canvas className="canvas"></canvas>
      <div className="canvas-text">
        <h3>Frontend Developer</h3>
        <h1>Zakharov Sergey</h1>
      </div>
    </section>
  );
};

export default Canvas;
