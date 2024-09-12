"use client";

import { useEffect, useState } from "react";

import BranchModal from "@/components/modals/BranchModal";
import ExecutiveBoardModal from "@/components/modals/ExecutiveBoardModal";
import StatisticsModal from "@/components/modals/StatisticsModal";
import VolunteerModal from "@/components/modals/VolunteerModal";
import PartnerModal from "@/components/modals/PartnerModal";
import EventsModal from "@/components/modals/EventsModal";
import StoriesModal from "@/components/modals/StoriesModal";

import BranchFounderModal from "@/components/modals/BranchFounderModal";
import PartnerDisplayModal from "@/components/modals/PartnerDisplayModal";
import ExecutiveMemberModal from "@/components/modals/ExecutiveMemberModal";

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
        <EventsModal />
        <StoriesModal />

        <BranchFounderModal />
        <PartnerDisplayModal />
        <ExecutiveMemberModal />
    </>
  );
};

export default ModalProvider;