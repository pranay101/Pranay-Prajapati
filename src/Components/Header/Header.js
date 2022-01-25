import React, { useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [showNavItems, setshowNavItems] = useState(false);
  const [openSideDrawer, setopenSideDrawer] = useState([classes.headerMobile]);

  const hamBurgerCloseHandler = () => {
    setshowNavItems((prevState) => !prevState);
    setopenSideDrawer([classes.headerMobile,classes.close])
  };
  const hamBurgerOpenHandler = () => {
    setshowNavItems((prevState) => !prevState);
    setopenSideDrawer([classes.headerMobile,classes.open])
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
        <div className={classes.displayOnlyOnMobile}>
          {showNavItems ? (
            <CloseIcon
              onClick={hamBurgerCloseHandler}
              className={classes.CloseIcon}
            />
          ) : (
            <MenuIcon
              onClick={hamBurgerOpenHandler}
              className={classes.HamburgerIcon}
            />
          )}
        </div>
        <div className={openSideDrawer.join(" ")}>
          <h3 className={classes.activeMobile}>Home</h3>
          <h3>About</h3>
          <h3>Projects</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </>
  );
}

export default Header;
