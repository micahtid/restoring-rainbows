'use client';

import useOpportunityModal from "@/hooks/useOpportunityModal";
import { useData } from "@/providers/useData";
import { deleteOpportunity } from "@/utils/database";

import DataLine from "./DataLine";

const OpportunityDashboard = () => {
  const {
    onOpen,
    setCurrentOpportunity,
    setNewOpportunity,
    updated,
    setUpdated
  } = useOpportunityModal();

  const {
    opportunities
  } = useData();

  return (
    <div className="flex flex-col justify-start items-start gap-y-8 w-full">
      <h3 className="text-4xl font-bold text-header">Opportunities</h3>
      <div className="flex flex-col justify-start items-start gap-y-2 w-full">
        {opportunities?.map((opportunity, index) => (
          <DataLine
          key={index}
          onClick={() => {
            setNewOpportunity(false);
            setCurrentOpportunity(opportunity);
            setUpdated(!updated);
            onOpen(); 
          }} 
          onClickDelete={() => {
            deleteOpportunity(opportunity);
          }}
          display={`${opportunity.title} - Due: ${opportunity.deadline} (${opportunity.locationType})`}/>
        ))}
      </div>
      <button 
      className="bg-primary px-5 py-2 rounded-full text-white"
      onClick={() => {
        setNewOpportunity(true);
        setCurrentOpportunity(null);
        setUpdated(!updated);
        onOpen();
      }}>
        Create Opportunity
      </button>
    </div>  
  )
}

export default OpportunityDashboard