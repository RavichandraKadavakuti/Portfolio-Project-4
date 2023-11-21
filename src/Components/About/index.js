import React from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import { Chrono } from "react-chrono";
import "./index.css";

const skillsList = [
  { id: 1, value: "HTML5 / CSS3" },
  { id: 2, value: "Bootstrap" },
  { id: 3, value: "Responsive Web Design" },
  { id: 4, value: "JavaScript (ES6+)" },
  { id: 5, value: "RESTful APIs" },
  { id: 6, value: "Redux / Context API" },
  { id: 7, value: "Git / GitHub" },
];

const EducationList = [
  {
    course: "BHM",
    university: "Annamali University",
    graduated: "Graduated : 2021",
  },
  {
    course: "INTERMEDIATE",
    university: "Sri Chaitanya Collage",
    graduated: "Pass-out : 2018",
  },
  {
    course: "SSC",
    university: "Sri Chaitanya School",
    graduated: "Pass-out : 2016",
  },
];

const items = EducationList.map((each) => ({
  cardTitle: <h4 className="ms-2 mb-2">{each.course}</h4>,
  cardSubtitle: <h5 className="ms-2 mb-0">{each.university}</h5>,
  cardDetailedText: <h6>{each.graduated}</h6>,
}));

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="bg-success-subtle mt-lg-2 rounded p-3 p-lg-5">
          <h1 className="text-center border-bottom border-dark">About Me</h1>
          <div>
            <p>
              Hi, I'm <b>Ravichandra Kadavakuti </b> , a dedicated React
              developer passionate about creating seamless and engaging web
              applications. I enjoy turning ideas into reality and crafting
              user-friendly interfaces.
            </p>
          </div>
          <div>
            <h3>Skills</h3>
            <ul className="d-flex flex-wrap">
              {skillsList.map((each) => (
                <li
                  key={each.id}
                  className="border border-dark col-12 col-sm-5 col-lg-3 col-xl-2 m-2 rounded p-2"
                >
                  {each.value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Education</h3>
            <Chrono
              items={items}
              mode="VERTICAL"
              hideControls
              disableClickOnCircle
            >
              <div className="chrono-icons">
                <i className="fa-solid fa-graduation-cap"></i>
                <i className="fa-solid fa-graduation-cap"></i>
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </Chrono>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default About;
