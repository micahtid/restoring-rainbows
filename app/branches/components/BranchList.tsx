"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { DocumentData } from "firebase/firestore";
import { CountryData, organizeBranchesByCountry } from "@/utils/utils";
import useBranchFounderModal from "@/hooks/useBranchFounderModal";

import OutlineButton from "@/components/OutlineButton";
import CurveUnderline from "@/components/CurveUnderline";

interface BranchListProps {
    branches: DocumentData[] | null;
}

const BranchList: React.FC<BranchListProps> = ({ branches }) => {
    const [organizedBranches, setOrganizedBranches] = useState<null | CountryData[]>(null);

    const {
        onOpen,
        setCurrentBranch
    } = useBranchFounderModal();

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
        <div className="flex flex-col w-full gap-y-2">
            {branches.map((branch, index) => (
                <OutlineButton
                key={index}
                onClick={() => {
                    setCurrentBranch(branch);
                    onOpen();
                }}>
                    <p>{branch.city}</p>
                </OutlineButton>
            ))}
        </div>
    );

    const renderCountryList = () => (
        <div className="flex flex-col w-full gap-y-2">
            {organizedBranches?.map((countryData, index) => (
                <OutlineButton
                key={index}
                onClick={() => handleCountryClick(countryData.country)}>
                    {countryData.country}
                </OutlineButton>
            ))}
        </div>
    );

    const renderStateList = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");

        return (
            <div className="flex flex-col w-full gap-y-2">
                {usaData?.states?.map((stateData, index) => (
                    <OutlineButton
                    key={index}
                    onClick={() => handleStateClick(stateData.state)}
                    >
                        {stateData.state}
                    </OutlineButton>
                ))}
            </div>
        );
    };

    const renderBranchListForState = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");
        const stateData = usaData?.states?.find((state) => state.state === selectedState);

        return (
            <div className="w-full">
                <h3 className="text-2xl uppercase font-bold mb-2">Branches in {selectedState}, USA</h3>
                {renderBranches(stateData?.branches || [])}
            </div>
        );
    };

    const renderBranchListForCountry = () => {
        const countryData = organizedBranches?.find((country) => country.country === selectedCountry);

        return (
            <div className="w-full">
                <h3 className="text-2xl uppercase font-bold mb-2">Branches in {selectedCountry}</h3>
                {renderBranches(countryData?.branches || [])}
            </div>
        );
    };

    return (
        <div className="max-w-max w-full mx-auto
        px-4 py-8 mt-28
        flex flex-col justify-start items-start gap-y-4">
            <div className="">
                <h3 className="dynamic-subheading">Our Branches</h3>
                <CurveUnderline />
            </div>
            {!selectedCountry && renderCountryList()}
            {selectedCountry === "USA" && !selectedState && renderStateList()}
            {selectedCountry === "USA" && selectedState && renderBranchListForState()}
            {selectedCountry && selectedCountry !== "USA" && renderBranchListForCountry()}
        </div>
    );
};

export default BranchList;
