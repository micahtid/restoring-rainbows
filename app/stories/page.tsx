"use client";
import Highlight from "@/components/Highlight";
import Loader from "@/components/Loader";

import { useData } from "@/providers/useData";

const Stories = () => {
  const { 
    stories
  } = useData();

  if (!stories) {
    return (
      <Loader />
    )
  }

  return (
    <section className="max-w-max mx-auto px-x py-8 mt-28
    flex flex-col justify-start items-start gap-y-4
    min-h-[75vh] 
    fade-in-animation">
      <Highlight text="Our Latest Stories" />
      <h3 className="dynamic-subheading">Stories</h3>
    </section>
  )
}

export default Stories;