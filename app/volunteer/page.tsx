import { gradientDivs } from "@/data";

const Volunteer = () => {
  return (
    <div className='relative w-full h-full'>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {gradientDivs.map((className, index) => (
          <div key={index} className={className}></div>
        ))}
      </div>
      <div className='max-w-max w-full mx-auto px-4 py-20 relative flex flex-col justify-start items-start gap-y-4'>
        <h3 className='dynamic-subheading'>Write For Us</h3>
        <p className='text-xl max-w-[800px] self-end uppercase font-bold'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, illum quae. Quo, odit inventore sit neque veniam culpa ex assumenda?
        </p>
        <div className="w-full h-[70vh]"></div>
      </div>
    </div>
  );
};

export default Volunteer;
