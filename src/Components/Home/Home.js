import React from "react";
import classes from "./Home.module.css";

import profilePicture from "../../Public/pp.jpg";

function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.Home__sectionOne}>
        <img src={profilePicture} alt="" />
        <div>
          <h1>Pranay Prajapati</h1>

          <h4>Hey there i am web developer from india</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
