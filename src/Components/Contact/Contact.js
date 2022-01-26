import React from "react";
import classes from "./Contact.module.css";
import CableIcon from "@mui/icons-material/Cable";
import SendIcon from "@mui/icons-material/Send";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";


const Contact = () => {
 
  
  return (
    <div className={classes.Contact}>
      <h1>
        <CableIcon /> Let's Connect
      </h1>
      <div className={classes.Contact__form}>
        <form action="">
          <div className={classes.Contact__inputs}>
            <div>
              <p className={classes.label} htmlFor="name">
                Enter your name
              </p>
              <br />
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <p className={classes.label} htmlFor="email">
                Enter your email
              </p>
              <br />
              <input type="email" name="email" id="email" />
            </div>
          </div>

          <textarea name="message" id="" cols="30" rows="8">
            Enter your message
          </textarea>
          <div className={classes.button_Normal}>
            <p>Send!!</p>
            <SendIcon className={classes.SendIcon} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
