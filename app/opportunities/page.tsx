"use client";

import { useData } from "@/providers/useData";
import Loader from "@/components/Loader";

import OpportunityHeader from "./components/OpportunityHeader";
import OpportunityList from "./components/OpportunityList";

const Opportunities = () => {
  const { opportunities } = useData();

  if (!opportunities) {
    return <Loader />;
  }

  return (
    <div className="
      relative w-full min-h-screen 
      py-40
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
        <title>Opportunities Background</title>
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
        flex flex-col justify-start items-start 
        px-x max-lg:px-4
        gap-y-28
        fade-in-animation
      ">

        <div className="w-full">
          <OpportunityHeader />
          <OpportunityList opportunities={opportunities} />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;