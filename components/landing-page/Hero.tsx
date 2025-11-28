"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hero.css";

// ISSUE: hero.css is in play!

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative w-full flex flex-row h-full max-lg:flex-col">
      {/* Hero Title */}
      <h1 className="
        relative w-[42.5vw] px-x py-4 text-left text-header dynamic-header font-extrabold uppercase z-[500]
        top-[40px]
        max-lg:w-full max-lg:max-w-[800px] max-lg:py-3 max-lg:mt-[50px]
        lg:absolute lg:left-[48%] lg:top-[100px] lg:transform lg:-translate-x-[35%]
      ">
        Youth-Powered <span className="lg:mr-4">Global</span> Climate and <span className="lg:mx-2">Art</span> Action
      </h1>

      {/* First Image (Left) */}
      <div className="
        relative w-[36%] h-full mt-[50px] aspect-[14.4/9.7]
        max-lg:w-[62%] max-lg:mt-[150px]
        max-[570px]:mt-[100px]
      ">
        <div className="
          absolute z-[50]
          lg:-right-[5px] lg:top-1/2 lg:w-[40%] lg:h-[calc(100%+50px)]
          lg:bg-gradient-to-l lg:from-secondary lg:from-30% lg:-translate-y-1/2
        " />
        {/* ISSUE: Change to <Image /> */}
        <img
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          src="/hero_left.jpeg"
          alt="An Image"
          className="object-cover w-full h-full max-lg:h-auto"
        />
      </div>

      {/* Second Image (Middle) */}
      <div className="
        relative w-[36%] h-full mt-[380px] aspect-[8.6/5.8] z-[200]
        max-[2100px]:mt-[340px]
        max-[1700px]:mt-[325px]
        max-[1500px]:mt-[300px]
        max-[1300px]:mt-[280px]
        max-lg:absolute max-lg:left-[55%] max-lg:top-[30%] max-lg:w-[42%] max-lg:mt-[0px]
        max-[650px]:top-[40%] max-[480px]:top-[48%] max-[420px]:top-[55%] max-[400px]:top-[56.5%]
      ">
        <div className="
          absolute z-[50] -top-[5px]
          lg:left-1/2 lg:-translate-x-1/2
          bg-gradient-to-b from-secondary from-45%
          w-[calc(100%+40px)] h-[40%]
          max-lg:h-[20%] max-md:h-[15%] max-sm:h-[10%]
          max-lg:-translate-x-[5px]
        " />
        {/* ISSUE: Change to <Image /> */}
        <img
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
          src="/hero_middle.jpeg"
          alt="An Image"
          className="object-cover w-full h-full max-lg:h-auto"
        />
      </div>

      {/* Third Image (Right) */}
      <div className="
        relative w-[28%] h-full mt-[50px] aspect-[7/7.6]
        max-lg:hidden
      ">
        <div className="
          absolute z-[50] -left-[5px]
          top-1/2 -translate-y-1/2
          bg-gradient-to-r from-secondary from-[32.5%]
          max-[1000px]:from-35%
          w-[45%] h-[calc(100%+50px)]
        " />
        {/* ISSUE: Change to <Image /> */}
        <img
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="400"
          src="/hero_right.jpeg"
          alt="An Image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
