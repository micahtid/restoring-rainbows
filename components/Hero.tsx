"use client";

import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'; // Import the Image component

interface HorizontalGradientProps {
  yPos: string;
  className?: string;
}

const HorizontalGradient: React.FC<HorizontalGradientProps> = ({ yPos, className }) => {
  const baseGradientClass = 'bg-secondary w-full absolute bottom-0';
  
  const blurLevels = [
    'blur-none',
    'blur-md',
    'blur-md',
    'blur-md',
    'blur-lg',
    'blur-lg',
    'blur-lg',
    'blur-xl',
    'blur-xl',
    'blur-xl',
    'blur-2xl',
    'blur-2xl',
    'blur-2xl',
    'blur-3xl',
    'blur-3xl',
    'blur-3xl'
  ];

  return (
    <div className={twMerge("absolute w-full h-full top-0 right-0 z-[100] max-lg:transform max-lg:translate-y-[110px]", className)}>
      {blurLevels.map((blurClass, index) => (
        <div
          key={index}
          className={twMerge(baseGradientClass, 'h-[130px] max-lg:h-[50px]', blurClass, yPos)}
        />
      ))}
    </div>
  );
};


interface VerticalGradientProps {
  xPos: string;
  className?: string;
}

const VerticalGradient: React.FC<VerticalGradientProps> = ({ xPos, className }) => {
  const baseGradientClass = 'bg-secondary h-full absolute bottom-0';
  
  const blurLevels = [
    'blur-none',
    'blur-md',
    'blur-md',
    'blur-md',
    'blur-lg',
    'blur-lg',
    'blur-lg',
    'blur-xl',
    'blur-xl',
    'blur-xl',
    'blur-2xl',
    'blur-2xl',
    'blur-2xl',
    'blur-3xl',
    'blur-3xl',
    'blur-3xl'
  ];

  return (
    <div className={twMerge("absolute w-full h-full top-0 right-0 z-[100]", className)}>
      {blurLevels.map((blurClass, index) => (
        <div
          key={index}
          className={twMerge(baseGradientClass, 'w-[80px] max-[1600px]:w-[70px]', blurClass, xPos)}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="
      w-[100vw] 
      h-full max-lg:h-[700px]
      relative
      flex flex-row"
    >
      <h1 className="
        dynamic-title text-left text-header 
        drop-shadow

        absolute left-1/2 top-[125px] transform -translate-x-1/2 
        max-lg:left-0 max-lg:-translate-x-0
        max-[514px]:top-[75px]
        max-[360px]:top-[25px]

        px-x
        z-[500] mb-52 

        w-[1200px]
        max-[1920px]:w-[1000px]
        max-[1500px]:max-w-[800px]
        max-[1500px]:w-full
        "
      >
        Championing sustainability and creativity. We turn discarded school supplies into art.
      </h1>
      <div className="
        relative 
        w-[32.5%]
        mt-[50px]

        h-[650px]
        max-[1500px]:h-min
        
        max-lg:absolute
        max-lg:left-0 max-lg:top-[225px]
        max-lg:w-[60%]"
      >
        <VerticalGradient xPos="-right-0" className="max-lg:hidden" />
        <img
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          src="/hero_left.JPG" 
          alt="An Image" 
          className="object-cover w-full h-full
          max-[1500px]:h-auto" 
        />
      </div>
      <div className="
        relative 
        w-[40%]
        mt-[200px]
        max-[1920px]:mt-[185px]
        max-[1500px]:mt-[275px] 
        max-xl:mt-[175px]

        h-[600px] 
        max-[1500px]:h-min
        z-[200]
        
        max-lg:absolute
        max-lg:w-[45%]
        max-lg:left-[50%] max-lg:top-[10px]"
      >
        <HorizontalGradient yPos="top-[100px]" className="-top-[125px] max-xl:-top-[145px] max-lg:-top-[225px] max-md:-top-[245px]" />
        <img 
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
          src="/hero_middle.jpeg" 
          alt="An Image" 
          className="object-cover w-full h-full
          max-[1500px]:h-auto" 
        />
      </div>
      <div className="
        relative 
        w-[27.5%] 
        mt-[50px]

        h-[500px]
        max-[1500px]:h-min
        
        max-lg:hidden"
      >
        <VerticalGradient xPos="left-0" className="-left-[50px] max-lg:hidden max-[1600px]:-left-[30px]" />
        <img 
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="400"
          src="/hero_right.jpeg" 
          alt="An Image"
          className="object-cover w-full h-full
          max-[1500px]:h-auto" 
        />
      </div>
    </section>
  );
};

export default Hero;
