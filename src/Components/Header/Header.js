import React, { useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function Header() {

  const [showNavItems, setshowNavItems] = useState(false);
  const [openSideDrawer, setopenSideDrawer] = useState([classes.headerMobile, classes.close]);
  let stylesHome,stylesAbout,stylesProject,stylesContact = []

  const [activeNav, setactiveNav] = useState("home");
  const navigate = useNavigate();

  const hamBurgerCloseHandler = () => {
    setshowNavItems((prevState) => !prevState);
    setopenSideDrawer([classes.headerMobile, classes.close]);
  };
  const hamBurgerOpenHandler = () => {
    setopenSideDrawer([classes.headerMobile, classes.open]);
    setshowNavItems((prevState) => !prevState);
  };

  if (activeNav === "home") {
    stylesHome=[classes.active]
  }
  else if (activeNav === "about") {
    stylesAbout=[classes.active]
  }
  else if (activeNav === "projects") {
    stylesProject=[classes.active]
  }
  else if (activeNav === "contact") {
    stylesContact=[classes.active]
  }
  

  return (
    <>
      <div className={classes.header}>
        <h3
          onClick={() => {
            setactiveNav("home")
            navigate("/");
          }}
          className={stylesHome}
        >
          Home
        </h3>
        <h3
        className={stylesAbout}
          onClick={() => {
            setactiveNav("about")
            navigate("/about");
          }}
        >
          About
        </h3>
        <h3
        className={stylesProject}
          onClick={() => {
            setactiveNav("projects")
            navigate("/projects");
          }}
        >
          Projects
        </h3>
        <h3
        className={stylesContact}
          onClick={() => {
            setactiveNav("contact")
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
          {showNavItems ? (
            <div>
              <h3
              className={stylesHome}
                onClick={() => {
                  hamBurgerCloseHandler();
                  navigate("/");
                }}
                className={classes.activeMobile}
              >
                Home
              </h3>
              <h3
              className={stylesAbout}
                onClick={() => {
                  hamBurgerCloseHandler();
                  navigate("/about");
                }}
              >
                About
              </h3>
              <h3
              className={stylesProject}
                onClick={() => {
                  hamBurgerCloseHandler();
                  navigate("/projects");
                }}
              >
                Projects
              </h3>
              <h3
              className={stylesContact}
                onClick={() => {
                  hamBurgerCloseHandler();
                  navigate("/contact");
                }}
              >
                Contact
              </h3>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Header;
