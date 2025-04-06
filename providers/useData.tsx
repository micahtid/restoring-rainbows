"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import {
  getBranches,
  getExecutiveBoard,
  getStatistics,
  getVolunteers,
  getPartners,
  getEvents,
  getStories,
  getOpportunities,
} from "@/utils/database";

type DataContextType = {
  branches: DocumentData[] | null;
  executiveBoard: DocumentData[] | null;
  statistics: DocumentData[] | null;
  volunteers: DocumentData[] | null;
  partners: DocumentData[] | null;
  events: DocumentData[] | null;
  stories: DocumentData[] | null;
  opportunities: DocumentData[] | null;
};

export const BranchContext = createContext<DataContextType | undefined>(
  undefined
);

export interface Props {
  [propNames: string]: any;
}

export const DataContextProvider = (props: Props) => {
  const [branches, setBranches] = useState<DocumentData[] | null>(null);
  const [executiveBoard, setExecutiveBoard] = useState<DocumentData[] | null>(null);
  const [statistics, setStatistics] = useState<DocumentData[] | null>(null);
  const [volunteers, setVolunteers] = useState<DocumentData[] | null>(null);
  const [partners, setPartners] = useState<DocumentData[] | null>(null);
  const [events, setEvents] = useState<DocumentData[] | null>(null);
  const [stories, setStories] = useState<DocumentData[] | null>(null);
  const [opportunities, setOpportunities] = useState<DocumentData[] | null>(null);

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  const sortBranches = (branches: DocumentData[] | null) => {
    if (!branches) return null;
    return branches.sort((a, b) => {
      if (a.country === b.country) {
        return a.city.localeCompare(b.city);
      }
      return a.country.localeCompare(b.country);
    });
  };

  const sortPeopleByName = (people: DocumentData[] | null) => {
    if (!people) return null;
    return people.sort((a, b) => {
      if (a.firstName === b.firstName) {
        return a.lastName.localeCompare(b.lastName);
      }
      return a.firstName.localeCompare(b.firstName);
    });
  };

  const sortPartners = (partners: DocumentData[] | null) => {
    if (!partners) return null;
    return partners.sort((a, b) => a.name.localeCompare(b.name));
  };

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const unsubscribe = getBranches((fetchedBranches) => {
      setBranches(sortBranches(fetchedBranches));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = getExecutiveBoard((fetchedExecutiveBoard) => {
      setExecutiveBoard(sortPeopleByName(fetchedExecutiveBoard));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = getVolunteers((fetchedVolunteers) => {
      setVolunteers(sortPeopleByName(fetchedVolunteers));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = getPartners((fetchedPartners) => {
      setPartners(sortPartners(fetchedPartners));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = getStatistics(setStatistics);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = getEvents(setEvents);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = getStories(setStories);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = getOpportunities(setOpportunities);
    return () => unsubscribe();
  }, []);

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  const value = {
    branches,
    executiveBoard,
    statistics,
    volunteers,
    partners,
    events,
    stories,
    opportunities,
  };

  return <BranchContext.Provider value={value} {...props} />;
};

export const useData = () => {
  const context = useContext(BranchContext);
  if (context === undefined) {
    throw new Error("useBranchData must be used within a BranchContextProvider");
  }

  return context;
};
