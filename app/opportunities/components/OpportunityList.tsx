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

  // Sort opportunities alphabetically by title
  const sortedOpportunities = opportunities ? [...opportunities].sort((a, b) => 
    a.title.localeCompare(b.title)
  ) : null;

  return (
    <div className="w-full">
      <div className="
      grid grid-cols-2 gap-x-4 gap-y-8
      max-lg:flex max-lg:flex-col
      w-full">
        {sortedOpportunities?.map((opportunity, index) => (
          <div 
            key={index} 
            className="
              flex flex-col gap-y-1
              w-full p-6 rounded-md
              bg-white shadow-sm 
              cursor-pointer
            "
            onClick={() => {
  if (opportunity.redirectLink) {
    window.location.href = opportunity.redirectLink;
  } else {
    handleOpportunityClick(opportunity.title);
  }
}}
          >
            <h3 className="
              dynamic-subheading text-2xl text-header font-black 
              mb-3
            ">
              {opportunity.title}
            </h3>


            <div className="flex items-center gap-x-3">
              <FaClock className="text-gray-500" size={25} />
              <p className="dynamic-text font-medium text-gray-700
              text-nowrap overflow-hidden overflow-ellipsis">
                Deadline: {opportunity.deadline}
              </p>
            </div>

            <div className="space-y-1 mt-6 h-full">
              <p className="dynamic-text uppercase font-semibold text-gray-700">Description</p>
              <p className="dynamic-text text-gray-500">{opportunity.summary}</p>
            </div>

            <div className="w-full h-[1px] bg-header/30 my-4" />

            {opportunity.redirectLink ? (
              <a
                href={opportunity.redirectLink}
                className="text-left dynamic-text font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More →
              </a>
            ) : (
              <button 
                onClick={() => {
  if (opportunity.redirectLink) {
    window.location.href = opportunity.redirectLink;
  } else {
    handleOpportunityClick(opportunity.title);
  }
}}
                className="text-left dynamic-text font-medium text-primary hover:underline"
              >
                Learn More →
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunityList;
