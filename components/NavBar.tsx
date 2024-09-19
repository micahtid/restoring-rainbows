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
        bg-gray-300/50 backdrop-blur-[2px]
        flex flex-col justify-start items-end gap-y-4
        p-8
        ${!isOpen && "hidden"}
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
            <div className="flex flex-col justify-center items-end">
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

const NavBar = () => {
  const { onOpen, isOpen } = useNavModal();

  return (
    <nav
      className="
    fixed top-0
    w-[100vw]
    px-12 py-4 z-50
    flex justify-center items-center bg-red-500"
    >
      <div className="flex justify-between items-center
      max-w-max w-full group">
        <a href="/">
          <img src="/logo_black.png" className="w-[50px]" />
        </a>
        <div
          className="
          flex justify-center items-start gap-x-8
          max-md:hidden"
        >
          {extendedNavItems.map((item, index) => (
            <div 
            key={index}
            className="flex flex-col justify-start items-center gap-y-2 py-12">
              <a href={item.link} className="font-semibold text-black/70 text-lg group">
                {item.label}
              </a>
              {
                item.subItems.map((subItem, index) => (
                  <a 
                  key={index}
                  href={subItem.link}
                  className="hidden group-hover:inline-block">
                    {subItem.label}
                  </a>
                ))
              }
            </div>
          ))}
        </div>
        <button
          className="
          hidden max-md:inline-block
          rounded-lg bg-gray-400/40 shadow-sm
          p-3"
          onClick={onOpen}
        >
          <RxHamburgerMenu size={25} />
        </button>
      </div>
      <NavModal />
    </nav>
  );
};

export default NavBar;
