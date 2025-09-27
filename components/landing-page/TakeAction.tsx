import { landingPageTakeAction } from "@/data"
import ArrowButton from "../ArrowButton"

// Arbitrary breaking point!

const TakeAction = () => {
  return (
    <section className="flex flex-col gap-y-20 my-32 
    max-lg:gap-y-12">
      {landingPageTakeAction.map((action, index) => (
        <div key={index} className="flex gap-8
        max-[750px]:flex-col max-[750px]:gap-y-12">
          <img src={action.image} className="w-[45%] object-cover h-auto max-[750px]:w-full" alt={action.title} />
          <div className="px-x flex flex-col gap-y-5 justify-center items-start flex-1 max-w-[750px]">
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
