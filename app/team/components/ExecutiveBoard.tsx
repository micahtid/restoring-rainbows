"use client";

import { organizeByPosition } from "@/utils/utils";
import { DocumentData } from "firebase/firestore";

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
    <div className="max-w-max w-full mx-auto
    px-4 py-8
    flex flex-col justify-start items-start gap-y-12">
        <h3
        className="dynamic-subheading">
          Our Executive Board
        </h3>
        <div className="flex flex-col justify-start items-start gap-y-6">
          {
            executiveBoard && organizeByPosition(executiveBoard).map((position, index) => (
              <div
              key={index}
              className="flex flex-col gap-y-12">
                <h3 className="text-2xl font-bold uppercase">
                  {position.categorization}
                </h3>
                <div 
                className="flex justify-start items-start flex-wrap gap-5">
                  {position.people.map((item, index) => (
                    <div className="flex flex-col justify-start items-center gap-y-6">
                      <button
                      key={index}
                      className="w-[250px] h-[250px]">
                        <img src={item.picture} className="w-full h-full object-cover rounded-full drop-shadow-md"/>
                      </button>
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold">{item.firstName} {item.lastName}</h3>
                        <p className="text-xl text-gray-600">{item.role}</p>
                      </div>
                      <OutlineButton
                      onClick={() => {
                        setCurrentMember(item);
                        onOpen();
                      }}>
                        Read Bio
                      </OutlineButton>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default ExecutiveBoard