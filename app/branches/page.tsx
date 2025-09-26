"use client";

import { useData } from "@/providers/useData";
import { takeActionPageSections } from "@/data";

import WhatAreBranches from "./components/WhatAreBranches";
import BranchList from "./components/BranchList";
import Map from "@/components/Map";
import Loader from "@/components/Loader";

import TakeActionItem from "../../components/TakeActionItem";

const Branches = () => {
  const {
    branches
  } = useData();

  if (!branches) {
    return (
      <Loader />
    )
  }

  return (
    <section className="">
        <WhatAreBranches />
        <div className="max-w-max w-full mx-auto px-x py-8 mt-10 mb-14">
          <div className="w-full h-[400px]">
            <Map />
          </div>
        </div>
        <BranchList branches={branches} />

        <div className="max-w-max w-full mx-auto
        px-x py-8 mb-20">
          <TakeActionItem
          index={0}
          title={takeActionPageSections[0].title}
          description={takeActionPageSections[0].description}
          buttonLabel={takeActionPageSections[0].buttonLabel}
          buttonLink={takeActionPageSections[0].buttonLink}
          />
        </div>
    </section>
  )
}

export default Branches