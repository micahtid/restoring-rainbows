"use client";

import SearchBar from "./components/SearchBar";
import StoryDisplay from "./components/StoryDisplay";
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
    <section className="max-w-max mx-auto px-4 py-8
    flex flex-col justify-start items-start gap-y-4
    min-h-[75vh]">
      <Highlight text="Filter Our Stories" />
      <SearchBar />
      <StoryDisplay stories={stories} />
    </section>
  )
}

export default Stories;