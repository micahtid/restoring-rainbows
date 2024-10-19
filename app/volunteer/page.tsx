import ContactCard from "./components/ContactCard";
import Highlight from "@/components/Highlight";

const StartABranch = () => {
  return (
    <div className='relative w-full h-full pt-20'>
      <div 
        className='fixed inset-0 z-[-1]' 
        style={{
          backgroundColor: '#d5e3f1',
          backgroundImage: 'linear-gradient(to bottom right, white, #e3f0ff)',
          opacity: 0.7, 
        }}
      />
      <div className='max-w-max w-full mx-auto px-4 py-20 relative flex flex-col justify-start items-start gap-y-12
      fade-in-animation'>
        <h3 className='dynamic-heading text-header'>Volunteer</h3>
        <p className='text-lg max-w-[800px] self-end text-body'>
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
