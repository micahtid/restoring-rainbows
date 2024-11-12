"use client";

import { useData } from "@/providers/useData";
import { takeActionPageSections } from "@/data";

import PartnersList from "./components/PartnersList";
import Loader from "@/components/Loader";

import TakeActionItem from "../take-action/components/TakeActionItem";

const Partners = () => {
  const {
    partners
  } = useData();

  if (!partners) {
    return (
      <Loader />
    )
  }

  return (
    <section className="">
        <PartnersList partners={partners} />

        <div className="max-w-max w-full mx-auto
        px-x py-8 my-20">
          <TakeActionItem
          index={2}
          title={takeActionPageSections[2].title}
          description={takeActionPageSections[2].description}
          buttonLabel={takeActionPageSections[2].buttonLabel}
          buttonLink={takeActionPageSections[2].buttonLink}
          />
        </div>
    </section>
  )
}

export default Partners