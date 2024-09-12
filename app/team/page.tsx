"use client";

import { useData } from "@/providers/useData";

import ExecutiveBoard from "./components/ExecutiveBoard";
import Volunteers from "./components/Volunteers";
import Loader from "@/components/Loader";

const Team = () => {
  const {
    volunteers,
    executiveBoard
  } = useData();

  if (!(volunteers && executiveBoard)) {
    return (
      <Loader />
    )
  }

  return (
    <section className="max-w-max mx-auto px-4 py-8
    flex flex-col justify-start items-start gap-y-4">
      <ExecutiveBoard executiveBoard={executiveBoard} />
      <Volunteers volunteers={volunteers} />
    </section>
  )
}

export default Team