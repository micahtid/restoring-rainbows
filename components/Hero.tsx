import { twMerge } from "tailwind-merge";

interface GradientProps {
  className?: string;
}

const Gradient: React.FC<GradientProps> = ({ className }) => {
  return (
    <div
      className={twMerge(className, `bg-secondary rounded-full blur-3xl absolute`)}
    />
  );
};

const Hero = () => {
  return (
    <section
      className="w-[100vw] h-[90vh] pt-32
      flex justify-center items-center overflow-hidden
      bg-secondary
      relative"
    >
      <div className="relative w-[45%] z-[100]
      max-lg:w-[60%]">
        <img
          src="/presentation.png"
          className="w-full h-[700px] object-cover"
        />
      </div>
      <div className="relative w-[32.5%] z-[300]
      max-lg:w-[40%]">
        <img
          src="/splash_one.png"
          className="w-full h-[500px] object-cover mt-[225px]
          max-lg:mb-[450px]"
        />
        <Gradient
          className="w-full h-[300px] z-[200]
          top-0 left-0 transform translate-x-1/2"
        />
      </div>
      <div className="relative w-[22.5%] z-[500]
      max-lg:hidden">
        <img
          src="/zoom_meeting.png"
          className="object-cover h-[600px] mb-[50px]"
        />
        <Gradient
          className="w-[300px] h-[400px] z-[200]
          top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Gradient
          className="w-[300px] h-[400px] z-[200]
          bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"
        />
      </div>
      <div
        className="
        max-w-[900px] max-md:min-w-[100%] px-4 z-[1000]
        absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[60%]"
      >
        <h3 className="dynamic-heading text-center text-text/80 drop-shadow">
            Spreading Art and Saving the Planet
        </h3>
        <div className="
        bg-white drop-shadow-md
        text-text text-lg text-center
        mt-14 px-6 py-4">
            So glad you could stop by! We're a youth run 501(c)3 nonprofit that collects, recycles, and donates school supplies!
        </div>
      </div>

      <Gradient
        className="w-[800px] h-[500px] z-[800]
        left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[100%]"
      />
      <Gradient
        className="w-[500px] h-[700px] z-[200]
        bottom-0 left-1/2 transform -translate-x-[80%] translate-y-1/2"
      />
    </section>
  );
};

export default Hero;
