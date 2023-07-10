"use client";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

type Props = {
  setOpenContact: Function;
};

const RandomSection = (props: Props) => {
  const [reveal, setReveal] = useState(false);
  const [pintrestImageCount, setpintrestImageCount] = useState(0);
  const [hideCurtains, setHideCUrtains] = useState(false);

  const [inputValue, setInputValue] = useState<string>("");
  const [outputValue, setOutputValue] = useState<string>("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [progress, setProgress] = useState(100);

  const pintrestSlideShow = [
    "https://images.unsplash.com/photo-1688748628506-4b1acfc6b82b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1688574890549-820a058d81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    "https://images.unsplash.com/photo-1688619104606-4608282777bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1688565826068-f3f79f724a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
    "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80",
  ];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Process user input

    if (inputValue === "clear") {
      setOutputValue("");
      setInputValue("");
      return;
    }

    if (inputValue === "message") {
      props.setOpenContact(true);
      setInputValue("");
      return;
    }

    const output = processInput(inputValue);
    // Update output value
    setOutputValue((prevOutput) => `${prevOutput}\n\n${output}`);

    // Clear input value
    setInputValue("");

    // Focus on input box after submitting
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const processInput = (input: string): string => {
    // Custom logic to process user input and generate output
    // You can implement different responses based on the input

    const command = input.trim().toLowerCase();

    switch (command) {
      case "hello":
        return "Hello there!";
      case "time":
        return `The current time is ${new Date().toLocaleTimeString()}`;
      case "help":
        return `Available commands:\n- hello: Greet the user\n- time: Get the current time\n- help: Show available commands\n- easter egg: Discover a hidden surprise!\n- about: Learn more about this terminal\n- message: Message Me\n- weather: Get the current weather forecast\n`;

      case "easter egg":
        return "Congratulations! You found an easter egg! 🎉";
      case "about":
        return "This terminal is a React component that mimics a command-line interface (CLI) for a terminal-like experience in your web application.";
      case "contact":
        return "You can contact our support team at support@example.com or call us at +1-123-456-7890.";
      case "weather":
        return "The current weather is sunny with a temperature of 25°C.";
      case "message":
        return "Messaging";
      default:
        return `Command not found: ${input}`;
    }
  };

  const handleDownload = () => {
    // Simulating download progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timer);
          // Replace 'resume.pdf' with the actual file name of your resume
          const downloadLink = document.createElement("a");
          downloadLink.href = "/Resume Pranay Prajapati.pdf";
          downloadLink.download = "Resume_Pranay_Prajapati.pdf";
          downloadLink.click();
          return 100;
        }
        return prevProgress - 10;
      });
    }, 500);
  };
  useEffect(() => {
    if (pintrestImageCount === pintrestSlideShow.length) {
      setpintrestImageCount(0);
    }
  }, [pintrestImageCount]);

  useEffect(() => {
    const updateImage = () => {
      if (pintrestImageCount === pintrestSlideShow.length)
        setpintrestImageCount(0);
      else setpintrestImageCount((prevCount) => prevCount + 1);
    };
    const updatePintrestImage = setInterval(updateImage, 4000);
    return () => clearInterval(updatePintrestImage);
  }, []);

  useEffect(() => {
    if (reveal) {
      setTimeout(() => {
        setHideCUrtains(true);
      }, 2000);
    }
  }, [reveal]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputValue]);

  return (
    <section className="font-poppins h-screen w-screen bg-black relative">
      <button
        className={`${
          reveal ? "hidden" : "visible"
        } absolute z-[100] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-800 px-24 py-10 border-2 border-gray-900 rounded-2xl font-poppins font-semibold text-2xl`}
        onClick={() => setReveal((prec) => !prec)}
      >
        Reveal Random Section
      </button>
      <div
        className={`grid grid-cols-2 grid-rows-1 absolute z-50 h-full w-full ease-out duration-500 ${
          hideCurtains ? "hidden" : ""
        }`}
      >
        <div
          className={`bg-gray-300 h-full w-[50vw] top-0 left-0 ${
            reveal ? "-translate-x-[100%] " : "translate-x-0 "
          } duration-500 ease-out ${
            hideCurtains ? "hidden" : ""
          }  border-yellow-600 border-r-4`}
        >
          <img
            className=" h-full object-cover object-left"
            src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div
          className={`bg-gray-300 h-full w-[50vw] top-0 right-0 ${
            reveal ? "translate-x-[100%] " : "translate-x-0 "
          } duration-500 ease-out ${
            hideCurtains ? "hidden" : ""
          }  border-yellow-600 border-l-4`}
        >
          <img
            className=" h-full object-cover object-right"
            src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-4 grid-rows-4 justify-center items-end h-full bg-gray-200 text-white gap-2 p-2 ">
        <div className="h-full w-full bg-black row-span-3 overflow-hidden z-40 group">
          <div className="relative slideshow">
            <a
              href="https://in.pinterest.com/pranay267/moodboard/"
              target="blank"
              className={`absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-60 z-50 outline-none border-none`}
            >
              <svg
                className="fill-white text-7xl"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 496 512"
              >
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
              </svg>
              <span className="mt-5 font-poppins tracking-wider text-sm">
                Visit Pinterest
              </span>
            </a>
            {pintrestSlideShow.map((imageUrl, index) => (
              <div
                key={index}
                className={`box-container h-full ${
                  index === pintrestImageCount ? "active" : ""
                }`}
              >
                <img src={imageUrl} alt="Pinterest" className="box h-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="group h-full w-full bg-[#141414] overflow-hidden">
          <div className="group-hover:hidden visible flex justify-center items-center h-full">
            <h2 className="text-white text-3xl ">Languages I know</h2>
          </div>
          <div className="flex w-full h-full justify-center items-center bg-gray-100 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out z-20">
            <img
              className="h-full w-[50%]  object-cover object-center "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/IPA_Unicode_0x0061.svg/180px-IPA_Unicode_0x0061.svg.png"
              alt=""
            />
            <img
              className="h-full w-[50%] scale-75 mt-4 object-cover object-center "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Devanagari_aa.svg/180px-Devanagari_aa.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className="h-full w-full bg-gray-600 col-span-2 ">
          <div className="flex w-full h-full justify-between items-center bg-[#282828] overflow-hidden p-2">
            <iframe
              className="h-full w-full"
              src="https://open.spotify.com/embed/playlist/7Glc42J221d5rDxZuhxJ9U?utm_source=generator&theme=0"
              height={200}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          ""
        </div>
        <div className="h-full w-full bg-black col-span-2 row-span-2 p-3">
          <div className="terminal bg-black text-green-400 p-6 h-full overflow-y-auto">
            <div className="terminal-header mb-4">
              <span className="terminal-dot bg-red-500"></span>
              <span className="terminal-dot bg-yellow-400"></span>
              <span className="terminal-dot bg-green-500"></span>
            </div>
            <div className="terminal-output" ref={terminalRef}>
              <pre>Type Help.</pre>
              <pre className="m-0">{outputValue}</pre>
            </div>
            <form
              onSubmit={handleFormSubmit}
              className="terminal-input mt-4 flex"
            >
              <span className="terminal-user">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="bg-transparent text-green-300 outline-none border-none focus:ring-0 flex-grow terminal-input-cursor"
                placeholder=""
              />
            </form>
          </div>
        </div>
        <div className="h-full w-full bg-black row-span-3">
          <div className="bg-gray-800 h-full w-full p-5">
            <h1 className="text-2xl text-center">Achievements So Far</h1>
            <ul className="text-sm gap-3 px-5 py-8 flex flex-col justify-start">
              <li className="list-disc font-light">
                <strong>All India Rank 575</strong>, Innovate India Coding
                Competition Organised by coding Ninja.
              </li>
              <li className="list-disc">
                CGMahilaAyog Built website for tackling crimes and violence
                against women for the Government of Chhattisgarh.
              </li>
              <li className="list-disc font-light">
                Opensource, Google Weather Tools Contributed to Official Google
                Weather Tools repository
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-full bg-gray-950 col-span-2 font-light text-xs p-5 overflow-hidden text-gray-200 flex items-center justify-center">
          <span className="opacity-30 select-none">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit quos eveniet iste temporibus accusamus vel blanditiis
            incidunt pariatur ipsam modi laboriosam aliquid qui officia cumque
            numquam earum, reiciendis, hic nostrum. Impedit quasi atque dolorum
            voluptatum, fugiat repudiandae tenetur officiis voluptates maxime?
            Tenetur ratione quod saepe hic cupiditate, quaerat necessitatibus
            asperiores architecto, odio sunt dolore voluptate eos nobis omnis
            soluta? Fuga. Blanditiis dignissimos corporis reiciendis dolorum,
            ipsum necessitatibus deleniti rem aspernatur odio hic beatae tempora
            atque Impedit quasi atque dolorum voluptatum, fugiat repudiandae
            tenetur officiis voluptates maxime? Tenetur ratione quod saepe hic
            cupiditate, quaerat necessitatibus asperiores architecto, odio sunt
            dolore voluptate eos nobis omnis soluta? Fuga. Blanditiis
            dignissimos corporis reiciendis dolorum, ipsum necessitatibus
            deleniti rem aspernatur odio hic beatae tempora atque
          </span>
        </div>
        <div className="h-full w-full bg-black overflow-hidden">
          <div className="relative h-full w-full">
            <button
              onClick={handleDownload}
              hidden={progress !== 100}
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 bg-gray-900 hover:bg-black text-white font-bold py-2 px-4 rounded h-full w-full"
            >
              Download Resume
            </button>
            <div className="overflow-hidden bg-black h-full w-full ">
              <div
                className="bg-gray-900 h-full"
                style={{
                  height: `${progress}%`,

                  transition: "height 0.5s",
                  // transform: 'rotateX(180deg)',
                  transformOrigin: "top",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomSection;
