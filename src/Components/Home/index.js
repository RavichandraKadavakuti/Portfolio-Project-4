import React from "react";
import Navbar from "../Navbar";
import HomePage from "../HomePage";
import Contact from "../Contact";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="bg-success-subtle p-2 p-lg-5 mt-lg-2 rounded">
          <HomePage />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
