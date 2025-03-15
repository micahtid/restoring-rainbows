"use client";

import Highlight from "@/components/Highlight";
import Loader from "@/components/Loader";
import ArrowButton from "@/components/ArrowButton";
import TakeActionItem from "../../components/TakeActionItem";
import { takeActionPageSections } from "@/data";
import { useData } from "@/providers/useData";

const Prism = () => {
  const { stories } = useData();

  if (!stories) {
    return <Loader />;
  }

  const displayedStories = stories.slice(0, 5);

  return (
    <section className="
      relative min-h-screen w-full
      flex justify-center items-start
      bg-white"
    >
      {/* Background SVGs */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 1036 1020" 
        className="absolute inset-0 z-0 opacity-10"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#73a0e1" strokeWidth="60" fill="none" fillRule="evenodd" strokeLinecap="round">
          <path d="M232,150 C450,180 550,250 600,400 C650,550 750,600 900,620 C1050,640 1150,750 1208,1110" />
        </g>
      </svg>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 1036 1020" 
        className="absolute inset-0 z-0 opacity-10 rotate-180"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#73a0e1" strokeWidth="60" fill="none" fillRule="evenodd" strokeLinecap="round">
          <path d="M232,150 C350,200 450,300 500,450 C550,600 650,700 800,750 C950,800 1050,850 1208,1110" />
        </g>
      </svg>

      <div className="
        relative z-10
        max-w-max w-full mx-auto px-x py-32
        flex flex-col justify-start items-start"
      >
        <div className="flex flex-col gap-y-6 mb-16">
          <div className="w-[200px]">
            <Highlight text="Read Our Blogs" />
          </div>
          <h3 className="dynamic-heading text-header">
            Prism Newsletter
          </h3>
          <p className="dynamic-text text-body w-full">
          Prism is a global youth news website that encompasses a wide array of perspectives and ideas on the environment, education, and art.
          Click the buttons below to view our newsletter, and get other helpful information about submitting your own work!
          </p>
        </div>

        <div className="w-full flex flex-col gap-y-6 mb-16">
          <h4 className="dynamic-subheading text-header">
            Recent Publications
          </h4>
          
          <div className="w-full grid grid-cols-1 gap-4">
            {displayedStories.map((story, index) => (
              <a 
                key={index} 
                href={story.link}
                className="
                  group relative
                  bg-white shadow-sm 
                  transition-all duration-300
                  border-l-4 border-primary/50 hover:border-primary
                  px-6 py-4
                  flex items-center"
              >
                <p className="
                  dynamic-text text-body group-hover:text-primary
                  transition-colors duration-300"
                >
                  {story.title}
                </p>
                <div className="
                  absolute top-1/2 -translate-y-1/2 right-6
                  w-3 h-3 rotate-45 border-t-2 border-r-2
                  border-primary/50 group-hover:border-primary
                  transition-colors duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mb-28">
          <ArrowButton 
            text="Subscribe"
            link="https://prismofficial.substack.com/"
          />
        </div>
        <div className="-mt-24">
          <ArrowButton 
              text="Write For Us"
              link="/take-action/"
            />
        </div>
      </div>
    </section>
  );
}

export default Prism;
