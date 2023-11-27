import React from "react";
import HeadPage from "../HeadPage";
import FooterPage from "../FooterPage";
import { Chrono } from "react-chrono";
import "./index.css";
import { useEffect } from "react";

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

const AboutPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

  const items = EducationList.map((each) => ({
    cardTitle: <h4>{each.course}</h4>,
    cardSubtitle: <h5>{each.university}</h5>,
    cardDetailedText: <h6>{each.graduated}</h6>,
  }));

  return (
    <div className="container">
      <div className="row">
        <div className="about-container p-lg-5">
          <HeadPage />
          <div data-aos="zoom-out-down">
            <h1 className="text-center about-title border-bottom border-dark">
              About Me
            </h1>
            <p className="my-lg-5">
              Hi, I'm <b>Ravichandra Kadavakuti </b> , a dedicated React
              developer passionate about creating seamless and engaging web
              applications. I enjoy turning ideas into reality and crafting
              user-friendly interfaces.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="my-5"
          >
            <h1 className="sub-titles text-primary">Skills</h1>
            <ul className="d-flex flex-wrap">
              {skillsList.map((each) => (
                <li
                  data-aos="flip-down"
                  key={each.id}
                  className="col-11 col-sm-5 col-lg-3 p-3 m-2 border border-dark rounded skill-item"
                >
                  <h6>{each.value}</h6>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="flip-up" className="my-5">
            <h1 className="sub-titles text-primary">Education</h1>
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
                <i
                  data-aos="flip-down"
                  className="fa-solid fa-graduation-cap"
                ></i>
                <i
                  data-aos="flip-down"
                  className="fa-solid fa-graduation-cap"
                ></i>
                <i
                  data-aos="flip-down"
                  className="fa-solid fa-graduation-cap"
                ></i>
              </div>
            </Chrono>
          </div>
          <div data-aos="flip-up">
            <FooterPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
