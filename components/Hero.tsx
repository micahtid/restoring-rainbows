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
      w-[100vw] h-[110vh] relative
      mb-28 
      max-lg:h-[800px] 
      max-md:h-[700px] 
      max-sm:h-[600px] 
      max-[430px]:h-[550px] 
      max-[360px]:h-[500px] 
      max-[1920px]:-mb-4 
      max-[1568px]:-mb-12 
      max-[1360px]:-mb-32 
      max-[1278px]:-mb-64 
      max-lg:mb-24"
    >
      <h1 className="
        dynamic-title text-left text-black drop-shadow mb-52 
        absolute left-1/2 top-[125px] transform -translate-x-1/2 
        z-[500] 
        max-w-[1200px] 
        max-md:min-w-[100%] 
        px-x 

        max-[2300px]:ml-[150px]

        hero-fade-in-animation

        max-lg:left-0 
        max-lg:-translate-x-0 
        max-lg:text-left 
        max-lg:top-[125px] 
        max-[1278px]:top-[120px]"
      >
        Championing sustainability and creativity. We turn discarded school supplies into art.
      </h1>
      <div className="
        absolute 
        w-[35%]
        h-[800px] 
        left-0 
        top-[100px] 
        max-lg:top-[340px] 
        max-lg:w-[60%] 
        max-[346px]:top-[400px]"
      >
        <VerticalGradient xPos="-right-0" className="max-lg:hidden" />
        <Image
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          src="/presentation.png" 
          alt="An Image" 
          fill
          className="object-cover" 
        />
      </div>
      <div className="
        absolute 
        w-[37.5%] 
        h-[600px] 
        left-[35%] 
        bottom-[100px] 
        z-[200] 
        max-[1920px]:top-[270px] 
        max-lg:left-[50%] 
        max-lg:w-[45%] 
        max-[1475px]:top-[300px] 
        max-[1278px]:top-[250px] 
        max-lg:top-[290px] 
        max-[346px]:top-[350px] 
        max-[1035px]:top-[300px]"
      >
        <HorizontalGradient yPos="top-[100px]" className="-top-[125px] max-[1265px]:-top-[145px] max-lg:-top-[225px] max-md:-top-[245px]" />
        <Image 
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
          src="/zoom_meeting.png" 
          alt="An Image" 
          fill
          className="object-cover" 
        />
      </div>
      <div className="
        absolute 
        w-[27.5%] 
        h-[600px] 
        left-[72.5%] 
        top-[100px] 
        max-lg:hidden"
      >
        <VerticalGradient xPos="left-0" className="-left-[50px] max-lg:hidden max-[1600px]:-left-[30px]" />
        <Image 
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="400"
          src="/splash_five.jpg" 
          alt="An Image"
          fill
          className="object-cover" 
        />
      </div>
    </section>
  );
};

export default Hero;
