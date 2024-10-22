"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { DocumentData } from "firebase/firestore";
import { CountryData, organizeBranchesByCountry } from "@/utils/utils";
import DropDown from "./DropDown";

interface BranchListProps {
    branches: DocumentData[] | null;
}

const BranchList: React.FC<BranchListProps> = ({ branches }) => {
    const [organizedBranches, setOrganizedBranches] = useState<null | CountryData[]>(null);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (branches) {
            setOrganizedBranches(organizeBranchesByCountry(branches));
        }
    }, [branches]);

    const handleCityClick = (cityName: string) => {                             // Toggle dropdown on city click
        if (selectedCity === cityName) {
            setSelectedCity(null);                                              // Close dropdown if already open
        } else {
            setSelectedCity(cityName);                                          // Open dropdown if clicked
        }
    };

    const renderCitySection = (stateData: any) => (                                     // Helper function for USA cities (!)
        <div key={stateData.state} className="flex flex-col gap-y-4 w-[300px]">
            <h4 className="text-xl font-bold">{stateData.state}</h4>
            {stateData.cities.map((cityData: any, cityIndex: number) => (
                <div key={cityIndex} className="relative">
                    <button
                        onClick={() => handleCityClick(cityData.city)}
                        className="text-xl text-body text-left z-10 text-wrap"
                    >
                        {cityData.city}
                    </button>
                    <DropDown 
                    isOpen={selectedCity === cityData.city} 
                    toggleDropdown={() => handleCityClick(cityData.city)}
                    cityData={cityData}
                    />
                </div>
            ))}
        </div>
    );

    const renderUSSection = () => {                                                                 // Render USA states (!)
        const usaData = organizedBranches?.find((country) => country.country === "USA");

        if (usaData?.states) {
            const midpoint = Math.ceil(usaData.states.length / 2);
            const firstHalf = usaData.states.slice(0, midpoint);
            const secondHalf = usaData.states.slice(midpoint);

            return (
                <div key="USA" className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-1">
                        <h3 className="text-3xl font-bold font-title text-header uppercase">USA</h3>
                        <div className="w-full h-[2px] rounded-full bg-primary" />
                    </div>
                    <div className="flex flex-row gap-x-4 max-[590px]:flex-col max-[590px]:gap-y-8">
                        {/* Column of states (first half) */}
                        <div className="flex flex-col gap-y-8">{firstHalf.map(renderCitySection)}</div>
                        {/* Column of states (second half) */}
                        <div className="flex flex-col gap-y-8">{secondHalf.map(renderCitySection)}</div>
                    </div>
                </div>
            );
        }
    };

    const renderCountrySection = (countryData: CountryData) => (                                    // Render countries and cities for non-USA countries
        <div key={countryData.country} className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
                <h3 className="text-3xl font-bold font-title text-header uppercase">{countryData.country}</h3>
                <div className="w-full h-[2px] rounded-full bg-primary" />
            </div>
            <div className="grid grid-cols-2 gap-8 w-[600px] max-[590px]:flex max-[590px]:flex-col max-[590px]:gap-y-4">
                {countryData.cities?.map((cityData, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => handleCityClick(cityData.city)}
                            className={twMerge("text-xl text-body text-left z-10 text-wrap max-w-[200px]")}
                        >
                            {cityData.city}
                        </button>
                        <DropDown 
                        isOpen={selectedCity === cityData.city} 
                        toggleDropdown={() => handleCityClick(cityData.city)}
                        cityData={cityData}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="max-w-max w-full mx-auto px-4 py-8 fade-in-animation">
            <h3 className="dynamic-subheading font-title text-header font-bold mb-16">Our Branches</h3>
            <div className="max-w-[1000px] w-full flex flex-col gap-y-14">
                {organizedBranches && renderUSSection()}
                {organizedBranches?.filter((country) => country.country !== "USA").map(renderCountrySection)}
            </div>
        </div>
    );
};

export default BranchList;
