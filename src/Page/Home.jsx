import React, { useState } from "react";
import logo from "../assets/logo.png";
import { usePrimaryContext } from "../Context/PrimaryProvider";
import { Icons } from "../Librarary/IconLybrary";
import { Card } from "../Components";

// Person Info
import { portfolioInfo } from "../assets/Data/dummydata";
import pdfFile from "../assets/resume.pdf";
const Home = () => {
  const { theme, toggleTheme } = usePrimaryContext();
  const [activeButton, setActiveButton] = useState("team");

  const filteredProjects = portfolioInfo.projects.filter(
    (project) =>
      (activeButton === "team" && project.projectType === "TEAM") ||
      (activeButton === "oneHand" && project.projectType === "ONE_HAND")
  );

  return (
    <div className="container tracking-wide px-8 sm:px-8 md:px-12 lg:px-40 xl:px-60 2xl:px-96">
      <div className="py-20 md:px-8">
        <div className="header flex justify-between items-center">
          <div>
            <a href="/">
              <img src={logo} className="w-5" alt="" />
            </a>
          </div>
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={toggleTheme}
          >
            <span>{theme === "light" ? <Icons.OFF /> : <Icons.ON />}</span>
            <span className="text-sm tracking-widest">
              Light {theme === "light" ? "off" : "on"}
            </span>
          </div>
        </div>

        <div className="personalInfoSection py-6">
          <p className="font-bold tracking-widest pb-0.5 text-base darkheader">
            {portfolioInfo.name}
          </p>
          <p className="text-xs dark pb-0.5 opacity-70">{portfolioInfo.role}</p>
          <p className="text-xs dark pb-0.5 opacity-70">
            {portfolioInfo.location}
          </p>
        </div>

        <div className="pt-12">
          <div className="font-bold">
            <b>{portfolioInfo.infohead} </b>
          </div>
          <div className="infocontent opacity-70 text-sm tracking-wider py-4 flex flex-col gap-2">
            <p>
              Specializing in{" "}
              {portfolioInfo.infocontent.specialization.toLowerCase()} with{" "}
              <span className="text-foreground font-mono font-semibold">
                {portfolioInfo.infocontent.frontendTechnologies.join(", ")}
              </span>
              . {portfolioInfo.infocontent.description} In addition to my
              frontend expertise, I have experience in backend development using{" "}
              <span className="text-foreground font-mono font-semibold">
                {portfolioInfo.infocontent.backendTechnologies.join(", ")}
              </span>
              . Alongside my development skills, I am also experienced in
              working with databases such as{" "}
              <span className="text-foreground font-mono font-semibold">
                {portfolioInfo.infocontent.databaseExperience.join(", ")}
              </span>
              . Additionally, my knowledge of{" "}
              <span className="text-foreground font-mono font-semibold">
                UI design with {portfolioInfo.infocontent.designTools[0]}
              </span>{" "}
              enables me to create visually appealing and user-friendly
              interfaces.
            </p>
          </div>
          <div className="pt-3 flex gap-4">
            <a
              href={pdfFile}
              download // This attribute prompts the browser to download the file
            >
              <button
                className="hover:-translate-y-1 transition-all ease-in-out duration-200 flex items-center gap-2 text-[0.8rem] 
            bg-dark-bg text-light-bg dark:bg-light-bg dark:text-dark-bg text-background px-[15px] py-[6px] rounded-full font-bold"
              >
                Resume <Icons.Download />
              </button>
            </a>
            <div className="flex gap-2">
              {portfolioInfo.externallink.map((link, index) => {
                const IconComponent = Icons[link.icon];
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-light-linkbg dark:bg-dark-linkbg p-2 rounded-full"
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="py-5 pb-8">
            <div>
              <p className="font-bold">Experience</p>
              {portfolioInfo.experience.map((experiencedtl, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 sm:flex-row sm:gap-4 py-4 text-[0.85rem]"
                >
                  <span className="opacity-80 text-[12px] min-w-40">
                    {experiencedtl.duration}
                  </span>
                  <div>
                    <span className="font-medium">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 hover:font-bold"
                        href={experiencedtl.companyLink}
                      >
                        {experiencedtl.company}
                      </a>{" "}
                      | {experiencedtl.role}
                    </span>
                    <div>
                      {experiencedtl.companyProjects ? (
                        <>
                          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 py-2 text-[0.85rem]">
                            <span className="opacity-80 min-w-fit">
                              PROJECTS
                            </span>
                          </div>
                          {experiencedtl.companyProjects.map(
                            (project, index) => (
                              <div
                                key={index}
                                className="flex flex-col sm:flex-row sm:gap-4 py-2 text-[0.85rem]"
                              >
                                <div>
                                  <span>
                                    {project.projectName} | {project.usedFor}
                                  </span>
                                  <span className="opacity-70">
                                    {project.projectdomain}
                                  </span>
                                  <span className="opacity-70">
                                    {project.projectdetail}
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col sm:flex-row sm:gap-4 py-2 text-[0.85rem]">
                          <div>
                            <span>NexERA | Full Stack Developer</span>
                            <span className="opacity-70">
                              Basically this is a Freight Forward Application.
                              Key Role is working in a team and developing
                              modules as per market requirements for enhancing
                              the product.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-8">
            <div className="flex justify-between items-center">
              <p className="font-bold">Projects</p>
              <div className="flex justify-around w-fit cursor-pointer rounded-full p-1 border bg-dark-bg text-dark-text dark:bg-light-bg dark:text-light-text">
                <span
                  onClick={() => setActiveButton("team")}
                  className={`rounded-full px-3 py-1 mx-2 ${
                    activeButton === "team"
                      ? "dark:bg-dark-bg dark:text-light-bg bg-light-bg text-light-text"
                      : "font-bold"
                  }`}
                >
                  Team
                </span>
                <span
                  onClick={() => setActiveButton("oneHand")}
                  className={`rounded-full px-2 py-1 mx-2 ${
                    activeButton === "oneHand"
                      ? "bg-light-bg text-light-text dark:bg-dark-bg dark:text-light-bg"
                      : "font-bold"
                  }`}
                >
                  One Hand
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((projectInfo, index) => (
                <a
                  key={index}
                  href={projectInfo.siteurl} // Replace with the actual URL property from your data
                  target="_blank" // Opens in a new tab
                  rel="noreferrer" // Prevents security vulnerabilities
                  className="block" // Ensures the link covers the entire card area
                >
                  <Card
                    key={index}
                    data={projectInfo}
                    bordercolor="bordergreen"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
