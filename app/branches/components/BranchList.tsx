"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { FiPlus, FiMinus } from "react-icons/fi";

import { DocumentData } from "firebase/firestore";
import { CountryData, organizeBranchesByCountry } from "@/utils/utils";
import DropDown from "./DropDown";

interface BranchListProps {
    branches: DocumentData[] | null;
}

/**
 * Interactive branch list component with collapsible countries
 * Displays branches organized by country with expand/collapse functionality
 * All countries start collapsed by default for better UX
 */
const BranchList: React.FC<BranchListProps> = ({ branches }) => {
    const [organizedBranches, setOrganizedBranches] = useState<null | CountryData[]>(null);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [collapsedCountries, setCollapsedCountries] = useState<Set<string>>(new Set());

    // PERFORMANCE: Memoize the initial country setup to avoid recalculation
    const initialCollapsedCountries = useMemo(() => {
        if (!branches) return new Set<string>();
        
        const organized = organizeBranchesByCountry(branches);
        const allCountries = new Set<string>();
        
        // Add USA to collapsed set!
        allCountries.add("USA");
        
        // Add all other countries to collapsed set...
        organized.forEach(country => {
            if (country.country !== "USA") {
                allCountries.add(country.country);
            }
        });
        
        return allCountries;
    }, [branches]);

    useEffect(() => {
        if (branches) {
            const organized = organizeBranchesByCountry(branches);
            setOrganizedBranches(organized);
            
            // Set all countries as collapsed by default...
            setCollapsedCountries(initialCollapsedCountries);
        }
    }, [branches, initialCollapsedCountries]);

    // PERFORMANCE: Memoize city click handler to prevent unnecessary re-renders
    const handleCityClick = useCallback((cityName: string) => {
        setSelectedCity(prev => prev === cityName ? null : cityName);
    }, []);

    // PERFORMANCE: Memoize country collapse toggle to prevent unnecessary re-renders
    const toggleCountryCollapse = useCallback((countryName: string) => {
        setCollapsedCountries(prev => {
            const newSet = new Set(prev);
            if (newSet.has(countryName)) {
                newSet.delete(countryName);
            } else {
                newSet.add(countryName);
            }
            return newSet;
        });
    }, []);

    // PERFORMANCE: Memoize collapse check for O(1) lookup
    const isCountryCollapsed = useCallback((countryName: string) => {
        return collapsedCountries.has(countryName);
    }, [collapsedCountries]);

    /**
     * Renders a city section for US states (with state header and cities)
     * Used specifically for USA's state-based organization
     */
    const renderCitySection = useCallback((stateData: any) => (
        <div key={stateData.state} className="flex flex-col gap-y-4 w-[300px]">
            {/* State header */}
            <h4 className="dynamic-text font-bold uppercase font-title text-header">
                {stateData.state}
            </h4>
            {/* Cities within the state */}
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
                        {/* Dropdown with branch details */}
                        <DropDown 
                            isOpen={selectedCity === cityData.city} 
                            toggleDropdown={() => handleCityClick(cityData.city)}
                            cityData={cityData}
                        />
                    </div>
                ))}
            </div>
        </div>
    ), [selectedCity, handleCityClick]);

    /**
     * Renders the USA section with special two-column layout for states
     * USA has states which contain cities, different from other countries
     */
    const renderUSSection = useCallback(() => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");

        if (usaData?.states) {
            // Split states into two columns for better layout
            const midpoint = Math.ceil(usaData.states.length / 2);
            const firstHalf = usaData.states.slice(0, midpoint);
            const secondHalf = usaData.states.slice(midpoint);

            return (
                <div key="USA" className="flex flex-col gap-y-6">
                    {/* USA header with collapse toggle */}
                    <div className="flex flex-col gap-y-2">
                        <button 
                            onClick={() => toggleCountryCollapse("USA")} 
                            className="text-left hover:text-primary transition-colors duration-200"
                        >
                            <h3 className="dynamic-subheading text-3xl max-lg:text-2xl font-title text-header font-bold uppercase flex items-center">
                                <span className="mr-2">
                                    {isCountryCollapsed("USA") ? <FiPlus /> : <FiMinus />}
                                </span>
                                USA
                            </h3>
                        </button>
                        <div className="w-full h-[1px] rounded-full bg-primary/50" />
                    </div>
                    {/* Conditionally render states when expanded */}
                    {!isCountryCollapsed("USA") && (
                        <div className="flex flex-row gap-x-20 max-[590px]:flex-col max-[590px]:gap-y-8">
                            <div className="flex flex-col gap-y-8">
                                {firstHalf.map(renderCitySection)}
                            </div>
                            <div className="flex flex-col gap-y-8">
                                {secondHalf.map(renderCitySection)}
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    }, [organizedBranches, isCountryCollapsed, toggleCountryCollapse, renderCitySection]);

    /**
     * Renders a country section for non-USA countries
     * These countries have cities directly (no state organization)
     */
    const renderCountrySection = useCallback((countryData: CountryData) => (
        <div key={countryData.country} className="flex flex-col gap-y-6">
            {/* Country header with collapse toggle */}
            <div className="flex flex-col gap-y-2">
                <button 
                    onClick={() => toggleCountryCollapse(countryData.country)} 
                    className="text-left hover:text-primary transition-colors duration-200"
                >
                    <h3 className="dynamic-subheading text-3xl max-lg:text-2xl font-title text-header font-bold uppercase flex items-center">
                        <span className="mr-2">
                            {isCountryCollapsed(countryData.country) ? <FiPlus /> : <FiMinus />}
                        </span>
                        {countryData.country}
                    </h3>
                </button>
                <div className="w-full h-[1px] rounded-full bg-primary/50" />
            </div>
            {/* Conditionally render cities when expanded */}
            {!isCountryCollapsed(countryData.country) && (
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
                            {/* Dropdown with branch details */}
                            <DropDown 
                                isOpen={selectedCity === cityData.city} 
                                toggleDropdown={() => handleCityClick(cityData.city)}
                                cityData={cityData}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    ), [selectedCity, handleCityClick, isCountryCollapsed, toggleCountryCollapse]);

    // PERFORMANCE: Memoize filtered countries to avoid recalculation on every render
    const nonUSACountries = useMemo(() => {
        return organizedBranches?.filter((country) => country.country !== "USA") || [];
    }, [organizedBranches]);

    return (
        <div className="relative max-w-max w-full mx-auto px-6 md:px-12 py-16">
            {/* Main heading */}
            <h3 className="dynamic-heading text-header font-bold mb-10">
                Our Branches
            </h3>
            {/* Branch sections container */}
            <div className="max-w-[1000px] w-full flex flex-col gap-y-16">
                {/* Render USA section first (if exists) */}
                {organizedBranches && renderUSSection()}
                {/* Render all other countries */}
                {nonUSACountries.map(renderCountrySection)}
            </div>
        </div>
    );
};

export default BranchList;