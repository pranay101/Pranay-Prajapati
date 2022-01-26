import React from "react";
import Project from "./Project/Project";
import classes from "./Projects.module.css"
import SpotifyLogo from "../../Public/spotify logo.png"
import AmazonLogo from "../../Public/Amazon-logo-880x660.png"
import BurgerLogo from "../../Public/burger builder.png"
import VocabookLogo from "../../Public/vocabook.png"
import AirbnbLogo from "../../Public/airbnb-logo-0.png"

const Projects = () => {
  const projects = [
    {
      title: "Amazon-Clone",
      description:
        "A fully function amazon clone built using react js. the backend is handled using firebase and so the database part. you can create account and walk through all amazon dummy features.",
      image: AmazonLogo,
    },
    {
      title: "Spotify-Clone",
      description:
        "Spotify web Player clone built using next js, tailwind css, recoiljs, nextauth and nextMiddlwware.",
      image: SpotifyLogo,
    },
    {
      title: "Amazon-Clone",
      description:
        "A fully function amazon clone built using react js. the backend is handled using firebase and so the database part. you can create account and walk through all amazon dummy features.",
      image: AirbnbLogo,
    },
    {
      title: "Amazon-Clone",
      description:
        "A fully function amazon clone built using react js. the backend is handled using firebase and so the database part. you can create account and walk through all amazon dummy features.",
      image: VocabookLogo
    },
    {
      title: "Amazon-Clone",
      description:
        "A fully function amazon clone built using react js. the backend is handled using firebase and so the database part. you can create account and walk through all amazon dummy features.",
      image:BurgerLogo,
    },
  ];


  return (
    <div className={classes.Projects}>
      <h1>Projects</h1>
      <div className={classes.Projects__list}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
