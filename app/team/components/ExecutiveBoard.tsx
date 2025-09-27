"use client";

import { organizeByPosition } from "@/utils/utils";
import { DocumentData } from "firebase/firestore";
import { IoOpenOutline } from "react-icons/io5";

import useExecutiveMemberModal from "@/hooks/useExecutiveMemberModal";

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
      flex flex-col justify-start items-start gap-y-12
      fade-in-animation"
      >
          <h3
          className="dynamic-subheading text-header">
            Our Executive Board
          </h3>
          <div className="flex flex-col justify-start items-start gap-y-36 w-full">
            {
              executiveBoard && organizeByPosition(executiveBoard).map((position, index) => (
                <div
                key={index}
                className="flex flex-col gap-y-14 w-full">
                  <div className="">
                    <h3 className="text-2xl font-bold uppercase text-header">
                      {position.categorization}
                    </h3>
                    <div className="w-full mt-2 h-[1.5px] bg-header" />
                  </div>
                  <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 w-full justify-items-center">
                    {position.people.map((item, index) => (
                      <button
                      onClick={
                        () => {
                          setCurrentMember(item);
                          onOpen();
                        }
                      } 
                      key={index}
                      className="flex flex-col justify-start items-center gap-y-6
                      w-[250px]
                      ">
                        <div
                        className="w-full aspect-square">
                          <img src={item.picture} className="w-full h-full object-cover rounded-full drop-shadow-md"/>
                        </div>
                        <div className="
                        w-full
                        flex flex-col justify-center items-center
                        hover:cursor-pointer
                        ">
                          <h3 className="
                          w-full
                          dynamic-text font-semibold
                          flex gap-x-2 items-center justify-center
                          text-nowrap overflow-ellipsis overflow-x-hidden text-center
                          ">
                            {item.firstName} {item.lastName} <IoOpenOutline size={18} />
                          </h3>
                          <p className="
                          w-full
                          dynamic-label text-gray-600 text-center
                          ">
                            {item.role}
                          </p>
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