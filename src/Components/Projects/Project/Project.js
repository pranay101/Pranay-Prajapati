import React from "react";
import classes from "./Project.module.css";

function Project({ title, description, image, visit, github }) {
  return (
    <div className={classes.project}>
      <div className={classes.Project__image}>
        <img src={image} alt="" />
      </div>
      <div className={classes.Project__info}>
        <h2>{title}</h2>

        <p>{description}</p>
        <div className={classes.Project__button}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.github}
          >
            Github
          </a>
          <a
            href={visit}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.view}
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
