"use client";

import Marquee from "react-fast-marquee"

import { DocumentData } from "firebase/firestore";

interface VolunteersProps {
  volunteers: DocumentData[] | null;
}

const Volunteers: React.FC<VolunteersProps> = ({ volunteers }) => {
  return (
    <div className='max-w-max w-full mx-auto px-x py-20'>
        <h3 className='dynamic-subheading text-header'>Volunteers</h3>
        <Marquee speed={25} gradient={false} className="w-full h-full py-8">
            {volunteers?.map((volunteer, index) => (
              <div key={index} className="p-4 mx-5 font-title dynamic-text rounded-md bg-white shadow-md">
                {volunteer.firstName} {volunteer.lastName}
              </div>
            ))}
          </Marquee>
    </div>
  )
}

export default Volunteers