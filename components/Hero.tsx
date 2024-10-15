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

  return (
    <div className={twMerge("absolute w-full h-full top-0 right-0 z-[100] max-lg:transform max-lg:translate-y-[110px]", className)}>
      <div className={twMerge(baseGradientClass, 'h-[100px] max-lg:h-[50px] opacity-90', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[130px] max-lg:h-[60px] blur-sm opacity-70', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[160px] max-lg:h-[70px] blur-md opacity-80', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[190px] max-lg:h-[80px] blur-lg opacity-70', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[210px] max-lg:h-[90px] blur-xl opacity-60', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[240px] max-lg:h-[100px] blur-2xl opacity-50', yPos)} />
    </div>
  );
};

interface VerticalGradientProps {
  xPos: string;
  className?: string;
}

const VerticalGradient: React.FC<VerticalGradientProps> = ({ xPos, className }) => {
  const baseGradientClass = 'bg-secondary h-full absolute bottom-0';

  return (
    <div className={twMerge("absolute w-full h-full top-0 right-0 z-[100]", className)}>
      <div className={twMerge(baseGradientClass, 'w-[100px] max-[1600px]:w-[50px] opacity-90', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[130px] max-[1600px]:w-[70px] blur-sm opacity-70', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[160px] max-[1600px]:w-[90px] blur-md opacity-80', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[190px] max-[1600px]:w-[110px] blur-lg opacity-70', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[210px] max-[1600px]:w-[130px] blur-xl opacity-60', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[240px] max-[1600px]:w-[150px] blur-2xl opacity-50', xPos)} />
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-[100vw] h-[110vh] relative
    max-lg:h-[800px] max-md:h-[700px] max-sm:h-[600px] max-[430px]:h-[550px] max-[360px]:h-[500px]
    mb-28 max-[1920px]:-mb-4 max-[1568px]:-mb-12 max-[1360px]:-mb-32 max-[1278px]:-mb-64 max-lg:mb-24">
        <h3
          className="
            dynamic-title text-center text-header drop-shadow mb-52
            max-w-[900px] max-md:min-w-[100%] px-x z-[500]
            absolute left-1/2 top-[150px] transform -translate-x-1/2
            max-lg:left-0 max-lg:-translate-x-0 max-lg:text-left 
            max-lg:top-[125px]
            max-[1325px]:top-[110px]
            fade-in-animation"
        >
          Spreading Art and Saving the Planet
        </h3>
        <div className="absolute w-[35%] left-0 top-[100px]
        max-lg:top-[340px] max-lg:w-[60%] max-[346px]:top-[400px]">
          <VerticalGradient xPos="-right-0" className="max-lg:hidden" />
          <Image
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="300"
            src="/presentation.png" 
            alt="An Image" 
            layout="responsive"
            width={700} 
            height={400}
            className="w-full h-auto object-cover" />
        </div>
        <div className="absolute w-[37.5%] left-[35%] bottom-[15px] z-[200]
        max-[1920px]:top-[300px] max-[1711px]:top-[350px]
        max-lg:left-[50%] max-lg:w-[45%] 
        max-[1278px]:top-[280px] max-[1116px]:top-[320px] max-lg:top-[290px] max-[346px]:top-[350px]">
          <HorizontalGradient yPos="top-0" className="-top-[100px] max-lg:-top-[125px]" />
          <Image 
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
            src="/zoom_meeting.png" 
            alt="An Image" 
            layout="responsive"
            width={700} 
            height={400} 
            className="w-full h-auto object-cover" />
        </div>
        <div className="absolute w-[27.5%] left-[72.5%] top-[100px]
        max-lg:hidden">
          <VerticalGradient xPos="left-0" className="-left-[100px] max-lg:hidden max-[1600px]:-left-[50px]" />
          <Image 
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="400"
            src="/splash_five.jpg" 
            alt="An Image"
            layout="responsive" 
            width={700} 
            height={400} 
            className="w-full h-auto object-cover" />
        </div>
    </section>
  );
};

export default Hero;
