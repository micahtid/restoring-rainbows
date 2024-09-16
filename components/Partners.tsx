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
    px-4 py-8 mb-10
    flex flex-col gap-y-10'>
        <div className="flex flex-col justify-center items-start gap-y-2">
          <h3 className='dynamic-subheading'>
              Partners
          </h3>
          <ArrowButton text="See More" link="" />
        </div>
        <div className="flex flex-row justify-start items-start gap-5 flex-wrap">
          {partners?.map((partner, index) => (
            <div 
            key={index}
            className={`${!partner.highlyValued && 'hidden'}`}>
              <img src={partner.logo}
              className="w-[250px] h-[250px] object-cover" />
            </div>
          ))}
        </div>
    </section>
  )
}

export default Partners