"use client";

import { useState } from "react"; // Import useState to manage local state
import Highlight from "@/components/Highlight";
import Loader from "@/components/Loader";
import OutlineButton from "@/components/OutlineButton";

import { useData } from "@/providers/useData";

const Prism = () => {
  const { stories } = useData();

  const prismGuidelines = [
    { 
      title: "Prism Guidelines", 
      description: "Restoring Rainbows requires all digital submissions to abide by a strict set of guidelines. Please review them here, as well as view some helpful submission prompts.",
      link: "https://docs.google.com/document/d/1Xx0nTrf3jPPodznCGIRYLSMZhrIPjUW04637mogPf_8/edit?usp=sharing"
    },
    { 
      title: "Prism Submission", 
      description: "Use this form to submit your digital work, and attach a volunteer form for us to sign in order for you to receive your hours.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc6zYdvTK5qDpPdRViSAFQ7-HLS5-5qaPhiCCEGCa57W9J6Aw/viewform?usp=sf_link"
    },
  ];

  if (!stories) {
    return <Loader />;
  }

  const displayedStories = stories.slice(0, 5);

  return (
    <section className="max-w-max mx-auto px-x py-8 mt-28 mb-12
    flex flex-col justify-start items-start gap-y-4
    min-h-[75vh] 
    fade-in-animation">
      <Highlight text="Read Our Blogs" />

      <h3 className="dynamic-heading text-header">
        Prism Newsletter
      </h3>

      <p className="dynamic-text text-body bg-white/80 backdrop-blur-sm p-4 rounded-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, veniam eius sit recusandae, nemo iusto, expedita impedit non aspernatur veritatis unde ipsam officia? Vero ad accusantium repellendus consectetur molestias.
      </p>

      <p className="dynamic-subheading mt-20 mb-2">Recent Publications</p>

      <div className="flex flex-col gap-y-4 w-full mb-12 bg-white/80 backdrop-blur-sm p-6 rounded-lg">
        {displayedStories.map((story, index) => (
          <div key={index} className="group">
            <a 
              className="dynamic-text text-body 
              group-hover:text-primary transition-colors duration-300
              flex items-center gap-x-3"
              href={story.link}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
              {story.title}
            </a>
            {index !== displayedStories.length - 1 && (
              <div className="w-full h-[2px] bg-body/20 mt-4" />
            )}
          </div>
        ))}
      </div>

      <OutlineButton 
        className="w-[150px] py-2 
        bg-primary text-white
        transition-all duration-300
        shadow-sm
        hover:bg-transparent hover:text-body
        flex justify-center items-center
        mb-32"
      >
        <a 
        href="https://prismofficial.substack.com/ " 
        className="dynamic-text font-medium">
          Subscribe
        </a>
      </OutlineButton>

      {prismGuidelines.map((guide, index) => (
        <div
          key={index}
          className={`flex flex-col mb-32 gap-y-8 w-full ${
            index % 2 === 0 && "items-end text-right max-md:text-left"
          }`}
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
            <a className="dynamic-subheading max-md:text-lg" href={guide.link}>{guide.title}</a>
          </OutlineButton>
          <p className="dynamic-text text-body max-w-[850px]">{guide.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Prism;
