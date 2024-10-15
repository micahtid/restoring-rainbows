"use client";

import { extendedNavItems } from "@/data";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { IoChevronBackOutline, IoChevronDown } from "react-icons/io5";

import useNavModal from "@/hooks/useNavModal";
import { useState } from "react";

const NavModal = () => {
  const { isOpen, onClose } = useNavModal();

  const [visibleSubItems, setVisibleSubItems] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleSubItems = (index: number) => {
    setVisibleSubItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div
      className={`
        w-[250px] h-[100vh]
        fixed top-0 right-0
        bg-gray-100/50 backdrop-blur-[5px] shadow-lg
        flex flex-col justify-start items-end gap-y-4
        z-[12000]
        p-8
        transform transition-all duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-[300px]"}
        `}
    >
      <button className="mb-8" onClick={onClose}>
        <IoIosClose size={35} />
      </button>
      {extendedNavItems.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-end">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <a
              href={item.link}
              className="text-lg font-semibold text-black/70 text-nowrap"
            >
              {item.label}
            </a>
            {item.subItems.length !== 0 && (
              <button onClick={() => toggleSubItems(index)}>
                {visibleSubItems[index] === true ? (
                  <IoChevronDown />
                ) : (
                  <IoChevronBackOutline />
                )}
              </button>
            )}
          </div>
          {visibleSubItems[index] && (
            <div className="flex flex-col gap-y-2 justify-center items-end mt-2 mb-4">
              {item.subItems.map((subItem, subIndex) => (
                <a key={subIndex} href={subItem.link} className="text-black/70">
                  {subItem.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

import { useEffect } from "react";

const NavBar = () => {
  const { onOpen, isOpen } = useNavModal();

  // Handling Scroll Position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
      fixed top-0 
      w-[100vw] px-12 py-4 
      max-md:px-4
      h-[75px]
      z-[10000] 
      flex justify-center items-center 
      transition-all duration-300
      bg-transparent`}
    >
      <div className="
      flex justify-between items-start 
      max-w-max w-full 
      relative">
        <a href="/" className="z-[11000]">
          <img src="/logo_black.png" className="w-[50px] z-[1100] max-md:hidden" />
        </a>
        <div
          className="
            flex justify-center items-start gap-x-10
            group"
        >
          <div
            style={{
                    backgroundColor: '#d5e3f1',
                    backgroundImage: 'linear-gradient(to bottom right, #abf2d0, #f6fefa)'
                  }}
            className={`
              bg-[#f5e7d4] w-[100vw] h-[172.5px] overflow-hidden
              absolute left-1/2 transform -translate-x-1/2
              ${scrollPosition===0 ? 'opacity-0' : 'opacity-100'}
              -translate-y-[95px] -top-[15px] group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-300
            `}>
          </div>
          {extendedNavItems.map((item, index) => (
            <div
              key={index}
              className="
              flex flex-col justify-start items-end gap-y-2 
              mt-3 relative max-md:hidden"
            >
              <a href={item.link} className="font-semibold text-black/70 text-lg">
                {item.label}
              </a>
              <div className="absolute left-0 top-[30px] flex flex-col items-start">
                {item.subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.link}
                    className="
                      opacity-0 text-left text-nowrap
                      group-hover:opacity-100
                      transition-opacity 
                      duration-500
                      text-lg font-semibold text-black/70"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden max-md:flex max-md:justify-between max-md:items-center w-full">
          <a href="/" className="z-[11000] flex items-center">
            <img
              src="/logo_black.png"
              className="w-[50px] h-[50px] object-cover z-[1100]"
            />
          </a>
          <button
            className="z-[11000] p-3"
            onClick={onOpen}
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>
      </div>
      <NavModal />
    </nav>
  );
};

export default NavBar;
