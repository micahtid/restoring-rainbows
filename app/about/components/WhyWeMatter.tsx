import { whyWeMatter } from "@/data"


const WhyWeMatter = () => {
  return (
    <div className='max-w-max w-full mx-auto
    px-x pt-32 pb-52 -mt-16
    flex flex-col justify-start item-start gap-y-12'>
      <h3 className='dynamic-subheading text-header'>
        Why We Matter
      </h3>
      <div className="flex justify-between items-start gap-x-12
      max-lg:flex-col max-lg:gap-y-14">
        {whyWeMatter.map((item, index) => (
          <div
          key={index}
          className="flex flex-col justify-start items-start gap-y-2 z-20">
            <h3 className="dynamic-subheading font-normal text-primary font-accent uppercase bg-offwhite p-2
            text-nowrap">{item.number}</h3>
            <p className="dynamic-text uppercase font-bold text-header">{item.caption}</p>
            <p className="mt-2 dynamic-text text-body
            max-lg:max-w-[600px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyWeMatter