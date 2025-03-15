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
                className="
                    absolute z-50 w-[275px] transform -translate-x-[14px] translate-y-[3px]
                    bg-white/60 backdrop-blur-sm border-[1px] border-black/20 rounded-md
                    max-h-[300px] overflow-y-auto no-scrollbar
                    mt-1"
            >
                {cityData.branches.map((branch: any, branchIndex: number) => (
                    <div 
                        key={branchIndex} 
                        className="flex flex-col last:mb-0"
                    >
                        <button
                            onClick={() => router.push(`/branches/branch?country=${branch.country}&city=${branch.city}&community=${branch.community}`)}
                            className="
                                dynamic-text text-body text-left
                                hover:text-primary transition-all duration-100
                                px-3 py-2.5"
                        >
                            {branch.community}
                        </button>
                        {branchIndex < cityData.branches.length - 1 && (
                            <div className="w-full h-[1px] bg-black/20" />
                        )}
                    </div>
                ))}
            </ul>
        )
    );
};

export default DropDown;
