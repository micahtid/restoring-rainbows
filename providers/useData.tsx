"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getBranches, getExecutiveBoard, getStatistics, getVolunteers, getPartners, getEvents, getStories } from "@/utils/database";


type DataContextType = {
    branches: DocumentData[] | null;
    executiveBoard: DocumentData[] | null;
    statistics: DocumentData[] | null;
    volunteers: DocumentData[] | null;
    partners: DocumentData[] | null;
    events: DocumentData[] | null;
    stories: DocumentData[] | null;
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

    useEffect(() => {
        const unsubscribe = getBranches(setBranches);
        return () => unsubscribe();
    }, []);

    
    useEffect(() => {
        const unsubscribe = getExecutiveBoard(setExecutiveBoard);
        return () => unsubscribe();
    }, []);

    
    useEffect(() => {
        const unsubscribe = getStatistics(setStatistics);
        return () => unsubscribe();
    }, []);

    
    useEffect(() => {
        const unsubscribe = getVolunteers(setVolunteers);
        return () => unsubscribe();
    }, []);

    
    useEffect(() => {
        const unsubscribe = getPartners(setPartners);
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

    const value = {
        branches,
        executiveBoard,
        statistics,
        volunteers,
        partners,
        events,
        stories
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
