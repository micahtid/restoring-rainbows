import { useData } from "@/providers/useData";
import useExecutiveBoardModal from "@/hooks/useExecutiveBoardModal";
import { deleteExecutiveBoardMember } from "@/utils/database";

import DataLine from "./DataLine";

const ExecutiveDashboard = () => {
  const {
    executiveBoard
  } = useData();

  const {
    onOpen,
    setNewExecutiveBoardMember,
    setExecutiveBoardMember,
    setUpdated,
    updated
  } = useExecutiveBoardModal();

  return (
    <div
      className="flex flex-col justify-start items-start gap-y-8 w-full"
    >
      <h3 className="text-4xl font-bold text-header">Executive Board Members</h3>
      <div className="flex flex-col justify-start items-center gap-y-2 w-full">
          {executiveBoard?.map((member, index) => (
              <DataLine
              key={index}
              onClick={() => {
                setNewExecutiveBoardMember(false);
                setExecutiveBoardMember(member);
                setUpdated(!updated);
                onOpen(); 
              }} 
              onClickDelete={() => {
                deleteExecutiveBoardMember(member);
              }}
              display={`${member.firstName} ${member.lastName}`}/>
            ))}
      </div>
        <button 
        className="bg-primary px-5 py-2 rounded-full text-white"
        onClick={() => {
          setNewExecutiveBoardMember(true);
          setExecutiveBoardMember(null);
          setUpdated(!updated);
          onOpen();
        }}>
          Add Executive Member
        </button>
    </div>
  );
};

export default ExecutiveDashboard;
