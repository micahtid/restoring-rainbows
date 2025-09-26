import React from 'react';
import Map from '@/components/Map';

const Mission = () => {
  return (
    <section className='
    max-w-max w-full mx-auto
    px-x py-8 mt-20 mb-14
    flex gap-x-16 max-xl:gap-x-12 max-lg:gap-x-8 items-start
    max-lg:flex-col max-lg:gap-y-12 max-md:gap-y-8
    fade-in-animation'>

      <div className='flex-1 max-lg:w-full'>
        <h2 className='dynamic-subheading text-header mb-6 max-xl:text-3xl max-lg:text-2xl max-md:text-xl'>
          Our Mission
        </h2>
        <p className='dynamic-text text-body max-xl:text-lg max-lg:text-base max-md:text-sm leading-relaxed'>
          We reimagine what's possible for art and the environment. By restoring, recycling, and redistributing school supplies, Restoring Rainbows brings creativity to classrooms and communities while keeping waste out of landfills.
        </p>
        <p className='dynamic-text text-body max-xl:text-lg max-lg:text-base max-md:text-sm leading-relaxed mt-4'>
          Imagine a world where every child, no matter where they live, has the tools to create and where every marker, crayon, or pencil gets a second life instead of being thrown away!
        </p>
      </div>

      <div className='flex-1 max-lg:w-full'>
        <h3 className='dynamic-subheading text-header mb-6 max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-lg:mt-8'>
          Branch Map
        </h3>
        <div className='w-full h-[350px] max-xl:h-[300px] max-lg:h-[250px] max-md:h-[200px] max-sm:h-[180px]'>
          <Map />
        </div>
      </div>

    </section>
  );
};

export default Mission;