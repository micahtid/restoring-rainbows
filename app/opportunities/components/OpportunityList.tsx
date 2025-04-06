"use client";

import { useRouter } from "next/navigation";
import { DocumentData } from "firebase/firestore";

import { FaClock } from "react-icons/fa6";

interface OpportunityListProps {
  opportunities: DocumentData[] | null;
}

const OpportunityList: React.FC<OpportunityListProps> = ({ opportunities }) => {
  const router = useRouter();

  const handleOpportunityClick = (title: string) => {
    router.push(`/opportunities/opportunity?title=${encodeURIComponent(title)}`);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-8 w-full">
        {opportunities?.map((opportunity, index) => (
          <div 
            key={index} 
            className="
              flex flex-col gap-y-1
              w-full p-6 rounded-md
              bg-white shadow-sm 
              cursor-pointer
            "
            onClick={() => handleOpportunityClick(opportunity.title)}
          >
            <h3 className="
              dynamic-subheading text-2xl text-header font-black 
              mb-3
            ">
              {opportunity.title}
            </h3>


            <div className="flex items-center gap-x-4">
              <FaClock className="text-gray-500" size={25} />
              <p className="dynamic-text font-semibold text-gray-700">
                Deadline: {opportunity.deadline}
              </p>
            </div>


            <div className="space-y-1 mt-6">
              <p className="dynamic-text font-semibold text-gray-700">Description</p>
              <p className="dynamic-text text-gray-500">{opportunity.summary}</p>
            </div>


            <div className="w-full h-[1px] bg-header/30 my-4" />

            <button 
              onClick={() => handleOpportunityClick(opportunity.title)}
              className="
                text-left 
                dynamic-text font-semibold text-primary 
                hover:underline
              "
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunityList;
