import React from "react";
import classes from "./About.module.css";
import SchoolIcon from "@mui/icons-material/School";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const About = () => {
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
            running my own firm <a href="#"> The Artsy Studio</a>. under which i
            publish my designs. I really like playing sports, cricket, football,
            volleyball and badminton being prime of them.
            <br /> To keep my self in shape and sound i maintin my physique i
            watch my diet and do callisthenics and yoga,
          </p>
        </div>
      </div>
      <div className={classes.About__section}>
          <h1>Tech I Like to work with</h1>
        <div className={classes.About__images}>
          <img src="https://nodejs.org/static/images/logo.svg" alt="" />
          <img src="https://nodejs.org/static/images/logo.svg" alt="" />
          <img src="https://nodejs.org/static/images/logo.svg" alt="" />
          <img src="https://nodejs.org/static/images/logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
