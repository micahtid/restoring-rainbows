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
                  className="flex justify-start items-start flex-wrap gap-5
                  max-[561px]:flex-col max-[561px]:gap-y-12 max-[561px]:items-center max-[561px]:w-full">
                    {position.people.map((item, index) => (
                      <div 
                      key={index}
                      className="flex flex-col justify-start items-center gap-y-6">
                        <button
                        className="w-[250px] h-[250px]">
                          <img src={item.picture} className="w-full h-full object-cover rounded-full drop-shadow-md"/>
                        </button>
                        <div className="flex flex-col justify-center items-center
                        hover:cursor-pointer">
                          <button className="flex gap-x-4 justify-center items-center
                          hover:underline"
                          onClick={
                            () => {
                              setCurrentMember(item);
                              onOpen();
                            }
                          }>
                            <h3 className="dynamic-text font-semibold">{item.firstName} {item.lastName}</h3>
                            <IoOpenOutline size={18}/>
                          </button>
                          <p className="dynamic-text text-gray-600">{item.role}</p>
                        </div>
                      </div>
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