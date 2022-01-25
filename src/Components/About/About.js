import React from "react";
import classes from "./About.module.css";

const About = () => {
  
  return (
    <div className={classes.About}>
      <div className={classes.About__section}>
        <h3>
          <strong>Education</strong>
        </h3>
        <div>
          <h4>Schooling</h4>
          <p>
            <small>Holy Cross Kapa Raipur Chattisgarh</small>{" "}
          </p>
        </div>
        <div>
          <h4>Graduation </h4>
          <p>
            <small>B-tech from SSIPMT Raipur.</small>
          </p>
        </div>
        <div>
          <h4>Hobbies and Other stuff</h4>
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
        <img src={"../../Public/node.jpg"} alt="" />
      </div>
    </div>
  );
};

export default About;
