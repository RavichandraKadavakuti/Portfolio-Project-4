import React from "react";
import NavHeader from "../NavHeader";
import NavFooter from "../NavFooter";
import { Chrono } from "react-chrono";
import "./index.css";

const skillsList = [
  { id: 1, value: "HTML5 / CSS3" },
  { id: 2, value: "Bootstrap" },
  { id: 3, value: "Responsive Web Design" },
  { id: 4, value: "JavaScript (ES6+)" },
  { id: 5, value: "RESTful APIs" },
  { id: 6, value: "React.Js" },
  { id: 7, value: "Redux / Context API" },
  { id: 8, value: "Git / GitHub" },
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

const About = () => {
  const items = EducationList.map((each) => ({
    cardTitle: <h5 className="ms-4">{each.course}</h5>,
    cardSubtitle: <h5 className="ms-4">{each.university}</h5>,
    cardDetailedText: <h6 className="ms-3">{each.graduated}</h6>,
  }));

  return (
    <div className="container custom-scroll-container">
      <div className="row">
        <NavHeader />
        <div
          data-aos="zoom-in-up"
          className="d-flex flex-column bg-success-subtle p-3 rounded"
        >
          <div>
            <h1 className="text-center border-bottom border-dark custom-about-page-titles">
              About Me
            </h1>
            <p className="about-me p-2">
              Hi, I'm <b>Ravichandra Kadavakuti </b> , a dedicated React
              developer passionate about creating seamless and engaging web
              applications. I enjoy turning ideas into reality and crafting
              user-friendly interfaces.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-primary title">Skills</h3>
            <ul className="d-flex flex-wrap">
              {skillsList.map((each) => (
                <li
                  key={each.id}
                  className="border border-dark rounded shadow col-10 col-sm-5 p-3 m-4 custom-skills-items"
                >
                  <h6>{each.value}</h6>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-5">
            <h3 className="text-primary title">Education</h3>
            <Chrono
              mode="VERTICAL"
              items={items}
              hideControls
              disableClickOnCircle
              disableAutoScrollOnClick
              lineWidth={2}
              timelinePointDimension={0}
            >
              <div className="chrono-icons">
                <i className="fa-solid fa-graduation-cap"></i>
                <i className="fa-solid fa-graduation-cap"></i>
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </Chrono>
          </div>
          <div className="my-5">
            <NavFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
