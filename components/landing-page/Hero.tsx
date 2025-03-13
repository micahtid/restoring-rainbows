"use client";

import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./hero.css"

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

const heroBlurLevels = [
  'blur-sm',
  'blur-md',
  'blur-lg',
  'blur-xl'
]

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
          lg:top-[150px] 

          px-x py-4
          z-[500]

          w-[42.5vw]
          max-lg:w-full
          max-lg:max-w-[800px]
          max-lg:mt-[50px]
        "
      >

      {heroBlurLevels.map((blur, index) => (
        <div 
        key={index}
        className={twMerge(`
        absolute top-1/2 left-1/2 transform -translate-x-[47.5%] -translate-y-1/2
        w-[105.5%] h-[108.5%] -z-10
      bg-secondary
        `, blur)}/>
      ))}

        Youth-Powered Global Climate and Art Action
      </h1>


      <div className="
        relative 
        w-[45%]
        mt-[50px]
        aspect-[14.4/9.7]
        h-full

        max-lg:mt-[150px]
        max-[570px]:mt-[100px]
        max-lg:w-[70%]
        "
      >
        <VerticalGradient 
        xPos="-right-0" 
        width="w-[5vw] max-xl:w-[50px]"
        className="max-lg:hidden" />
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
        w-[33.5%]
        mt-[350px]

        z-[200]

        aspect-[8.6/5.8]
        h-full

        max-[1500px]:mt-[275px]
        max-lg:mt-[0px]
        max-lg:w-[40%]
        max-lg:absolute max-lg:left-[55%] max-lg:top-[30%]
        max-[570px]:top-[40%] max-[465px]:top-[50%]
        "
      >
        <HorizontalGradient 
        yPos="top-[100px]" 
        height="lg:hidden max-lg:h-[30px] max-[522px]:h-[20px]"
        className="-top-[125px] max-[1500px]:-top-[150px] max-lg:-top-[215px]" />
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
        width="w-[3vh] max-xl:w-[30px]"
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
