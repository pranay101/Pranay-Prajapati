"use client";

import emailjs from "emailjs-com";
import { FormEvent, useRef, useState } from "react";

type Props = {};

const ContactSection = (props: { open: Boolean; setOpen: Function }) => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");

  const [messageSent, setMessageSent] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
      
      e.preventDefault();
      console.log("sent");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', // Provide a default value
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // Provide a default value
        formRef.current || "",
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        if (response.status === 200) {
          setMessageSent(true);
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setTimeout(() => {
            props.setOpen(false);
            setMessageSent(false)
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    // Reset the form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <section
        className={`fixed border-r-2 border-gray-200 w-[30vw] h-screen bg-gray-100 ${
          props.open ? "translate-x-[0]" : "-translate-x-[100%]"
        } duration-500 ease-out z-[100] shadow-lg text-center text-[#141414] flex flex-col items-centerj justify-center px-10`}
      >
        <span className="px-5 leading-5">
          <h2 className="text-5xl pb-6">Message</h2>
          <span className="text-sm text-light text-gray-400 w-[90%] tracking-wide">
            {
                messageSent? 'Your Message was sent!!' : " Tell us about the things you liked about the webite, and things you wish to see improved. Or anything you have in your mind."
            }
           
          </span>
        </span>
        {messageSent ? (
          <div className="flex flex-col p-5 text-8xl fill-gray-700 ">

<svg className="animate-pulse" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
          </div>
        ) : (
          <>
            <form
              ref={formRef}
              onSubmit={sendMessageHandler}
              className="flex flex-col p-5"
              action=""
            >
              <input
                required
                name="name"
                onChange={(e) => setname(e.target.value)}
                className="py-2 px-5 border border-gray-200 rounded-md focus:outline-none focus:py-3 tracking-wide mb-3 placeholder:opacity-80"
                placeholder="Your Name"
                type="text"
              />

              <input
                required
                name="email"
                onChange={(e) => setemail(e.target.value)}
                className="py-2 px-5 border border-gray-200 rounded-md focus:outline-none focus:py-3 tracking-wide mb-3 placeholder:opacity-80"
                placeholder="Your Email"
                type="email"
                id=""
              />
              <textarea
                required
                name="message"
                onChange={(e) => setmessage(e.target.value)}
                className="py-2 px-5 max-h-36 h-24 focus:outline-none focus:py-3 tracking-wide mb-3 rounded-md border border-gray-200 placeholder:opacity-80"
                id=""
                placeholder="Message"
              ></textarea>
           
            <div className="flex justify-between gap-4 mt-4 px-10">
              <button
                className="border-2 border-red-900 text-red-900 w-full py-1.5 rounded-md font-medium hover:bg-red-50"
                onClick={() => props.setOpen(false)}
              >
                close
              </button>
              <button
                // onClick={() => formRef.current?.submit()}
                type="submit"
                className="w-full bg-[#141414] text-white rounded-md flex items-center justify-center gap-2 group"
              >
                Send
                <svg
                  className="fill-white text-xs group-hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                </svg>
              </button>
            </div>
            </form>
          </>
        )}
      </section>
      <div
        onClick={() => props.setOpen(false)}
        className={`fixed h-screen w-screen bg-black z-50 opacity-50  ${
          props.open ? "visible" : "hidden"
        } duration-500 ease-out`}
      />
    </>
  );
};

export default ContactSection;
