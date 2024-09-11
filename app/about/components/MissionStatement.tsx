import React from 'react'

const MissionStatement = () => {
  return (
    <div className='w-[100vw]'>
      <div className="w-full relative overflow-hidden
      flex justify-start items-center px-8 py-24">
        <img src="/splash_one.jpg"
        className='w-full h-full object-cover
        absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        brightness-75 blur-[2px] z-20'  />
        <h3 className='z-30 dynamic-subheading
        text-white max-w-[1000px]'>
          Championing sustainability and creativity. We turn discarded school supplies into art.
        </h3>
      </div>
      <div className="max-w-max w-full mx-auto px-4 py-8 mt-12
      flex flex-col justify-start items-start gap-y-12">
        <h3 className='dynamic-subheading'>Our Mission</h3>
        <p className='text-xl max-w-[800px]'>Our mission is to give children educational supplies, clean up the environment, and nurture creativity in our community! We do this by collecting new and old school supplies alike and restoring them into powerful instruments of creativity! </p>
      </div>
    </div>
  )
}

export default MissionStatement