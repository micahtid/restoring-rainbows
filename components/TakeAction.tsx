import { landingPageTakeAction } from "@/data"
import ArrowButton from "./ArrowButton"

// Arbitrary breaking point!

const TakeAction = () => {
  return (
    <section className="flex flex-col gap-y-20 my-32 
    max-lg:gap-y-12">
      {landingPageTakeAction.map((action, index) => (
        <div key={index} className="grid grid-cols-2 gap-8 
        max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-y-12">
          <img src={action.image} className="max-w-[1200px] w-full object-cover h-auto" alt={action.title} />
          <div className="px-x flex flex-col gap-y-5 justify-center items-start max-w-[800px]">
            <h3 className="dynamic-heading text-header">{action.title}</h3>
            <p className="lg:text-2xl dynamic-text text-body">{action.description}</p>
            <ArrowButton link={action.link} text="More" /> 
          </div>
        </div>
      ))}
    </section>
  )
}

export default TakeAction
