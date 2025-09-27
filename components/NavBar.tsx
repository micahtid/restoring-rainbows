"use client";

import React, { useState, useEffect } from "react";
import { extendedNavItems } from "@/data";

import { IoIosClose } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

import OutlineButton from "./OutlineButton";
import useNavModal from "@/hooks/useNavModal";

// Gradient Background Component
interface GradientBackgroundProps {
  scrollPosition: number;
  onHover: boolean;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ scrollPosition, onHover }) => (
  <div
    style={{
      backgroundColor: "#d5e3f1",
      backgroundImage: "linear-gradient(to right, #eaf4ff 0%, #e5f4ef 50%, #eaf4ff 100%)",
    }}
    className={`
      absolute left-1/2 -top-[15px] overflow-hidden w-[135vw] h-[172.5px] bg-[#f5e7d4] transform -translate-x-1/2 -translate-y-[95px]
      ${scrollPosition === 0 ? "opacity-0" : "opacity-100"}
      ${onHover && `
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-300
      `}
    `}
  />
);

// Navigation Modal Component
const NavModal: React.FC = () => {
  const { isOpen, onClose } = useNavModal();
  const [visibleSubItems, setVisibleSubItems] = useState<{ [key: number]: boolean }>({});

  const toggleSubItems = (index: number) => {
    setVisibleSubItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div
      className={`
        fixed top-0 right-0 flex flex-col w-[100vw] h-[100vh] justify-start items-end gap-y-4 px-x py-4 bg-white shadow-lg backdrop-blur-[5px] z-[13000] scroll cursor-all-scroll
        ${!isOpen && "hidden"}
      `}
    >

      <svg xmlns="http://www.w3.org/2000/svg" width="1036px" height="1020px" viewBox="0 0 1036 1020" version="1.1"
      className="absolute left-1/2 -z-10 opacity-50 transform -translate-x-1/2">
        <title>Stroke 1</title>
        <g id="Desktop" stroke="#e3f0ff" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g id="Team" transform="translate(-202.000000, -120.000000)" stroke="#e3f0ff" strokeWidth="60">
            <g id="Hero" transform="translate(-0.000000, 0.000000)">
              <g id="Group-4" transform="translate(0.000000, 0.000000)">
                <path d="M232,150 L404.470455,153.818536 C524.152349,157.170472 622.574154,208.599144 583.834721,271.026662 L559.419838,310.370095 C532.965744,352.999409 561.957027,376.908478 630.041057,401.898318 L776.892021,462.34981 C873.335819,497.751029 884.956258,596.504535 800.692081,640.325648 L541.859817,774.927299 C419.187267,838.722294 508.628756,936.57914 677.048611,930.742415 C763.941783,927.733403 842.341491,959.320302 863.395712,1005.82718 L873.244013,1027.58033 C892.016988,1069.04595 956.876674,1099.2471 1034.2693,1102.56109 L1208,1110" id="Stroke-1">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div className="flex justify-between items-start w-full">
        <a href="/" className="-mt-[18px]">
            {/* ISSUE: Change to <Image /> */}
            <img src="/main_logo_blue.png" className="w-auto h-[75px]" />
          </a>
        <button className="mb-8" onClick={onClose}>
          <IoIosClose size={50} />
        </button>
      </div>

      {extendedNavItems.map((item, index) => (
        <button
        key={index}
        className="flex w-full flex-col justify-center items-start pb-4 border-b-2"
        onClick={() => {
          if (item.subItems.length) {
            toggleSubItems(index)
          }
        }}>
          <div className="flex w-full flex-row justify-between items-center gap-x-2">
            <a href={item.link} className="text-lg font-bold uppercase text-black/70 text-nowrap">
              {item.label}
            </a>
            {item.subItems.length > 0 && (
              <FaChevronRight className={`text-gray-500 transition-all duration-300 ${visibleSubItems[index] && "rotate-90"}`} />
            )}
          </div>

          {visibleSubItems[index] && (
            <div className="flex flex-col items-start gap-y-2 mt-2 mb-4">
              {item.subItems.map((subItem, subIndex) => (
                <a key={subIndex} href={subItem.link} className="text-lg text-black/70">
                  {subItem.label}
                </a>
              ))}
            </div>
          )}
        </button>
      ))}

      <OutlineButton className="flex w-[150px] justify-center items-center self-start py-2 mt-4 bg-primary text-white shadow-sm transition-all duration-500 hover:bg-transparent hover:text-body">
        <a className="dynamic-text font-medium"
        href="https://www.zeffy.com/fundraising/donate-to-make-a-difference-542">Donate</a>
      </OutlineButton>
    </div>
  );
};

// Main Navigation Bar Component
const NavBar: React.FC = () => {
  const { onOpen } = useNavModal();
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 flex w-[100vw] h-[75px] justify-center items-center px-x py-4 bg-transparent z-[10000] transition-all duration-300
    `}>
      <div className="flex justify-between items-start gap-x-16 max-w-max w-full">

        {/* Full Navigation (Desktop) */}
        <div className="flex justify-end items-start w-full max-[1025px]:hidden relative group">
          <GradientBackground scrollPosition={scrollPosition} onHover={true} />

          <a href="/" className="z-[11000]">
            {/* ISSUE: Change to <Image /> */}
            <img src="/main_logo_black.png" className="h-[75px] w-auto z-[1100]
            absolute left-0 -top-[15px]" />
          </a>

          {/* Abitrary Values! */}
          <div className="flex justify-center items-center gap-x-8 w-[90%] max-lg:w-[70%]">
            {extendedNavItems.map((item, index) => (
              <div key={index} className="
                flex flex-col justify-start items-end gap-y-2 mt-3 relative
                max-[1025px]:hidden
              ">
                <a href={item.link} className="font-bold uppercase text-black/70">
                  {item.label}
                </a>
                <div className="absolute left-0 top-[30px] flex flex-col items-start">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="
                        opacity-0 text-left text-nowrap group-hover:opacity-100
                        transition-opacity duration-500 uppercase font-bold text-black/70
                      "
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donate Button */}
        <div className="flex justify-center items-center mt-[3px] max-[1025px]:hidden">
          <OutlineButton className="w-[100px] py-[5px] flex justify-center items-center border-[2px] border-black/10 hover:border-transparent transition-all duration-700">
            <a className="uppercase font-bold text-black/70" href="https://www.zeffy.com/fundraising/donate-to-make-a-difference-542">
              Donate
            </a>
          </OutlineButton>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="hidden max-[1025px]:flex max-[1025px]:justify-between max-[1025px]:items-center w-full relative">
          <GradientBackground scrollPosition={scrollPosition} onHover={false} />

          <a href="/" className="z-[11000]">
            {/* ISSUE: Change to <Image /> */}
            <img src="/main_logo_black.png" className="h-[75px] w-auto z-[1100]
            absolute left-0 -top-[15px]" />
          </a>

          <button className="z-[11000] p-3
          dynamic-text text-header font-bold uppercase"
          onClick={onOpen}>
            Menu
          </button>
        </div>
      </div>

      {/* Navigation Modal */}
      <NavModal />
    </nav>
  );
};

export default NavBar;