import React from "react";
import classes from "./Tech.module.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Tech = ({ title, experience, grip }) => {
 
  return (
    <div className={classes.Tech}>
      <div className={classes.Tech__info}>
        <h2>{title}</h2>
        <p>Been working with for about {experience} years now</p>
      </div>
      <div className={classes.Tech__progress}>
      <CircularProgressbar value={grip} text={`${grip}%`} />
      </div>
    </div>
  );
};

export default Tech;
