import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

type Props = {};

const AboutSection = (props: Props) => {
  const about = useRef<HTMLDivElement>(null);
  const aboutImage1 = useRef<HTMLImageElement>(null);
  const aboutImage2 = useRef<HTMLImageElement>(null);
  const aboutMe = useRef<HTMLDivElement>(null);
  const moon = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const mainTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: about.current,
          start: "center center+=200",
          toggleActions: "play none none reverse",
        },
      });

      mainTimeLine
        .from(
          aboutMe.current,
          {
            y: 120,
            opacity: 0,
            duration:1,
            ease:"power1"
          },
          0
        );
      const moonElement = moon.current;

      // Define the anchor point coordinates
      const anchorX = Math.floor(window.innerWidth/1.5); // X-coordinate of the anchor point
      const anchorY = Math.floor(window.innerHeight*2); // Y-coordinate of the anchor point

      if (moonElement) {
        const moonTimeline = gsap.timeline();
        moonTimeline.to(moonElement.children, {
        //   scrollTrigger: {
        //     trigger: about.current,
        //     start: "top top",
        //     // end: "center center-=500",
        //     // scrub: 2,
        //     markers: true,
        //     pin: true,
        //     toggleActions:"play none none pause"
        //   },
          duration: 130, // Adjust the duration as per your preference
        //   repeat: -1, // Repeat the animation indefinitely
        //   ease: "slowMo",
          rotation: 60, // Number of degrees to rotate
          transformOrigin: `${anchorX}px ${anchorY}px`, // Set the anchor point
        });
      }
    }, []);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <section
      ref={about}
      id="about"
      className="w-screen h-screen about-section bg-transparent  bg-[#0d0b0b]  overflow-hidden relative"
    >
      <div className=" h-full w-full absolute z-40 flex justify-center items-center">

        <div ref={aboutMe} className="text-[#161616] overflow-hidden w-full text-center">
          <h1 className="text-7xl font-light mb-5 text-white ">
            About
          </h1>
          <div  className="overflow-hidden h-full text-white">
            <p className="px-60 text-xl font-extralight  ">
              "Hi, I am Pranay, and I am from India. I like to create cool UIs.
              I also enjoy working on the backend, but frontend development
              seems more appealing to me.
              <br />
              <br />
              Let's bring your ideas to life!"
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[40vh] w-full opacity-90 from-black from-20% to-transparent via-100% bg-gradient-to-b top-0 z-20" />
      <div className="absolute h-full bg-black opacity-50 w-full  top-0 z-10" />
      <div ref={moon} className="absolute top-[45%] left-[5%] z-10">
        <Image
          className=""
          src={"/Moonmain.png"}
          height={180}
          width={180}
          alt="moon"
        />
      </div>

      <Image
        alt="sky"
        className="absolute  h-screen w-screen"
        src={"/skyBackground.jpg"}
        height={1280}
        width={1920}
      />
    </section>
  );
};

export default AboutSection;
