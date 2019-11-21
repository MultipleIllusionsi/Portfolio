import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

// import Footer from "./components/footer/footer";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const About = lazy(() => import("./pages/About/About"));
const Work = lazy(() => import("./pages/Work/Work"));
const IndividualWork = lazy(() =>
  import("./pages/IndividualWork/IndividualWork")
);

const App = () => (
  <>
    <Switch>
      <Suspense fallback={<div>loading...</div>}>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/work/:title" component={IndividualWork} />
      </Suspense>
    </Switch>
    {/* <Footer /> */}
  </>
);
export default App;
