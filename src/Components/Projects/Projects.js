import React from "react";
import Project from "./Project/Project";
import classes from "./Projects.module.css";
import SpotifyLogo from "../../Public/spotify logo.jpg";
import AmazonLogo from "../../Public/Amazon-logo-880x660.png";
import BurgerLogo from "../../Public/burger builder.png";
import VocabookLogo from "../../Public/vocabook.png";
import AirbnbLogo from "../../Public/airbnb-logo-0.jpg";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Robot from "../../Public/robot.jpg"

const Projects = () => {
  const projects = [
    {
      title: "Amazon-Clone",
      description:
        "A fully function amazon clone built using react js. the backend is handled using firebase and so the database part. you can create account and walk through all amazon dummy features.",
      image: AmazonLogo,
      visit: "https://clone-e61de.web.app/",
      github: "https://github.com/pranay101/Amazon-Clone",
    },
    {
      title: "Spotify-Clone",
      description:
        "Spotify web Player clone built using next js, tailwind css, recoiljs, nextauth and nextMiddlwware. You'll need a spotify premium account inorder to play music, if you dont have one you can only list out your playlists",
      image: SpotifyLogo,
      visit: "https://spotify-webplayer-clone.vercel.app/",
      github: "https://github.com/pranay101/Spotify-Clone",
    },
    {
      title: "AirBnb Clone",
      description:
        "A react app replicating airbnb. the center of attraction is the data picker component. building using react-date-range npm package, and clean ui is cherry on top ",
      image: AirbnbLogo,
      visit: "https://pranay101.github.io/AirbBnb-Clone/",
      github: "https://github.com/pranay101/AirbBnb-Clone",
    },
    {
      title: "Vocabook",
      description:
        "My first full stack project using expressjs on top of node using mongogb, mongoose, heroku and pug. its a website which helps you boost up your vocabulary slowly and gradually by introducing you to a new word daily ",
      image: VocabookLogo,
      visit: "http://voca-book.herokuapp.com/",
      github: "https://github.com/pranay101/Vocabook",
    },
    {
      title: "Burger Buidler",
      description:
        "A react app that dynamically generates your burger depending on the ingredients you want. obviously you cant order a actual one but its fun to play with",
      image: BurgerLogo,
      visit: "https://pranay101.github.io/Burger-Builder/#/",
      github: "https://github.com/pranay101/Burger-Builder",
    },
    {
      title: "Under Development",
      description: "Under Development, Something great is on its way",
      image: Robot,
      visit: "",
      github: "",
    },
  ];

  return (
    <div className={classes.Projects}>
      <h1>
        <AccountTreeIcon /> Projects
      </h1>
      <div className={classes.Projects__list}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              visit={project.visit}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
