import { whatWeDo } from "@/data"

const WhatWeDo = () => {
  return (
    <section className='max-w-max mx-auto 
    py-24 px-8
    flex flex-col gap-y-12'>
        <h3 className="dynamic-subheading">
            What We Do
        </h3>
        <div className="flex flex-row justify-between items-start gap-x-20">
            {whatWeDo.map((item, index) => (
                <div 
                key={index}
                className="
                flex flex-col justify-between items-start h-[400px]">
                    <div className="flex flex-col justify-start items-start gap-y-4">
                        <div className="text-8xl text-primary/80 ">
                            {item.icon}
                        </div>
                        <h3 className="text-xl uppercase font-bold">
                            {item.title}
                        </h3>
                        <p className="text-xl">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WhatWeDo