import React from "react";
import classes from "./About.module.css";
import SchoolIcon from "@mui/icons-material/School";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Tech from "./tech/Tech";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FeedIcon from "@mui/icons-material/Feed";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  const tech_list = [
    {
      title: "Nodejs",
      experience: 3,
      grip: 100,
    },
    {
      title: "Python",
      experience: 3,
      grip: 90,
    },
    {
      title: "Reactjs",
      experience: 1,
      grip: 95,
    },
    {
      title: "Nextjs",
      experience: 0.5,
      grip: 90,
    },
    {
      title: "Expressjs",
      experience: 3,
      grip: 95,
    },
    {
      title: "Mongodb",
      experience: 3,
      grip: 90,
    },
    {
      title: "Redux",
      experience: 1,
      grip: 90,
    },
    {
      title: "Recoiljs",
      experience: 0.5,
      grip: 90,
    },
    {
      title: "Tailwind Css",
      experience: 1,
      grip: 80,
    },
    {
      title: "Mongoose",
      experience: 3,
      grip: 80,
    },
    {
      title: "Firebase",
      experience: 1,
      grip: 60,
    },
    {
      title: "Heroku",
      experience: 2,
      grip: 80,
    },
    {
      title: "Vercel",
      experience: 1,
      grip: 90,
    },
  ];
  return (
    <div className={classes.About}>
      <div className={classes.About__section}>
        <h1>
          <SchoolIcon /> Education
        </h1>
        <div>
          <h4>Schooling</h4>
          <hr />
          <p>
            <small>Holy Cross Kapa Raipur Chattisgarh</small>{" "}
          </p>
        </div>
        <div>
          <h4>Graduation </h4>
          <hr />
          <p>
            <small>B-tech from SSIPMT Raipur.</small>
          </p>
        </div>
        <div>
          <h1>
            <SportsEsportsIcon /> Hobbies
          </h1>
          <hr />
          <p>
            Apart from coding all day long. I am into graphic design. Been
            running my own firm{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://artsystudio.myportfolio.com/"
            >
              {" "}
              The Artsy Studio
            </a>
            . under which i publish my designs. I really like playing sports,
            cricket, football, volleyball and badminton being prime of them.
            <br /> To keep my self in shape and sound i maintain my physique i
            watch my diet and do callisthenics and yoga,
          </p>
        </div>
        <div>
          <h1>
            <GolfCourseIcon /> Goals
          </h1>
          <hr />
          <p>
            <ul>
              <li>
                <input checked type="checkbox" name="" id="" />
                Finish learning React and make 5 projects
              </li>
              <li>
                <input disabled type="checkbox" name="" id="" />
                Learn Nextjs to its core
              </li>
              <li>
                <input checked type="checkbox" name="" id="" />
                Learn As many Skills possible(5 done already)
              </li>
              <li>
                <input disabled type="checkbox" name="" id="" />
                Complete atleast 2 Internsips
              </li>
              <li>
                <input disabled type="checkbox" name="" id="" />
                Deep dive into Data Strctures and Algorithm
              </li>
              <li>
                <input disabled type="checkbox" name="" id="" />
                Qualify for Gsoc 2022
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h1>
            <FeedIcon /> Socials
          </h1>
          <hr />
          <div className={classes.Socials}>
            <a href="https://www.instagram.com/pranayprajapati_._/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://github.com/pranay101" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.facebook.com/pranay.praj.792" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/pranay-prajapati-ba510b185/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com/___Pranay__" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.About__section}>
        <h1>Tech I Like to work with</h1>
        <div className={classes.About__tech}>
          {tech_list.map((tech, index) => {
            return (
              <Tech
                key={index}
                title={tech.title}
                experience={tech.experience}
                grip={tech.grip}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
