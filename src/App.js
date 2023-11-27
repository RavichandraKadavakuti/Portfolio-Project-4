import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ProjectsPage from "./Components/ProjectsPage";
import MoreProjectsPage from "./Components/MoreProjectsPage";
import ContactFormPage from "./Components/ContactFormPage";

const App = () => {
  AOS.init();
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/more-projects" component={MoreProjectsPage} />
      <Route exact path="/contact" component={ContactFormPage} />
    </Switch>
  );
};

export default App;
