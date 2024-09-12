import ContactCard from "./components/ContactCard"
import Highlight from "@/components/Highlight";

import { gradientDivs } from "@/data";

const StartABranch = () => {

  return (
    <div className='relative w-full h-full'>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {gradientDivs.map((className, index) => (
          <div key={index} className={className}></div>
        ))}
      </div>
      <div className='max-w-max w-full mx-auto px-4 py-20 relative flex flex-col justify-start items-start gap-y-4'>
        <h3 className='dynamic-subheading'>Start a Branch</h3>
        <p className='text-xl max-w-[800px] self-end uppercase font-bold'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, illum quae. Quo, odit inventore sit neque veniam culpa ex assumenda?
        </p>
        <div className="w-full h-[70vh] flex justify-center items-center">
          <div className="w-full flex flex-col gap-y-6">
            <div className="">
              <Highlight text="Interested?" />
            </div>
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartABranch;
