import { twMerge } from "tailwind-merge";

interface HorizontalGradientProps {
  yPos: string;
  className?: string;
}

const HorizontalGradient: React.FC<HorizontalGradientProps> = ({ yPos, className }) => {
  const baseGradientClass = 'bg-secondary w-full absolute bottom-0';

  return (
    <div className={twMerge("absolute w-full h-full top-0 right-0 z-[100]", className)}>
      <div className={twMerge(baseGradientClass, 'h-[100px] opacity-90', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[130px] blur-sm opacity-70', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[160px] blur-md opacity-80', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[190px] blur-lg opacity-70', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[210px] blur-xl opacity-60', yPos)} />
      <div className={twMerge(baseGradientClass, 'h-[240px] blur-2xl opacity-50', yPos)} />
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
      <div className={twMerge(baseGradientClass, 'w-[100px] opacity-90', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[130px] blur-sm opacity-70', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[160px] blur-md opacity-80', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[190px] blur-lg opacity-70', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[210px] blur-xl opacity-60', xPos)} />
      <div className={twMerge(baseGradientClass, 'w-[240px] blur-2xl opacity-50', xPos)} />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-[100vw] h-[110vh] relative
    max-lg:h-[800px] max-md:h-[700px] max-sm:h-[600px] max-[430px]:h-[550px] max-[360px]:h-[500px]">
        <h3
        className="
          dynamic-title text-center text-header drop-shadow mb-52 
          max-w-[900px] max-md:min-w-[100%] px-x z-[500]
          absolute left-1/2 top-[260px] transform -translate-x-1/2
          max-lg:left-0 max-lg:-translate-x-0 max-lg:text-left max-lg:top-[125px]"
        >
          Spreading Art and Saving the Planet
        </h3>
        <div className="absolute w-[45%] left-0 top-[10%]
        max-lg:top-[310px] max-lg:w-[60%]">
          <VerticalGradient xPos="right-0" className="max-lg:hidden" />
          <img src="/presentation.png" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute w-[32.5%] left-[45%] bottom-[15%] z-[200]
        max-2xl:bottom-[30%]
        max-lg:left-[50%] max-lg:w-[45%] max-lg:top-[260px]">
          <HorizontalGradient yPos="top-0" className="-top-[100px] max-lg:-top-[125px]" />
          <img src="/zoom_meeting.png" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute w-[22.5%] left-[77.5%] top-[10%]
        max-lg:hidden">
          <VerticalGradient xPos="left-0" className="-left-[100px] max-lg:hidden" />
          <img src="/splash_five.jpg" className="w-full h-auto object-cover" />
        </div>
    </section>
  );
};

export default Hero;
