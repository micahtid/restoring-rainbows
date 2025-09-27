import React from "react"

const AboutUs = () => {
  return (
    <section
    className='
    max-w-max w-full mx-auto
    px-x py-8 mt-24 mb-16
    flex gap-x-32 items-center
    max-lg:flex-col max-lg:gap-y-12 max-lg:items-start
    '>
        <h3 className='dynamic-subheading 
        max-lg:text-[32.5px]
        max-lg:leading-[40px]
        text-header'>
            Restoring Rainbows is an international, youth-led nonprofit dedicated to making art accessible while protecting the planet.
        </h3>
        {/* ISSUE: Change to <Image /> */}
        <img
        src="/about_us.jpeg"
        className='max-w-[300px] h-auto' />
    </section>
  )
}

export default AboutUs