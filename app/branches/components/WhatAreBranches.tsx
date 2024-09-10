import React from 'react'

const WhatAreBranches = () => {
  return (
    <div className="bg-secondary w-[100vw] pt-12
    flex justify-center items-center">
        <div className="max-w-max w-full px-4 py-8
        flex flex-col justify-start items-start gap-y-4">
            <div className="bg-primary p-2">
                <p className='uppercase text-white text-sm'>What are</p>
            </div>
            <h3 className='dynamic-subheading uppercase font-bold'>Branches</h3>
            <div className="w-full h-[50px] relative">
                <p className='text-xl
                bg-gray-100 p-4
                absolute transform translate-y-[10px]'>Branches are smaller versions of the main Restoring Rainbows based in all different areas of the world! They contribute so much to the mission, and are great volunteer and leadership opportunities for fans of our work! If you are interested in starting a branch in your city or country.</p>
            </div>
        </div>
    </div>
  )
}

export default WhatAreBranches