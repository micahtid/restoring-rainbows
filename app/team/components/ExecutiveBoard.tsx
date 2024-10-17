"use client";

import { organizeByPosition } from "@/utils/utils";
import { DocumentData } from "firebase/firestore";
import { IoOpenOutline } from "react-icons/io5";


import useExecutiveMemberModal from "@/hooks/useExecutiveMemberModal";

import OutlineButton from "@/components/OutlineButton";

interface ExecutiveBoardProps {
  executiveBoard: DocumentData[] | null;
}

const ExecutiveBoard: React.FC<ExecutiveBoardProps> = ({ executiveBoard }) => {
  const {
    onOpen,
    setCurrentMember
  } = useExecutiveMemberModal();

  return (
    <div className="w-full flex justify-center items-center"
    style={{
      background: 'radial-gradient(circle at top center, rgba(243, 226, 202, 0.3), rgba(250, 250, 250, 0.3))'
    }}>
      <div className="max-w-max w-full
      px-x pb-8 pt-28
      flex flex-col justify-start items-start gap-y-12"
      >
          <h3
          className="dynamic-subheading text-header">
            Our Executive Board
          </h3>
          <div className="flex flex-col justify-start items-start gap-y-28 w-full">
            {
              executiveBoard && organizeByPosition(executiveBoard).map((position, index) => (
                <div
                key={index}
                className="flex flex-col gap-y-14 w-full">
                  <div className="">
                    <h3 className="text-2xl font-bold uppercase text-header ">
                      {position.categorization}
                    </h3>
                    <div className="max-w-[800px] w-full h-[2px] bg-header" />
                  </div>
                  <div 
                  className="flex justify-start items-start flex-wrap gap-5">
                    {position.people.map((item, index) => (
                      <button
                      onClick={
                        () => {
                          setCurrentMember(item);
                          onOpen();
                        }
                      } 
                      key={index}
                      className="mb-6 flex flex-col justify-start items-center gap-y-6
                      w-[250px] max-[561px]:w-[45%]
                      max-[561px]:items-start">
                        <div
                        className="w-full aspect-square">
                          <img src={item.picture} className="w-full h-full object-cover rounded-full drop-shadow-md"/>
                        </div>
                        <div className="
                        w-full
                        flex flex-col justify-center items-center
                        max-[561px]:justify-start 
                        hover:cursor-pointer
                        max-[561px]:items-start">
                          <h3 className="
                          w-full 
                          dynamic-text font-semibold
                          flex gap-x-2 items-center justify-center max-[561px]:justify-start max-[561px]:inline-block
                          text-nowrap overflow-ellipsis overflow-x-hidden text-center max-[561px]:text-left
                          max-[561px]:text-base">{item.firstName} {item.lastName} <IoOpenOutline size={18} className="max-[561px]:hidden"/></h3>
                          <p className="dynamic-text text-gray-600
                          text-nowrap 
                          max-[561px]:text-base">{item.role}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default ExecutiveBoard