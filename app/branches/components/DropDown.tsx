"use client";

import React, { useEffect, useRef } from "react";
import { CityData } from "@/utils/utils";

interface DropDownProps {
    isOpen: boolean;
    cityData: CityData;
    toggleDropdown: () => void;
    // children: React.ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({ isOpen, toggleDropdown, cityData }) => {
    const dropdownRef = useRef<HTMLUListElement | null>(null);

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                toggleDropdown(); 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleDropdown]);

    return (
        isOpen && (
            <ul
                ref={dropdownRef}
                className="absolute z-10 bg-[#3D3C35] rounded-md w-[275px] max-h-[300px] overflow-y-auto shadow-sm flex flex-col gap-1"
            >
                {cityData.branches.map((branch: any, branchIndex: number) => (
                    <button
                        key={branchIndex}
                        className="cursor-pointer text-white rounded-md px-4 py-2 max-[500px]:py-3"
                    >
                        {branch.community}
                    </button>
                ))}
            </ul>
        )
    );
};

export default DropDown;
