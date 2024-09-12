"use client";

import { useData } from "@/providers/useData";

import WhatAreBranches from "./components/WhatAreBranches";
import BranchList from "./components/BranchList";
import BranchMap from "./components/BranchMap";
import Loader from "@/components/Loader";

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
    </section>
  )
}

export default Branches