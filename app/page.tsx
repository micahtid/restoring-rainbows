"use client";

import { useState, useEffect } from "react";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import WhatWeDo from "@/components/WhatWeDo";
import Prism from "@/components/Prism";
import SocialMedia from "@/components/SocialMedia";
import RecentEvents from "@/components/RecentEvents";
import TakeAction from "@/components/TakeAction";
import Partners from "@/components/Partners";

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
          className="absolute top-0 w-full h-[2500px] -z-[100]"
        />
        <div className="pb-24" />
        <Hero />
        <Statistics />
        <WhatWeDo />
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
