import { takeActionPageSections } from "@/data";

import OutlineButton from "@/components/OutlineButton";

const StartABranch = () => {
  return (
    <div className='relative w-full h-full pt-20 pb-20 min-h-[1200px]'>
      <div 
        className='fixed inset-0 z-[-1]' 
        style={{
          backgroundColor: '#d5e3f1',
          backgroundImage: 'linear-gradient(to bottom right, #e3f0ff, #e6f4f0)',
          opacity: 0.7, 
        }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="1036px" height="1020px" viewBox="0 0 1036 1020" version="1.1"
      className="absolute left-1/2 transform -translate-x-1/2 top-[100px]">
        <title>Stroke 1</title>
        <g id="Desktop" stroke="#e3f0ff" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <g id="Team" transform="translate(-202.000000, -120.000000)" stroke="#e3f0ff" stroke-width="60">
            <g id="Hero" transform="translate(-0.000000, 0.000000)">
              <g id="Group-4" transform="translate(0.000000, 0.000000)">
                <path d="M232,150 L404.470455,153.818536 C524.152349,157.170472 622.574154,208.599144 583.834721,271.026662 L559.419838,310.370095 C532.965744,352.999409 561.957027,376.908478 630.041057,401.898318 L776.892021,462.34981 C873.335819,497.751029 884.956258,596.504535 800.692081,640.325648 L541.859817,774.927299 C419.187267,838.722294 508.628756,936.57914 677.048611,930.742415 C763.941783,927.733403 842.341491,959.320302 863.395712,1005.82718 L873.244013,1027.58033 C892.016988,1069.04595 956.876674,1099.2471 1034.2693,1102.56109 L1208,1110" id="Stroke-1">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div className='max-w-max w-full mx-auto 
      px-4 py-20 relative 
      flex flex-col justify-start items-start gap-y-44
      fade-in-animation'>
        {takeActionPageSections.map((section, index) => (
          <div key={index} id={section.id} className={`flex flex-col justify-start items-start gap-y-12 w-full
          ${index % 2 === 1 && "lg:items-end"}`}>

            <h3 className='dynamic-heading text-header '>{section.title}</h3>
            <p className={`dynamic-text text-body max-w-[800px]
              ${index % 2 === 1 && 'lg:text-right'}`}>{section.description}
            </p>

            <OutlineButton className="w-[150px] py-2 
            bg-primary text-white hover:bg-transparent hover:text-body
            transition-all duration-500
            shadow-sm flex justify-center items-center">
              <a className="dynamic-text font-medium">{section.buttonLabel}</a>
            </OutlineButton>

          </div>
        ))}
      </div>
    </div>
  );
};

export default StartABranch;
