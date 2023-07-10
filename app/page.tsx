"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import RandomSection from "@/components/RandomSection";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [openContact, setOpenContact] = useState(false);

  // useEffect(() => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: "smooth"
  //     })
  // }, [])

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      {!openContact ? (
        <div
          title="Send Message"
          className="fixed text-3xl text-white z-50 bottom-5 left-5 "
        >
          <svg
            onClick={() => setOpenContact(true)}
            className="fill-gray-600 hover:fill-gray-300 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
          </svg>
        </div>
      ) : null}

      <ContactSection open={openContact} setOpen={setOpenContact} />
      <main className="min-h-screen bg-white relative overflow-hidden">
        <Navbar />

        <HomeSection />
        <div className="!snap-center">
          <AboutSection />
        </div>
        <ExperienceSection />

        <ProjectSection />

        <RandomSection setOpenContact={setOpenContact} />
      </main>
    </>
  );
}
