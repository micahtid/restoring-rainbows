"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { CityData } from "@/utils/utils";

interface DropDownProps {
    isOpen: boolean;
    cityData: CityData;
    toggleDropdown: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ isOpen, toggleDropdown, cityData }) => {
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {                                         // Close drop down if clicked outside
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                toggleDropdown(); 
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [toggleDropdown]);                                                                           // Triggered everytime toggleDropdown is ran!

    return (
        isOpen && (
            <ul
                ref={dropdownRef}
                className="absolute z-10 w-[275px] 
                bg-primary
                max-h-[300px] overflow-y-auto no-scrollbar 
                rounded-sm
                flex flex-col mt-1"
            >
            {cityData.branches.map((branch: any, branchIndex: number) => (
                <div key={branchIndex} className="flex flex-col">
                    <button
                        onClick={() => router.push(`/branches/branch?country=${branch.country}&city=${branch.city}&community=${branch.community}`)}
                        className="cursor-pointer text-white hover:bg-primary-light text-left
                        px-3 py-[10px] transition-colors"
                    >
                        {branch.community}
                    </button>
                    {branchIndex < cityData.branches.length - 1 && (
                        <div className="w-full h-[1px] bg-white/20" />
                    )}
                </div>
            ))}
            </ul>
        )
    );
};

export default DropDown;
