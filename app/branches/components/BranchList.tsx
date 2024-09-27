"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { DocumentData } from "firebase/firestore";
import { CountryData, organizeBranchesByCountry } from "@/utils/utils";

interface BranchListProps {
    branches: DocumentData[] | null;
}

const BranchList: React.FC<BranchListProps> = ({ branches }) => {
    const [organizedBranches, setOrganizedBranches] = useState<null | CountryData[]>(null);
    const router = useRouter();

    useEffect(() => {
        if (branches) {
            setOrganizedBranches(organizeBranchesByCountry(branches));
        }
    }, [branches]);

    const renderCountrySection = (countryData: CountryData) => (
        <div key={countryData.country} className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
                <h3 className="text-3xl font-bold font-title text-header uppercase">{countryData.country}</h3>
                <div className="w-full h-[2px] rounded-full bg-primary" />
            </div>
            <div className="grid grid-cols-2 gap-8 w-[600px]
            max-[590px]:flex max-[590px]:flex-col max-[590px]:gap-y-4">
                {countryData.branches?.map((branch, index) => (
                    <button
                        key={index}
                        onClick={() => router.push(`/branches/branch?country=${branch.country}&city=${branch.city}`)}
                        className={twMerge("text-xl text-body text-left z-10 text-wrap max-w-[200px]")}
                    >
                        {branch.city}
                    </button>
                ))}
            </div>
        </div>
    );

    const renderUSSection = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");

        if (usaData?.states) {
            const midpoint = Math.ceil(usaData.states.length / 2);
            const firstHalf = usaData.states.slice(0, midpoint);
            const secondHalf = usaData.states.slice(midpoint);

            const renderStateColumn = (states: DocumentData[]) => (
                <div className="flex flex-col gap-y-8">
                    {states.map((stateData, index) => (
                        <div key={index} className="flex flex-col gap-y-4 w-[300px]">
                            <h4 className="text-xl font-bold">{stateData.state}</h4>
                            {stateData.branches.map((branch: DocumentData, branchIndex: number) => (
                                <button
                                    key={branchIndex}
                                    onClick={() => router.push(`/branches/branch?country=${branch.country}&city=${branch.city}`)}
                                    className="text-xl text-body text-left z-10 text-wrap"
                                >
                                    {branch.city}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            );

            return (
                <div key="USA" className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-1">
                        <h3 className="text-3xl font-bold font-title text-header uppercase">USA</h3>
                        <div className="w-full h-[2px] rounded-full bg-primary" />
                    </div>
                    <div className="flex flex-row gap-x-4
                    max-[590px]:flex-col max-[590px]:gap-y-8">
                        {renderStateColumn(firstHalf)}
                        {renderStateColumn(secondHalf)}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="max-w-max w-full mx-auto px-4 py-8">
            <h3 className="dynamic-subheading font-title text-header font-bold
            mb-16">Our Branches</h3>
            <div className="max-w-[1000px] w-full flex flex-col gap-y-14">
                {organizedBranches && renderUSSection()}
                {organizedBranches?.filter((country) => country.country !== "USA").map(renderCountrySection)}
            </div>
        </div>
    );
};

export default BranchList;
