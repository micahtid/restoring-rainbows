"use client";

import { useData } from "@/providers/useData";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { DocumentData } from "firebase/firestore";
import { CountryData, organizeBranchesByCountry } from "@/utils/utils";

const BranchList = () => {
    const { branches } = useData();
    const [organizedBranches, setOrganizedBranches] = useState<null | CountryData[]>(null);

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (branches) {
            setOrganizedBranches(organizeBranchesByCountry(branches));
        }
    }, [branches]);

    const selectedCountry = searchParams.get("country");
    const selectedState = searchParams.get("state");

    const handleCountryClick = (country: string) => {
        router.push(`?country=${country}`);
    };

    const handleStateClick = (state: string) => {
        if (selectedCountry) {
            router.push(`?country=${selectedCountry}&state=${state}`);
        }
    };

    const renderBranches = (branches: DocumentData[]) => (
        <div>
            {branches.map((branch, index) => (
                <div key={index}>
                    <p>{branch.firstName} {branch.lastName}</p>
                    <p>{branch.city}</p>
                </div>
            ))}
        </div>
    );

    const renderCountryList = () => (
        <div className="flex justify-start items-center gap-x-4">
            {organizedBranches?.map((countryData, index) => (
                <div key={index} onClick={() => handleCountryClick(countryData.country)}>
                    {countryData.country}
                </div>
            ))}
        </div>
    );

    const renderStateList = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");

        return (
            <div>
                {usaData?.states?.map((stateData, index) => (
                    <div key={index} onClick={() => handleStateClick(stateData.state)}>
                        {stateData.state}
                    </div>
                ))}
            </div>
        );
    };

    const renderBranchListForState = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");
        const stateData = usaData?.states?.find((state) => state.state === selectedState);

        return (
            <div>
                <h3>Branches in {selectedState}, USA</h3>
                {renderBranches(stateData?.branches || [])}
            </div>
        );
    };

    const renderBranchListForCountry = () => {
        const countryData = organizedBranches?.find((country) => country.country === selectedCountry);

        return (
            <div>
                <h3>Branches in {selectedCountry}</h3>
                {renderBranches(countryData?.branches || [])}
            </div>
        );
    };

    return (
        <div className="w-full">
            {!selectedCountry && renderCountryList()}
            {selectedCountry === "USA" && !selectedState && renderStateList()}
            {selectedCountry === "USA" && selectedState && renderBranchListForState()}
            {selectedCountry && selectedCountry !== "USA" && renderBranchListForCountry()}
        </div>
    );
};

export default BranchList;
