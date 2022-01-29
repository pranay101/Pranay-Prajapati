import React from "react";
import classes from "./Home.module.css";
import Typography from '@mui/material/Typography';

import profilePicture from "../../Public/pp.jpg";

function Home() {
  const name = "P r a n a y";
  const surname = " P r a j a p a t i";

  return (
    <div className={classes.Home}>
      <div className={classes.Home__sectionOne}>
        <img src={profilePicture} alt="" />
        <div className={classes.Home__info}>
          <div className={classes.Home__name}>
           
            <span>
              {name.split("").map((letter) => (
                <h1 variant="h1" className={classes.home__nameLetter}>{letter}</h1>
              ))}
            </span>
            <span>
              {surname.split("").map((letter) => (
                <h1 className={classes.home__nameLetter}>{letter}</h1>
              ))}
            </span>
          </div>
          <h5>A motivated and result-driven individual with strong academic credentials combined with diverse
background of extracurricular activities and interests. An ardent believer of handwork and persistence.</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
