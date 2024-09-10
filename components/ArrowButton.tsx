"use client";

import { useState } from "react";

interface ArrowButtonProps {
    children: React.ReactNode;
    link: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ children, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[74px] h-[17px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* First SVG (Arrow) */}
      <svg
        viewBox="0 0 74 17"
        width="74px"
        height="17px"
        className={`absolute transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <path
          d="M20.7.3l-1.3 1.3 6.7 6H0v1.8h26.1l-6.7 6 1.3 1.3 9.4-8.2z"
          fill="rgba(13, 156, 144, 1)"
        ></path>
      </svg>

      {/* Second SVG (Wave) */}

      <svg viewBox="0 0 70 13" height="13" width="70"
        className={`absolute transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
        <path fill="none" stroke="#0d38d3" stroke-width="2" d="
          M0,6.5 
          C4.75,13 14.25,13 19,6.5 
          C23.75,0 33.25,0 38,6.5 
          C42.75,13 52.25,13 57,6.5 
          C61.75,0 66,0 70,6.5" />
        <path fill="#0d38d3" stroke="#0d38d3" stroke-width="2" d="
          M65,1 
          L70,6.5 
          L65,12" />
      </svg>
    </div>
  );
};

export default ArrowButton