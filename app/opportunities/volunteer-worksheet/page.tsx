"use client";

import Highlight from "@/components/Highlight";
import OutlineButton from "@/components/OutlineButton";
import Loader from '@/components/Loader';
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useData } from '@/providers/useData';
import { useMemo } from 'react';

const VolunteerWorksheet = () => {
  const { opportunities } = useData();

  // Find opportunity by title === 'Volunteer Worksheet'
  const opportunity = useMemo(() => {
    if (!opportunities) return null;
    return opportunities.find(
      (opp) => opp.title === "Volunteer Worksheet"
    );
  }, [opportunities]);

  // Example worksheet images (same as take-action/volunteer)
  const worksheetExamples = [
    "/worksheet_1.png",
    "/worksheet_2.png",
    "/worksheet_3.png",
    "/worksheet_4.png",
    "/worksheet_5.png",
    "/worksheet_6.png",
  ];

  // Guidelines (can be customized or pulled from opportunity if desired)
  const volunteerGuidelines = [
    { title: "Worksheet Guidelines", description: "Restoring Rainbows requires all digital submissions to abide by a strict set of guidelines. Please review them here, as well as view some helpful digital-worksheet prompts.", link: "https://docs.google.com/document/d/1qL7ni4tjd7jFOmGdePlFBc--TH0HmaXEMgH5WzxbBXw/edit" },
    { title: "Worksheet Submission", description: "Use this form to submit your digital resources, and attach a volunteer form for us to sign in order for you to receive your hours.", link: "https://docs.google.com/forms/d/e/1FAIpQLSexbZt0JZRe1MHepBgOT8X6Xm5BtXsqIqQS3kuXBzPF4q3dwg/viewform?usp=sharing" },
  ];

  if (!opportunity) {
    return <Loader />;
  }

  return (
    <div
      className="relative flex justify-center items-center min-h-screen px-6 md:px-12 py-24"
      style={{
        backgroundColor: "#f8faff",
        backgroundImage: "linear-gradient(135deg, #f8faff 0%, #e3f0ff 100%)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1036 1008"
        version="1.1"
        className="absolute inset-0 z-10 opacity-10"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Stroke 1</title>
        <g id="Desktop" stroke="#fff9e2" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
          <g id="Public-Policy" transform="translate(-239.000000, -144.000000)" stroke="#73a0e1" strokeWidth={60}>
            <g id="Our-Impact">
              <g id="Group-13">
                <path d="M232,150 L404.470455,153.818536 C524.152349,157.170472 622.574154,208.599144 583.834721,271.026662 L559.419838,310.370095 C532.965744,352.999409 561.957027,376.908478 630.041057,401.898318 L776.892021,462.34981 C873.335819,497.751029 884.956258,596.504535 800.692081,640.325648 L541.859817,774.927299 C419.187267,838.722294 508.628756,936.57914 677.048611,930.742415 C763.941783,927.733403 842.341491,959.320302 863.395712,1005.82718 L873.244013,1027.58033 C892.016988,1069.04595 956.876674,1099.2471 1034.2693,1102.56109 L1208,1110" id="Stroke-1"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div className="z-20 flex flex-col gap-8 w-full max-w-max mx-auto">
        <a
          href="/opportunities"
          className="flex items-center gap-x-2 w-min mb-6 px-4 py-1 border rounded-full border-gray-400 text-gray-700 text-sm font-semibold hover:underline"
        >
          <IoIosArrowBack /> Return
        </a>
        <div className="space-y-4">
          <div className="inline-block">
            <Highlight text="What Is The" />
          </div>
          <h3 className="dynamic-heading text-header">Volunteer Worksheet</h3>
          <p className="dynamic-text w-full bg-white p-4">{opportunity.description}</p>
        </div>
        <div className="space-y-6 my-12">
          <h3 className="dynamic-subheading text-header">Example Worksheets</h3>
          <div className="
            [&_.swiper-button-next]:text-[#4A4A4A] [&_.swiper-button-prev]:text-[#4A4A4A]
            [&_.swiper-button-next]:w-8 [&_.swiper-button-prev]:w-8
            [&_.swiper-button-next]:h-8 [&_.swiper-button-prev]:h-8
            [&_.swiper-button-next]:bg-black/10 [&_.swiper-button-prev]:bg-black/10
            [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:rounded-full
            [&_.swiper-button-next]:after:text-sm [&_.swiper-button-prev]:after:text-sm
            [&_.swiper-button-next]:after:content-['next'] [&_.swiper-button-prev]:after:content-['prev']">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView="auto"
              spaceBetween={75}
              className="w-full"
            >
              {worksheetExamples.map((example, index) => (
                <SwiperSlide key={index} className="!w-auto max-[430px]:w-full">
                  <img src={example} className="w-[300px] h-auto max-[430px]:w-[200px]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="grid gap-y-28 mt-16">
          {volunteerGuidelines.map((guide, index) => (
            <div
              key={index}
              className={`flex flex-col gap-y-6 ${index % 2 === 0 ? "items-end text-right max-md:text-left" : ""}`}
            >
              <OutlineButton
                className="
                flex justify-center w-[550px] py-4
                max-md:w-full
                bg-primary text-white
                transition-all duration-500
                shadow-sm text-nowrap
                hover:bg-transparent hover:text-body"
              >
                <a className="dynamic-subheading max-md:text-lg" href={guide.link} target="_blank" rel="noopener noreferrer">{guide.title}</a>
              </OutlineButton>
              <p className="dynamic-text text-body max-w-[850px]">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerWorksheet;
