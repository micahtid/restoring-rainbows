import { takeAction } from "@/data"
import ArrowButton from "./ArrowButton"

const TakeAction = () => {
  return (
    <section className='w-[100vw] my-16
    flex justify-center items-center bg-secondary'>
        <div className="max-w-max w-full px-4 py-16
        flex flex-col gap-y-24">
          {takeAction.map((item, index) => (
            <div 
            key={index}
            className="w-full relative h-[300px]">
              <img src={item.image}
              className={`max-w-[500px] w-full h-full object-cover drop-shadow
              absolute top-1/2 transform -translate-y-1/2
              ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
              <div className={`flex flex-col justify-start gap-y-6
              absolute ${index % 2 === 0 ? 'left-0 items-start' : 'right-0 items-end'}`}>
                <h3 className="dynamic-subheading">{item.title}</h3>
                <p className={`max-w-[1000px] w-full text-xl
                ${index % 2 === 0 ? 'text-left' : 'text-right'}
                bg-white p-4 drop-shadow`}>
                  {item.description}
                </p>
                <ArrowButton link={item.link} text="More" />
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default TakeAction