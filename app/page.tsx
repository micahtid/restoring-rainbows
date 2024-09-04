import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import WhatWeDo from "@/components/WhatWeDo";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Statistics />
      <WhatWeDo />
    </div>
  )
}

export default Home