"use client";

import { useEffect, useState } from "react";

import BranchModal from "@/components/BranchModal";
import ExecutiveBoardModal from "@/components/ExecutiveBoardModal";
import StatisticsModal from "@/components/StatisticsModal";
import VolunteerModal from "@/components/VolunteerModal";
import PartnerModal from "@/components/PartnerModal";

import BranchFounderModal from "@/components/BranchFounderModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        <BranchModal />
        <ExecutiveBoardModal />
        <StatisticsModal />
        <VolunteerModal />
        <PartnerModal />
        <BranchFounderModal />
    </>
  );
};

export default ModalProvider;