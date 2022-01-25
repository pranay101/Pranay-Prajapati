import React, { useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [showNavItems, setshowNavItems] = useState(false);
  const hamBurgerClickedHandler = () => {
    setshowNavItems((prevState) => !prevState);
  };
  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.active}>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
      <div>
        <div>
          <div>
            {showNavItems ? (
              <CloseIcon
                onClick={hamBurgerClickedHandler}
                className={classes.CloseIcon}
              />
            ) : (
              <MenuIcon
                onClick={hamBurgerClickedHandler}
                className={classes.HamburgerIcon}
              />
            )}
          </div>

          {showNavItems ? (
            <div className={classes.headerMobile}>
              <h3 className={classes.activeMobile}>Home</h3>
              <h3>About</h3>
              <h3>Projects</h3>
              <h3>Contact</h3>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Header;
