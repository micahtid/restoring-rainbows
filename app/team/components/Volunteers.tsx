"use client";

import Marquee from "react-fast-marquee"

import { useData } from "@/providers/useData"

const Volunteers = () => {
  const {
    volunteers
  } = useData();

  return (
    <div className='w-full px-4'>
        <h3 className='dynamic-subheading'>Volunteers</h3>
        <Marquee speed={25} gradient={false} className="w-full h-full py-8">
            {volunteers?.map((volunteer, index) => (
              <div key={index} className="p-4 mx-5 font-title text-xl bg-white rounded-lg shadow-lg">
                {volunteer.firstName} {volunteer.lastName}
              </div>
            ))}
          </Marquee>
    </div>
  )
}

export default Volunteers