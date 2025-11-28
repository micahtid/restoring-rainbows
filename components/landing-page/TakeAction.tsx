import { landingPageTakeAction } from "@/data"
import ArrowButton from "../ArrowButton"

// Arbitrary breaking point!

const TakeAction = () => {
  return (
    <section className="w-full bg-white flex justify-center items-center">
      <div className="w-full flex flex-col gap-y-20 my-20
    max-lg:gap-y-12 max-lg:my-16">
      {landingPageTakeAction.map((action, index) => (
        <div key={index} className="flex gap-8
        max-[750px]:flex-col max-[750px]:gap-y-12">
          {/* ISSUE: Change to <Image /> */}
          <img src={action.image} className="w-[45%] object-cover h-auto max-[750px]:w-full" alt={action.title} />
          <div className="px-x flex flex-col gap-y-5 justify-center items-start flex-1 max-w-[750px]">
            <h3 className="dynamic-heading text-header">{action.title}</h3>
            <p className="lg:text-2xl dynamic-text text-body">{action.description}</p>
            <ArrowButton link={action.link} text="More" /> 
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default TakeAction
