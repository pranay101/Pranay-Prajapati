import React, { useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showNavItems, setshowNavItems] = useState(false);
  const [openSideDrawer, setopenSideDrawer] = useState([]);
  const navigate = useNavigate();

  const hamBurgerCloseHandler = () => {
    setshowNavItems((prevState) => !prevState);
    setopenSideDrawer([classes.headerMobile, classes.close]);
  };
  const hamBurgerOpenHandler = () => {
    setshowNavItems((prevState) => !prevState);
    setopenSideDrawer([classes.headerMobile, classes.open]);
  };

  const setActiveClassto = (title) => {};

  return (
    <>
      <div className={classes.header}>
        <h3
          onClick={() => {
            navigate("/");
          }}
          className={classes.active}
        >
          Home
        </h3>
        <h3
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </h3>
        <h3
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </h3>
        <h3
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </h3>
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
              {showNavItems ? (<div>
            <h3
              onClick={() => {
                hamBurgerCloseHandler();
                navigate("/");
              }}
              className={classes.activeMobile}
            >
              Home
            </h3>
            <h3
              onClick={() => {
                hamBurgerCloseHandler();
                navigate("/about");
              }}
            >
              About
            </h3>
            <h3
              onClick={() => {
                hamBurgerCloseHandler();
                navigate("/projects");
              }}
            >
              Projects
            </h3>
            <h3
              onClick={() => {
                hamBurgerCloseHandler();
                navigate("/contact");
              }}
            >
              Contact
            </h3> </div>
             ) : null}
          </div>
       
      </div>
    </>
  );
}

export default Header;
