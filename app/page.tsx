import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import WhatWeDo from "@/components/WhatWeDo";
import Blog from "@/components/Blog";
import SocialMedia from "@/components/SocialMedia";
import RecentEvents from "@/components/RecentEvents";
import TakeAction from "@/components/TakeAction";
import Partners from "@/components/Partners";

const Home = () => {
  return (
    <div className="relative">
      <div 
      style={{
          background: `
              conic-gradient(from 0deg, #e3f0ff, #d3f8e6, #e3f0ff)`
      }}
      className="absolute top-0
      w-full h-[2500px] -z-[100]" />
      <div className="pb-24" />
      <Hero />
      <Statistics />
      <WhatWeDo />
      <Blog />
      <SocialMedia />
      <RecentEvents />
      <TakeAction />
      <Partners />
    </div>
  )
}

export default Home