import React from "react";
import HeadPage from "../HeadPage";
import FooterPage from "../FooterPage";
import "./index.css";
import { useEffect } from "react";

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

const ProjectsPage = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return (
    <div className="container">
      <div className="row">
        <HeadPage />
        <div className="p-lg-5">
          <h1 className="text-center border-bottom border-dark pb-3 pb-lg-5 projects-title">
            Projects
          </h1>
          <ul
            data-aos="fade-up"
            data-aos-duration="1000"
            className="d-flex flex-wrap justify-content-center"
          >
            {porjectsLists.map((each) => (
              <li
                data-aos="flip-up"
                key={each.id}
                className="col-11 col-sm-5 col-lg-4 border border-dark rounded shadow p-3 p-lg-5  m-2 m-lg-5  project-item"
              >
                <a
                  href={each.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card">
                    <img
                      src={each.projectImg}
                      alt={each.projectName}
                      className="card-img-top project-img"
                    />
                    <div className="card-body">
                      <h6 className="card-text text-center">
                        {each.projectName}
                      </h6>
                      <div>
                        <a
                          href={each.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-github project-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div data-aos="flip-up">
            <FooterPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
