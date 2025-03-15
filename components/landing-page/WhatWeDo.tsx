import { whatWeDo } from "@/data"

const WhatWeDo = () => {
  return (
    <section className='max-w-max mx-auto 
    py-24 px-x
    flex flex-col gap-y-12'>
        <h3 className="dynamic-subheading text-header">
            What We Do
        </h3>
        <div className="flex flex-row justify-between items-start
        max-lg:flex-col
        max-lg:gap-y-16 max-lg:max-w-[600px]">
            {whatWeDo.map((item, index) => (
                <div 
                key={index}
                className={`
                flex flex-col justify-between items-start h-[400px] 
                max-lg:h-full
                ${index !== whatWeDo.length - 1 && 'lg:border-r-[1px]'} 
                lg:border-primary lg:pr-12 lg:mr-12`}>
                    <div className="flex flex-col justify-start items-start gap-y-4">
                        <div className="text-8xl text-primary/80 ">
                            {item.icon}
                        </div>
                        <h3 className="dynamic-text uppercase font-bold text-header">
                            {item.title}
                        </h3>
                        <p className="dynamic-text text-body max-lg:text-lg">
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