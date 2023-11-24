import React from "react";
import NavHeader from "../NavHeader";
import NavFooter from "../NavFooter";
import "./index.css";

const porjectsLists = [
  {
    id: 1,
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685446435/Login_page_le7lfi.png",
    projectName: "Insta Share",
    projectLink: "https://instasharekrc.netlify.app",
    gitLink:
      "https://github.com/RavichandraKadavakuti/Instashare-Project-1.git",
  },
  {
    id: 2,
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685447110/Login_page_1_duzxed.png",
    projectName: "Book Hub",
    projectLink: "https://bookhubkrc.netlify.app",
    gitLink: "https://github.com/RavichandraKadavakuti/BookHub-Project-2.git",
  },
  {
    id: 3,
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685438990/jobby-app-login-lg-output_hewhhv.png",
    projectName: "Jobby App",
    projectLink: "https://jobbyappkrc.netlify.app",
    gitLink: "https://github.com/RavichandraKadavakuti/JobbyApp-Project-3.git",
  },
  {
    id: 4,
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685447386/Login_Empty_g2l9zg.png",
    projectName: "Tasty Kitchen",
    projectLink: "#",
    gitLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="container custom-scroll-container">
      <div className="row">
        <NavHeader />
        <div
          data-aos="zoom-in-up"
          className="d-flex flex-column bg-success-subtle p-3 rounded"
        >
          <ul className="d-flex flex-wrap justify-content-center">
            {porjectsLists.map((each) => (
              <li
                key={each.id}
                className="col-11 col-sm-5 col-md-4  col-lg-5 border border-dark rounded text-center shadow  p-2 m-2"
              >
                <a
                  href={each.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={each.projectImg}
                    alt={each.projectName}
                    className="img-fluid rounded mb-3 project-img"
                  />
                  <h3 className="text-dark">{each.projectName}</h3>
                  <div className="d-flex justify-content-end">
                    <a
                      href={each.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github project-github"></i>
                    </a>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="my-5">
            <NavFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
