"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getBranches } from "@/utils/database";


type DataContextType = {
    branches: DocumentData[] | null;
};

export const BranchContext = createContext<DataContextType | undefined>(
    undefined
);

export interface Props {
    [propNames: string]: any;
}

export const DataContextProvider = (props: Props) => {
    const [branches, setBranches] = useState<DocumentData[] | null>(null);

    useEffect(() => {
        const unsubscribe = getBranches(setBranches);
        return () => unsubscribe();
    }, []);

    const value = {
        branches
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
