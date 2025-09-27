"use client";

import { useState, useEffect } from "react";

import Loader from "@/components/Loader";
import Hero from "@/components/landing-page/Hero";
import AboutUs from "@/components/landing-page/AboutUs";
import Statistics from "@/components/landing-page/Statistics";
import Mission from "@/components/landing-page/Mission";
import WhatWeDo from "@/components/landing-page/WhatWeDo";
import Prism from "@/components/landing-page/Prism";
import SocialMedia from "@/components/landing-page/SocialMedia";
import RecentEvents from "@/components/landing-page/RecentEvents";
import TakeAction from "@/components/landing-page/TakeAction";
import Partners from "@/components/landing-page/Partners";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed bg-white z-[10000]
      inset-0 w-[100vw] h-[100vh]
      flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <main>
      <div className="relative
      max-[325px]:hidden">
        <div 
          style={{
            background: `
                conic-gradient(from 0deg, #e3f0ff, #d3f8e6, #e3f0ff)`
          }}
          className="absolute top-0 w-full h-[3000px] max-md:h-[3200px] -z-[100]"
        />
        <div className="pb-24" />
        <Hero />
        <AboutUs />
        <Statistics />
        <Mission />
        {/* <WhatWeDo /> */}
        <Prism />
        <SocialMedia />
        <RecentEvents />
        <TakeAction />
        <Partners />
      </div>
      <div className="hidden max-[325px]:inline-block
      z-[10000]
      absolute inset-0 bg-white h-[100vh] w-[100vw]">
        <p className="p-x">Oops! It looks like this website is not supported on smaller devices.</p>
      </div>
    </main>
  );
};

export default Home;
