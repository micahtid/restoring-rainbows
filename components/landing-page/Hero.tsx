"use client";

import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./hero.css"

const heroBlurLevels = [
  'blur-sm',
  'blur-md',
  'blur-lg',
  'blur-xl'
];

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="
      w-[100vw] 
      h-full
      relative
      flex flex-row
      max-lg:flex-col"
    >
      <h1
        className="
          text-left text-header relative
          font-extrabold dynamic-header uppercase
          
          lg:absolute lg:left-[49%] 
          lg:transform lg:-translate-x-[35%]
          lg:top-[100px] top-[40px]

          px-x py-4
          max-lg:py-3
          z-[500]

          w-[42.5vw]
          max-lg:w-full
          max-lg:max-w-[800px]
          max-lg:mt-[50px]
        "
      >
        Youth-Powered Global Climate and Art Action
      </h1>

      <div className="
        relative 
        w-[42%]
        mt-[50px]
        aspect-[14.4/9.7]
        h-full

        max-lg:mt-[150px]
        max-[570px]:mt-[100px]
        max-lg:w-[65%]
        "
      >
        <div className="
          absolute 
          z-[50]
          lg:-right-[5px] 
          lg:top-1/2 
          lg:-translate-y-1/2 
          lg:bg-gradient-to-l 
          lg:from-secondary 
          lg:from-40% 
          lg:w-[45%] 
          lg:h-[calc(100%+50px)]
        " />
        <img
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          src="/hero_left.jpeg" 
          alt="An Image" 
          className="object-cover w-full h-full max-lg:h-auto" 
        />
      </div>

      <div className="
        relative 
        w-[36.5%]
        mt-[350px]

        z-[200]

        aspect-[8.6/5.8]
        h-full

        max-[1500px]:mt-[275px]
        max-lg:mt-[0px]
        max-lg:w-[45%]
        max-lg:absolute max-lg:left-[55%] max-lg:top-[30%]
        max-[570px]:top-[40%] max-[465px]:top-[50%]
        "
      >
        <div className="
          absolute 
          z-[50]
          -top-[5px] 
          lg:left-1/2 
          lg:-translate-x-1/2 
          bg-gradient-to-b 
          from-secondary 
          from-50% 
          w-[calc(100%+40px)] 
          h-[40%] 
          max-lg:h-[15%] 
          max-md:h-[25%]
          max-lg:-translate-x-[5px]
        " />
        <img 
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
          src="/hero_middle.jpeg" 
          alt="An Image" 
          className="object-cover w-full h-full max-lg:h-auto" 
        />
      </div>

      <div className="
        relative 
        w-[24.5%] 
        mt-[50px]

        aspect-[7/7.6]
        h-full
        
        max-lg:hidden"
      >
        <div className="
          absolute 
          z-[50]
          -left-[5px] 
          top-1/2 
          -translate-y-1/2 
          bg-gradient-to-r 
          from-secondary 
          from-25% 
          w-[45%] 
          h-[calc(100%+50px)]
        " />
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
