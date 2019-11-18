import React from "react";

import Canvas from "./components/canvas/canvas";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Canvas></Canvas>
      <section className="info">
        <div className="info__item">Work</div>
        <div className="info__item">About</div>
      </section>
    </div>
  );
};

export default App;
