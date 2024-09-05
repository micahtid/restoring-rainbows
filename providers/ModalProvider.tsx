"use client";

import { useEffect, useState } from "react";

import BranchModal from "@/components/BranchModal";
import ExecutiveBoardModal from "@/components/ExecutiveBoardModal";
import StatisticsModal from "@/components/StatisticsModal";
import PartnerModal from "@/components/PartnerModal";

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
        <PartnerModal />
    </>
  );
};

export default ModalProvider;