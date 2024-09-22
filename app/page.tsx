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
    <div className="">
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