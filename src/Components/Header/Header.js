import React from 'react';
import classes from "./Header.module.css"

function Header() {
  return <div className={classes.header}>
      <h3 className={classes.active}>Home</h3>
      <h3>About</h3>
      <h3>Projects</h3>
      <h3>Contact</h3>
  </div>;
}

export default Header;
