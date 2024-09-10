'use client';

import useBranchModal from "@/hooks/useBranchModal";
import { useData } from "@/providers/useData";
import { deleteBranch } from "@/utils/database";

import DataLine from "./DataLine";

const BranchDashboard = () => {
  const {
    onOpen,
    setCurrentBranch,
    setNewBranch,
    updated,
    setUpdated
  } = useBranchModal();

  const {
    branches
  } = useData();

  return (
    <div className="flex flex-col justify-start items-center gap-y-6
    py-12 w-full max-w-max">
      <h3 className="text-5xl font-bold">Branches</h3>
      <div className="flex flex-col justify-start items-center gap-y-2 w-full">
        {branches?.map((branch, index) => (
          <DataLine
          key={index}
          onClick={() => {
            setNewBranch(false);
            setCurrentBranch(branch);
            setUpdated(!updated);
            onOpen(); 
          }} 
          onClickDelete={() => {
            deleteBranch(branch);
          }}
          display={`${branch.country} ${branch.state} ${branch.city}`}/>
        ))}
      </div>
      <button 
      className="bg-primary px-4 py-2 rounded-full text-white"
      onClick={() => {
        setNewBranch(true);
        setCurrentBranch(null);
        setUpdated(!updated);
        onOpen();
      }}>
        Create Branch
      </button>
    </div>  
  )
}

export default BranchDashboard