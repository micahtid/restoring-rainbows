import { takeAction } from "@/data"
import ArrowButton from "./ArrowButton"

const TakeAction = () => {
  return (
    <section className='w-[100vw] my-16
    flex justify-center items-center bg-secondary'>
        <div className="max-w-max px-4 py-16
        flex flex-col gap-y-24">
          {takeAction.map((item, index) => (
            <div
            key={index}
            className={`flex flex-row justify-between gap-x-20 w-full
            ${index % 2 === 0 && 'flex-row-reverse'}`}>
              <img src={item.image} className="max-w-[500px] w-full object-cover drop-shadow" />
              <div className={`flex flex-col justify-start gap-y-4
                ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                <h3 className="dynamic-subheading">{item.title}</h3>
                <p className={`${index % 2 !== 0 && 'text-right'}
                  text-xl`}>{item.description}</p>
                <ArrowButton link={item.link}>More</ArrowButton>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default TakeAction