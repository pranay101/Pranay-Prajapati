import React from "react";
import classes from "./Project.module.css";

function Project({ title, description, image }) {
  return (
    <div className={classes.project}>
      <div className={classes.Project__image}>
        <img src={image} alt="" />
      </div>
      <div className={classes.Project__info}>
        <h2>{title}</h2>

        <p>{description}</p>
        <div className={classes.Project__button}>
          <button className={classes.github}>Github</button>
          <button className={classes.view}>View</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
