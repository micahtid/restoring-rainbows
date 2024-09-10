import MissionStatement from "./components/MissionStatement";
import WhatWeDo from "@/components/WhatWeDo";
import Partners from "@/components/Partners";

const About = () => {
  return (
    <section className='max-w-max mx-auto px-4 py-8
    flex flex-col justify-start items-start gap-y-4'>
      <MissionStatement />
      <WhatWeDo />
      <Partners />
    </section>
  )
}

export default About