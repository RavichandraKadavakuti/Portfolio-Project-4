import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Projects from "./Components/Projects";
import MiniProjects from "./Components/MiniProjects";

import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/mini-projects" component={MiniProjects} />
    </Switch>
  );
};

export default App;
