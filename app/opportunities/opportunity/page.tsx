"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { DocumentData } from 'firebase/firestore';
import { useData } from '@/providers/useData';

import { IoIosArrowBack } from "react-icons/io";
import { FaClock, FaLink } from "react-icons/fa6";
import { PiMapPinFill } from "react-icons/pi";

import Loader from '@/components/Loader';

interface OpportunityContentProps {
  opportunities: DocumentData[] | null;
}

const OpportunityContent: React.FC<OpportunityContentProps> = ({ opportunities }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');

  const [opportunity, setOpportunity] = useState<DocumentData | null>(null);

  useEffect(() => {
    if (title && opportunities) {
      const matchedOpportunity = opportunities.find((opp) => opp.title === decodeURIComponent(title));
      setOpportunity(matchedOpportunity || null);
    }
  }, [title, opportunities]);

  if (!opportunity) {
    return <Loader />;
  }

  return (
    <div className="
      relative w-full min-h-screen 
      px-x max-lg:px-4 py-24
    ">

      <div 
        className="fixed inset-0 z-[-1]" 
        style={{
          backgroundColor: '#d5e3f1',
          backgroundImage: 'linear-gradient(135deg, #e3f0ff 0%, #e6f4f0 100%)',
        }}
      />
      

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 1036 1020" 
        version="1.1"
        className="absolute inset-0 z-0 opacity-10"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Opportunity Background</title>
        <g id="Desktop" stroke="#73a0e1" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g id="Team" transform="translate(-202.000000, -120.000000)" stroke="#73a0e1" strokeWidth="60">
            <g id="Hero" transform="translate(-0.000000, 0.000000)">
              <g id="Group-4" transform="translate(0.000000, 0.000000)">
                <path d="M232,150 L404.470455,153.818536 C524.152349,157.170472 622.574154,208.599144 583.834721,271.026662 L559.419838,310.370095 C532.965744,352.999409 561.957027,376.908478 630.041057,401.898318 L776.892021,462.34981 C873.335819,497.751029 884.956258,596.504535 800.692081,640.325648 L541.859817,774.927299 C419.187267,838.722294 508.628756,936.57914 677.048611,930.742415 C763.941783,927.733403 842.341491,959.320302 863.395712,1005.82718 L873.244013,1027.58033 C892.016988,1069.04595 956.876674,1099.2471 1034.2693,1102.56109 L1208,1110" id="Stroke-1">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>


      <div className="
        max-w-max w-full mx-auto 
        relative z-10 
        flex flex-col gap-y-6 fade-in-animation 
        mt-16 bg-white px-x py-12 rounded-md
      ">

        <a 
          href="/opportunities" 
          className="
            flex items-center gap-x-2
            w-min mb-6 
            px-4 py-1
            border rounded-full border-gray-400
            text-gray-700 text-sm font-semibold
            hover:underline
          "
        >
          <IoIosArrowBack /> Return
        </a>


        <h3 className="dynamic-heading text-header text-3xl">{opportunity.title}</h3>


        <div className="w-full h-[1px] bg-header/40" /> 


        <div className="flex items-center gap-x-4
        max-lg:flex-col max-lg:items-start">
          <div className="flex items-center gap-x-2 text-gray-400 font-semibold">
            <FaClock />
            <p>Deadline: <span className="text-gray-800">{opportunity.deadline}</span></p>
          </div>
          <div className="flex items-center gap-x-2 text-gray-400 font-semibold">
            <PiMapPinFill />
            <p>{opportunity.locationType}</p>
          </div>
        </div>

        <a 
          href={opportunity.applicationLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="
            w-min text-nowrap 
            px-6 py-3 
            bg-primary rounded-full 
            text-lg font-semibold text-white
          "
        >
          Apply Now
        </a>

        <div className="mt-8 flex flex-col gap-y-2">
          <h3 className="dynamic-subheading text-header text-2xl">Benefits</h3>
          <p className="dynamic-text text-gray-500">{opportunity.benefits}</p>
        </div>

        <div className="mt-8 flex flex-col gap-y-2">
          <h3 className="dynamic-subheading text-header text-2xl">Description</h3>
          <p className="dynamic-text text-gray-500">{opportunity.description}</p>
          
          <a 
            href={opportunity.guidelinesLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="
              flex items-center gap-x-2
              mt-2
              text-lg text-primary underline 
            "
          >
            View Guidelines <FaLink />
          </a>
        </div>
      </div>
    </div>
  );
};

const Opportunity = () => {
  const { opportunities } = useData();

  if (!opportunities) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <OpportunityContent opportunities={opportunities} />
    </Suspense>
  );
};

export default Opportunity;