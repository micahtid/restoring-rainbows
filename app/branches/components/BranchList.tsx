"use client";

import { useEffect, useState } from "react";
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

    useEffect(() => {
        if (branches) {
            setOrganizedBranches(organizeBranchesByCountry(branches));
        }
    }, [branches]);

    const handleCityClick = (cityName: string) => {
        if (selectedCity === cityName) {
            setSelectedCity(null);
        } else {
            setSelectedCity(cityName);
        }
    };

    const renderCitySection = (stateData: any) => (
        <div key={stateData.state} className="flex flex-col gap-y-4 w-[300px]">
            <h4 className="dynamic-text font-bold uppercase font-title text-header">
                {stateData.state}
            </h4>
            <div className="flex flex-col gap-y-4">
                {stateData.cities.map((cityData: any, cityIndex: number) => (
                    <div key={cityIndex} className="relative">
                        <button
                            onClick={() => handleCityClick(cityData.city)}
                            className="
                                dynamic-text text-body text-left
                                hover:text-primary transition-colors duration-100
                                z-0"
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

    const renderUSSection = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");

        if (usaData?.states) {
            const midpoint = Math.ceil(usaData.states.length / 2);
            const firstHalf = usaData.states.slice(0, midpoint);
            const secondHalf = usaData.states.slice(midpoint);

            return (
                <div key="USA" className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="dynamic-subheading text-3xl max-lg:text-2xl font-title text-header font-bold uppercase">
                            USA
                        </h3>
                        <div className="w-full h-[1px] rounded-full bg-primary/50" />
                    </div>
                    <div className="flex flex-row gap-x-20 max-[590px]:flex-col max-[590px]:gap-y-8">
                        <div className="flex flex-col gap-y-8">
                            {firstHalf.map(renderCitySection)}
                        </div>
                        <div className="flex flex-col gap-y-8">
                            {secondHalf.map(renderCitySection)}
                        </div>
                    </div>
                </div>
            );
        }
    };

    const renderCountrySection = (countryData: CountryData) => (
        <div key={countryData.country} className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
                <h3 className="dynamic-subheading text-3xl max-lg:text-2xl font-title text-header font-bold uppercase">
                    {countryData.country}
                </h3>
                <div className="w-full h-[1px] rounded-full bg-primary/50" />
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-20 w-[600px] max-[590px]:flex max-[590px]:flex-col max-[590px]:gap-y-4">
                {countryData.cities?.map((cityData, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => handleCityClick(cityData.city)}
                            className={twMerge(`
                                dynamic-text text-body text-left
                                hover:text-primary transition-colors duration-100
                                z-0 max-w-[200px]`
                            )}
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
        <div className="relative max-w-max w-full mx-auto px-6 md:px-12 py-16">
            <h3 className="dynamic-heading text-header font-bold mb-10">
                Our Branches
            </h3>
            <div className="max-w-[1000px] w-full flex flex-col gap-y-16">
                {organizedBranches && renderUSSection()}
                {organizedBranches?.filter((country) => country.country !== "USA")
                    .map(renderCountrySection)}
            </div>
        </div>
    );
};

export default BranchList;
