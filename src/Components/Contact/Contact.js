import React, { useState } from "react";
import classes from "./Contact.module.css";
import CableIcon from "@mui/icons-material/Cable";
import SendIcon from "@mui/icons-material/Send";
import Mailto from "./Mailto";

const Contact = () => {
  const [name, setname] = useState();
  const [message, setmessage] = useState();

  return (
    <div className={classes.Contact}>
      <h1>
        <CableIcon /> Let's Connect
      </h1>
      <div className={classes.Contact__form}>
        <form action="mailto:pranayprajapati101@gmail.com">
          <div className={classes.Contact__inputs}>
            <div>
              <p className={classes.label} htmlFor="name">
                Enter your name
              </p>
              <br />
              <input
                onChange={(event) => setname(event.target.value)}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <p className={classes.label} htmlFor="email">
                Enter your email
              </p>
              <br />
              <input
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <textarea
            onChange={(event) => setmessage(event.target.value)}
            name="message"
            id=""
            cols="30"
            rows="8"
            placeholder="Enter Your Message"
          >
          </textarea>
          <Mailto
            email="pranayprajapati101@gmail.com"
            subject={name}
            body={message}
          >
            <div on className={classes.button_Normal}>
              <p>Send!!</p>
              <SendIcon className={classes.SendIcon} />
            </div>
          </Mailto>
        </form>
      </div>
    </div>
  );
};

export default Contact;
