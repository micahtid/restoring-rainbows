"use client";

import { useData } from "@/providers/useData";
import { takeActionPageSections } from "@/data";

import WhatAreBranches from "./components/WhatAreBranches";
import BranchList from "./components/BranchList";
import BranchMap from "./components/BranchMap";
import Loader from "@/components/Loader";

import TakeActionItem from "../take-action/components/TakeActionItem";

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
        <BranchList branches={branches} />
        <BranchMap branches={branches} />

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