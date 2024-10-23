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
                shadow-sm
                flex flex-col"
            >
            {cityData.branches.map((branch: any, branchIndex: number) => (
                <>
                    <button
                        key={branchIndex}
                        onClick={() => router.push(`/branches/branch?country=${branch.country}&city=${branch.city}&community=${branch.community}`)}
                        className="cursor-pointer text-white max-[500px]:py-3 text-left
                        px-4 py-2"
                    >
                        {branch.community}
                    </button>
                    <div className="w-full h-[1px] bg-white" />
                </>
            ))}
            </ul>
        )
    );
};

export default DropDown;
