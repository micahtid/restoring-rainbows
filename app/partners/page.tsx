"use client";

import { useData } from "@/providers/useData";

import PartnersList from "./components/PartnersList";
import Loader from "@/components/Loader";

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
    <section>
        <PartnersList partners={partners} />
    </section>
  )
}

export default Partners