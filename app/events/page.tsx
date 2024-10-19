"use client";

import SearchBar from "./components/SearchBar";
import EventDisplay from "./components/EventDisplay";
import Highlight from "@/components/Highlight";
import Loader from "@/components/Loader";

import { useData } from "@/providers/useData";

const Events = () => {
  const { 
    events
  } = useData();

  if (!events) {
    return (
      <Loader />
    )
  }

  return (
    <section className="max-w-max mx-auto px-x py-8 mt-28
    flex flex-col justify-start items-start gap-y-4
    min-h-[75vh]
    fade-in-animation">
      <Highlight text="Filter Our Events" />
      <SearchBar />
      <EventDisplay events={events} />
    </section>
  )
}

export default Events;