import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

type Props = {};

function ExperienceSection({}: Props) {
  const main = useRef<HTMLDivElement>(null);
  const experienceSection = useRef<HTMLDivElement>(null);
  const education = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!experienceSection){
        return
    }
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Set up the container and content elements
    const container = experienceSection?.current;
    const content = main.current || {offsetWidth:0};

    // Calculate the total width of the content
    const contentWidth = content.offsetWidth - window.innerWidth;

    // Set up the GSAP animations
    gsap.from(".experience-heading", {
      scrollTrigger: {
        trigger: experienceSection.current,
        start: "top center+=200",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      stagger: {
        each: 0.05,
        amount: 0.8,
      },
      delay: 0.5,
      duration: 0.6,
    });

    gsap.to(content, {
      x: -contentWidth,
    //   delay:1.2,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${contentWidth}`,
        scrub: true,
        markers: true,
        pin: true,
        anticipatePin:1
        
      },
    }).delay(2);
  }, []);

  return (
    <main
      id="experience"
      ref={experienceSection}
      className="h-screen w-full bg-gray-100 relative font-poppins"
    >
      <div ref={main} className="flex justify-center items-center w-fit h-full">
        <section className="h-screen min-h-screen min-w-[100vw] text-black flex flex-col justify-center px-60 title capitalize">
            <span className="self-start overflow-hidden w-full">
              <h1 className="text-8xl font-medium experience-heading">
                Education
              </h1>
            </span>
            <span className="self-center overflow-hidden">
              <h1 className="text-8xl font-medium experience-heading">and</h1>
            </span>
            <span className="self-end overflow-hidden">
              <h1 className="text-8xl font-medium experience-heading">
                Experience
              </h1>
            </span>
        </section>
        <section
            id="experience"
            className="h-screen min-w-[100vw] relative grid grid-cols-2 grid-rows-1 place-content-center justify-center items-center  snap-center font-poppins z-0">
            <div className="w-full h-full  flex items-center justify-center overflow-hidden ">
                <div className=" h-full w-full flex flex-col text-[#141414]  justify-start items-start mx-auto">
                <h1 className="font-light py-8 pl-20  text-[#141414] text-5xl">Education</h1>

                <div ref={education} className="grid grid-cols-3 grid-rows-1 h-[80vh] w-[80%] justify-center mx-auto gap-2 p-5">
                    <div className="grid grid-cols-1 grid-rows-3 gap-2">
                        <div className="h-full w-full border-r-4 border-dashed border-gray-400 flex justify-between items-end flex-col pr-1">
                            <div className="flex items-center gap-2">
                                <span>Mar, 2003</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Apr, 2017</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                        </div>
                        <div className="h-full w-full border-r-4 border-dashed border-gray-400 flex justify-between items-end flex-col pr-1">
                            <div className="flex items-center gap-2">
                                <span>JuN, 2017</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Jun, 2019</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                        </div>
                        <div className="h-full w-full border-r-4 border-dashed border-gray-400 flex justify-between items-end flex-col pr-1">
                            <div className="flex items-center gap-2">
                                <span>Jul, 2019</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Jul, 2023</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                        </div>
                       
                    </div>
                    <div className="grid col-span-2 grid-cols-1 grid-rows-3 gap-2 ">
                        <div className="h-full w-full flex flex-col justify-center bg-gray-100 p-5 drop-shadow-sm border border-gray-200 hover:bg-gray-200">
                            <h2 className="font-medium text-2xl text-gray-800">Holy Cross Kapa</h2>
                            <span className="ml-2 text-sm text-gray-500">Schooling</span>
                            <div className="flex items-center gap-2  ml-2 font-normal text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                Raipur, Chhattisgarh</div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-center bg-gray-100 p-5 drop-shadow-sm border border-gray-200 hover:bg-gray-200">
                            <h2 className="font-medium text-2xl text-gray-800">Holy Cross Kapa</h2>
                            <span className="ml-2 text-sm text-gray-500">High Schooling</span>
                            <div className="flex items-center gap-2  ml-2 font-normal text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                Raipur, Chhattisgarh</div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-center bg-gray-100 p-5 drop-shadow-sm border border-gray-200 hover:bg-gray-200">
                            <h2 className="font-medium text-2xl text-gray-800 truncate">Shri Shankaracharya Institute of Professional Management and Technology</h2>
                            <span className="ml-2 text-sm text-gray-500">B-tech in Computer Science</span>
                            <div className="flex items-center gap-2  ml-2 font-normal text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                Raipur, Chhattisgarh</div>
                        </div>
                       
                    </div>
                </div>
                </div>
            </div>
            <div  className="w-full h-full flex items-center justify-center overflow-hidden border-l ">
                <div className=" h-full w-full flex flex-col text-[#141414]  justify-start items-start mx-auto">
                <h1 className="font-light py-8 pl-20  text-[#141414] text-5xl">Experience</h1>

                <div ref={experience} className="grid grid-cols-3 grid-rows-1 h-[80vh] w-[80%] justify-center mx-auto gap-2 p-5">
                    <div className="grid grid-cols-1 grid-rows-4 gap-2">
                        <div className="h-full w-full border-r-4 border-dashed border-gray-400 flex justify-between items-end flex-col pr-1">
                            <div className="flex items-center gap-2">
                                <span>Oct, 2021</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Dec, 2021</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                        </div>
                        <div className="h-full w-full border-r-4 border-dashed border-gray-400 flex justify-between items-end flex-col pr-1">
                            <div className="flex items-center gap-2">
                                <span>Jan, 2022</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Jun, 2022</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                        </div>
                        <div className="h-full w-full border-r-4 border-dashed border-gray-400 flex justify-between items-end flex-col pr-1">
                            <div className="flex items-center gap-2">
                                <span>Jun, 2022</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Aug, 2022</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                        </div>
                        <div className="h-full w-full border-r-4 border-dashed border-gray-400 flex justify-between items-end flex-col pr-1">
                            <div className="flex items-center gap-2">
                                <span>Sept, 2022</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Present</span>
                                <div className="h-1 w-5 bg-gray-900" />
                            </div>
                        </div>
                       
                    </div>
                    <div className="grid col-span-2 grid-cols-1 grid-rows-4 gap-2 ">
                        <div className="h-full w-full flex flex-col justify-center bg-gray-100 p-5 drop-shadow-sm border border-gray-200 hover:bg-gray-200">
                            <h2 className="flex justify-between items-center font-medium text-2xl text-gray-800">Beasenest<span className="ml text-xs text-gray-500 font-medium">SDE Intern</span></h2>
                            
                            <span className="ml text-xs text-gray-500 py-2">I was Responsible for developing the entire UI for an E-commerce website. That sells Daily need items</span>
                            <div className="flex items-center gap-2 font-normal text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                Raipur, Chhattisgarh</div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-center bg-gray-100 p-5 drop-shadow-sm border border-gray-200 hover:bg-gray-200">
                            <h2 className="flex justify-between items-center font-medium text-2xl text-gray-800">Pylon Tech<span className="ml text-xs text-gray-500 font-medium">Frontend Developer</span></h2>
                            
                            <span className="ml text-xs text-gray-500 py-2">Developed website for the government of chhattisgarh, which helped them tackle crimes and voilence against women</span>
                            <div className="flex items-center gap-2 font-normal text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                Remote</div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-center bg-gray-100 p-5 drop-shadow-sm border border-gray-200 hover:bg-gray-200">
                            <h2 className="flex justify-between items-center font-medium text-2xl text-gray-800">Klimb.io<span className="ml text-xs text-gray-500 font-medium">SDE Intern</span></h2>
                            
                            <span className="ml text-xs text-gray-500 py-2">Worked on cloud-based recruitment management solution designed to help businesses manage hiring processes</span>
                            <div className="flex items-center gap-2 font-normal text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                Raipur, Chhattisgarh</div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-center bg-gray-100 p-5 drop-shadow-sm border border-gray-200 hover:bg-gray-200">
                            <h2 className="flex justify-between items-center font-medium text-2xl text-gray-800">Capitsign<span className="ml text-xs text-gray-500 font-medium">SDE</span></h2>
                            
                            <span className="ml text-xs text-gray-500 py-2">Developed options analytics tools that helps you analyse market trends and visualise your strategies for a simple and intuitive options trading experience.s</span>
                            <div className="flex items-center gap-2 font-normal text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                Delhi NCR</div>
                        </div>
                       
                       
                    </div>
                </div>
                </div>
            </div>

        </section>
      </div>
    </main>
  );
}

export default ExperienceSection;
