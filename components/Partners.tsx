"use client";

import { useData } from "@/providers/useData";
import ArrowButton from "./ArrowButton";

const Partners = () => {
  const {
    partners
  } = useData();

  console.log(partners)

  return (
    <section className='max-w-max w-full mx-auto
    px-4 py-8 my-28
    flex gap-x-24'>
      <div className="flex flex-col gap-y-6
      max-w-[450px]">
        <h3 className="dynamic-heading text-header">Partners</h3>
        <p className="text-lg text-body mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum consectetur ducimus possimus corporis quia magnam molestias, dignissimos dolores vero?</p>
        <ArrowButton text="See More" link="/partners" />
      </div>
      <div className="flex flex-wrap gap-5">
        {partners?.map((partner, index) => (
          <div 
          key={index}
          className={`${!partner.highlyValued && 'hidden'}`}>
            <img src={partner.logo} className="w-[150px] h-[150px] object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners