"use client";

interface ArrowButtonProps {
  text: string;
  link: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, link }) => {
return (
  <div className="flex flex-row justify-center items-center gap-x-4">
      <p className="text-xl">
        {text}
      </p>
      <svg viewBox="0 0 74 17" width="74px" height="17px">
          <path d="
                  M20.7.3l-1.3 1.3 6.7 
                  6H0v1.8h26.1l-6.7 
                  6 1.3 1.3 
                  9.4-8.2z" 
              fill="rgba(13, 156, 144, 1)">
          </path>
      </svg>
      {/* <svg viewBox="0 0 74 17" width="74px" height="17px">
          <path 
              d="M64.4,0.3l-1.2,1.6L69,6c-2.7,0.2-4.3,1.5-5.6,2.7C62,10,60.8,11,58.2,11c-2.5,0-3.8-1-5.2-2.3
                  C51.6,7.5,49.9,6,46.6,6c-3.3,0-5,1.5-6.5,2.7C38.7,10,37.5,11,34.9,11c-2.5,0-3.8-1-5.2-2.3C28.3,7.5,26.6,6,23.3,6
                  c-3.3,0-5,1.5-6.5,2.7C15.4,10,14.2,11,11.6,11c-2.5,0-3.8-1-5.2-2.3C5,7.5,3.3,6,0,6v2c2.5,0,3.8,1,5.2,2.3
                  c1.5,1.3,3.2,2.7,6.5,2.7c3.3,0,5-1.5,6.5-2.7C19.5,9,20.8,8,23.3,8c2.5,0,3.8,1,5.2,2.3c1.5,1.3,3.2,2.7,6.5,2.7
                  c3.3,0,5-1.5,6.5-2.7C42.8,9,44,8,46.6,8s3.8,1,5.2,2.3c1.5,1.3,3.2,2.7,6.5,2.7c3.3,0,5-1.5,6.5-2.7C66.1,9,67.3,8,69.9,8
                  c0.2,0,0.4,0,0.6,0l-6.6,7.2l1.5,1.4L74,7.2L64.4,0.3z" 
              fill="rgba(13, 156, 144, 1)">
          </path>
      </svg> */}
  </div>
)
};

export default ArrowButton; 