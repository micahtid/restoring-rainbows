"use client";

import Highlight from "@/components/Highlight";

const OpportunityHeader: React.FC = () => {
  return (
    <div className="w-full mb-16">
      <Highlight text="Join Us" className="mb-6" />
      <h2 className="dynamic-heading text-header mb-8">Explore Our Opportunities</h2>
      <p className="dynamic-text text-body max-w-[850px]">
        Discover a range of opportunities to get involved, develop your skills, and make a difference. 
        Click on any opportunity to learn more and apply.
      </p>
    </div>
  );
};

export default OpportunityHeader;
