import React from "react";
import HeadPage from "../HeadPage";
import FooterPage from "../FooterPage";
import { v4 as uuidV4 } from "uuid";

const projectsList = [
  {
    id: uuidV4(),
    name: "Ipl Dashboard",
    projectLink: "https://ipldashboardkrc.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685600083/1670405385018_mfe2ct.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/IPL-Dashboards",
  },
  {
    id: uuidV4(),
    name: "Wikipedia",
    projectLink: "https://wikipediasearchkrc.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685600119/1670385017249_v8brol.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Wikipedia",
  },
  {
    id: uuidV4(),
    name: "Match Game",
    projectLink: "https://matchgamekrc.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685600727/match-game-output_osdppc.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Match-Game",
  },
  {
    id: uuidV4(),
    name: "Appointment Booking",
    projectLink: "https://appointmentskrc.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1687168562/appointments-app-output_u4f1to.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Appointments-Booking",
  },

  {
    id: uuidV4(),
    name: "Coin Toss Game",
    projectLink: "https://cointossgamekrc.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685600012/1670400998729_dzuyak.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Head-Tails-Game",
  },
  {
    id: uuidV4(),
    name: "App Store",
    projectLink: "https://appstorekrc.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685599650/1670409066169_a0jwkf.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Appstore",
  },
  {
    id: uuidV4(),
    name: "Gallery",
    projectLink: "https://galleryappkrc.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685600055/1670400594443_uqpvna.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Gallery",
  },
  {
    id: uuidV4(),
    name: "Browser History",
    projectLink: "https://browserhistory.netlify.app",
    projectImg:
      "  https://res.cloudinary.com/dnmaskg3n/image/upload/v1685601215/1670400303794_w3lk4h.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Browser-History",
  },
  {
    id: uuidV4(),
    name: "Destination Search Places",
    projectLink: "https://destinationsearchplaces.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685601073/1670399705569_csrypw.gif",
    githubLink:
      "https://github.com/RavichandraKadavakuti/Destination-Search-places",
  },
  {
    id: uuidV4(),
    name: "Fruit Count",
    projectLink: "https://fruitscounter.netlify.app",
    projectImg:
      "https://res.cloudinary.com/dnmaskg3n/image/upload/v1685599994/1670394429121_ng3lov.gif",
    githubLink: "https://github.com/RavichandraKadavakuti/Fruits-count",
  },
];

const MoreProjectsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <HeadPage />
        <div className="p-lg-5">
          <h1 className="text-center border-bottom border-dark pb-3 pb-lg-5 projects-title">
            More-Projects
          </h1>
          <ul
            data-aos="fade-up"
            data-aos-duration="1000"
            className="d-flex flex-wrap justify-content-center"
          >
            {projectsList.map((each) => (
              <li
                data-aos="flip-up"
                key={each.id}
                className="col-11 col-sm-5 col-lg-4 border border-dark rounded shadow p-3 p-lg-5 m-2 m-lg-5 project-item"
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
                      <h6 className="card-text text-center">{each.name}</h6>
                      <div>
                        <a
                          href={each.githubLink}
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

export default MoreProjectsPage;
