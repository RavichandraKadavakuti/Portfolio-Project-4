import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";

import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={ContactForm} />
    </Switch>
  );
};

export default App;
