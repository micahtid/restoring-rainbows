"use client";

import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

interface HorizontalGradientProps {
  yPos: string;
  height: string;
  className?: string;
}

const HorizontalGradient: React.FC<HorizontalGradientProps> = ({ yPos, height, className }) => {
  const baseGradientClass = 'bg-secondary w-full absolute bottom-0';
  
  const blurLevels = [
    'blur-md',
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
    'blur-3xl',
    'blur-4xl'
  ];

  return (
    <div className={twMerge("absolute w-full h-full top-0 right-0 z-[100] max-lg:transform max-lg:translate-y-[110px]", className)}>
      {blurLevels.map((blurClass, index) => (
        <div
          key={index}
          className={twMerge(baseGradientClass, height, blurClass, yPos)}
        />
      ))}
    </div>
  );
};


interface VerticalGradientProps {
  xPos: string;
  width: string;
  className?: string;
}

const VerticalGradient: React.FC<VerticalGradientProps> = ({ xPos, width, className }) => {
  const baseGradientClass = 'bg-secondary h-full absolute bottom-0';
  
  const blurLevels = [
    'blur-md',
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
    'blur-3xl',
    'blur-4xl'
  ];

  return (
    <div className={twMerge("absolute w-full h-full top-0 right-0 z-[100]", className)}>
      {blurLevels.map((blurClass, index) => (
        <div
          key={index}
          className={twMerge(baseGradientClass, width, blurClass, xPos)}
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
      h-full max-lg:h-[700px] max-[522px]:h-[800px]
      relative
      flex flex-row"
    >
      <h1 className="
        dynamic-title text-left text-header 
        drop-shadow

        absolute left-[50%] 
        transform -translate-x-[45%]
        top-[150px] 
        max-lg:left-0 max-lg:-translate-x-0

        px-x
        z-[500] mb-52 

        w-[1100px]
        max-[1920px]:w-[800px]
        max-[1500px]:w-[900px]
        max-lg:w-full
        "
      >
        Championing sustainability and creativity. We turn discarded school supplies into art.
      </h1>

      <div className="
        relative 
        w-[45%]
        mt-[50px]

        aspect-[14.4/9.7]
        h-full
        
        max-lg:absolute
        max-lg:left-0 max-lg:top-[300px]
        max-lg:w-[60%]
        max-[522px]:top-[395px]
        max-[355px]:top-[450px]"
      >
        <VerticalGradient 
        xPos="-right-0" 
        width="w-[150px] max-[1600px]:w-[140px]"
        className="max-lg:hidden" />
        <img
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          src="/hero_left.JPG" 
          alt="An Image" 
          className="object-cover w-full h-full max-lg:h-auto" 
        />
      </div>

      <div className="
        relative 
        w-[33.5%]
        mt-[340px]

        z-[200]

        aspect-[8.6/5.8]
        h-full
        
        max-lg:absolute
        max-lg:w-[35%]
        max-lg:left-[50%] max-lg:-top-[85px]
        max-[522px]:top-[40px] max-[355px]:top-[100px]"
      >
        <HorizontalGradient 
        yPos="top-[100px]" 
        height="h-[60px] max-lg:h-[30px] max-[522px]:h-[20px]"
        className="-top-[125px] max-[1500px]:-top-[200px] max-lg:-top-[215px]" />
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
        w-[21.5%] 
        mt-[50px]

        aspect-[7/7.6]
        h-full
        
        max-lg:hidden"
      >
        <VerticalGradient 
        xPos="left-0" 
        width="w-[35px] max-[1600px]:w-[30px]"
        className="max-lg:hidden" />
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
