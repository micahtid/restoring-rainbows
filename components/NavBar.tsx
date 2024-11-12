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
      backgroundColor: '#d5e3f1',
      backgroundImage: 'linear-gradient(to right, #eaf4ff 0%, #e5f4ef 50%, #eaf4ff 100%)',
    }}
    className={`
      bg-[#f5e7d4] w-[135vw] h-[172.5px] overflow-hidden
      absolute left-1/2 transform -translate-x-1/2
      ${scrollPosition === 0 ? 'opacity-0' : 'opacity-100'}
      -translate-y-[95px] -top-[15px]
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
        w-[100vw] h-[100vh] fixed top-0 right-0 bg-white
        backdrop-blur-[5px] shadow-lg z-[12000]
        flex flex-col justify-start items-end gap-y-4
        px-x py-4
        ${!isOpen && "hidden"}
      `}
    >

      <div className="flex justify-between items-start w-full">
        <a href="/" className="-mt-[18px]">
            <img src="/main_logo_blue.png" className="h-[75px] w-auto" />
          </a>
        <button className="mb-8" onClick={onClose}>
          <IoIosClose size={50} />
        </button>
      </div>

      {extendedNavItems.map((item, index) => (
        <button 
        key={index} 
        className="w-full
        flex flex-col justify-center items-start
        border-b-2 pb-4"
        onClick={() => {
          if (item.subItems.length) {
            toggleSubItems(index)
          }
        }}>
          <div className="w-full
          flex flex-row justify-between items-center gap-x-2">
            <a href={item.link} className="text-lg uppercase font-bold text-black/70 text-nowrap">
              {item.label}
            </a>
            {item.subItems.length > 0 && (
              <FaChevronRight className={`${visibleSubItems[index] && "rotate-90"} transition-all duration-300 text-gray-500`} />
            )}
          </div>

          {visibleSubItems[index] && (
            <div className="flex flex-col gap-y-2 items-start mt-2 mb-4">
              {item.subItems.map((subItem, subIndex) => (
                <a key={subIndex} href={subItem.link} className="text-lg text-black/70">
                  {subItem.label}
                </a>
              ))}
            </div>
          )}
        </button>
      ))}

      <OutlineButton className="w-[150px] py-2 mt-4
      bg-primary text-white hover:bg-transparent hover:text-body
      transition-all duration-500
      flex justify-center items-center
      self-start shadow-sm">
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 w-[100vw] px-x py-4 h-[75px] z-[10000] 
      flex justify-center items-center transition-all duration-300 bg-transparent
    `}>
      <div className="flex justify-between items-start gap-x-16 max-w-max w-full">
        
        {/* Full Navigation (Desktop) */}
        <div className="flex justify-end items-start w-full max-[1025px]:hidden relative group">
          <GradientBackground scrollPosition={scrollPosition} onHover={true} />

          <a href="/" className="z-[11000]">
            <img src="/main_logo_black.png" className="h-[75px] w-auto z-[1100]
            absolute left-0 -top-[15px]" />
          </a>

          <div className="flex justify-center items-center gap-x-8">
            {extendedNavItems.map((item, index) => (
              <div key={index} className="
                flex flex-col justify-start items-end gap-y-2 mt-3 relative 
                max-[1025px]:hidden
              ">
                <a href={item.link} className="font-semibold text-black/70 text-lg">
                  {item.label}
                </a>
                <div className="absolute left-0 top-[30px] flex flex-col items-start">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="
                        opacity-0 text-left text-nowrap group-hover:opacity-100 
                        transition-opacity duration-500 text-lg font-semibold text-black/70
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
        <div className="flex justify-center items-center mt-[1px] max-[1025px]:hidden">
          <OutlineButton className="w-[100px] py-[8px] flex justify-center items-center border-[2px] border-primary hover:border-transparent transition-all duration-700">
            <a className="text-lg font-semibold text-black/70" href="https://www.zeffy.com/fundraising/donate-to-make-a-difference-542">
              Donate
            </a>
          </OutlineButton>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="hidden max-[1025px]:flex max-[1025px]:justify-between max-[1025px]:items-center w-full relative">
          <GradientBackground scrollPosition={scrollPosition} onHover={false} />
          
          <a href="/" className="z-[11000]">
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