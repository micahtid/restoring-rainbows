"use client";

import { useData } from "@/providers/useData";
import ArrowButton from "./ArrowButton";
import { landingPagePartnerDescription } from "@/data";

const Partners = () => {
  const {
    partners
  } = useData();

  console.log(partners)

  return (
    <section className='max-w-max w-full mx-auto
    px-x py-8 my-28
    flex gap-x-24
    max-lg:flex-col max-lg:gap-y-16'>
      <div className="flex flex-col gap-y-6
      max-w-[450px]">
        <h3 className="dynamic-subheading text-header">Partners</h3>
        <p className="dynamic-text text-body mb-8 max-lg:mb-0">{landingPagePartnerDescription}</p>
        <div className="flex justify-start">
          <ArrowButton text="See More" link="/partners" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 
      max-sm:gap-3">
        {partners?.map((partner, index) => (
          <div 
          key={index}
          className={`${!partner.highlyValued && 'hidden'}`}>
            <img src={partner.logo} className="w-[150px] h-[150px] object-cover
            max-sm:w-[100px] max-sm:h-[100px]" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners