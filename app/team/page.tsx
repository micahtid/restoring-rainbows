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
    <section className="">
      <Volunteers volunteers={volunteers} />
      <ExecutiveBoard executiveBoard={executiveBoard} />
    </section>
  )
}

export default Team