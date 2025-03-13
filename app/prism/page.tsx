"use client";

import Highlight from "@/components/Highlight";
import Loader from "@/components/Loader";
import OutlineButton from "@/components/OutlineButton";

import TakeActionItem from "../../components/TakeActionItem";
import { takeActionPageSections } from "@/data";

import { useData } from "@/providers/useData";

const Prism = () => {
  const { stories } = useData();

  // const prismGuidelines = [
  //   { 
  //     title: "Prism Guidelines", 
  //     description: "Restoring Rainbows requires all digital submissions to abide by a strict set of guidelines. Please review them here, as well as view some helpful submission prompts.",
  //     link: "https://docs.google.com/document/d/1Xx0nTrf3jPPodznCGIRYLSMZhrIPjUW04637mogPf_8/edit?usp=sharing"
  //   },
  //   { 
  //     title: "Prism Submission", 
  //     description: "Use this form to submit your digital work, and attach a volunteer form for us to sign in order for you to receive your hours.",
  //     link: "https://docs.google.com/forms/d/e/1FAIpQLSc6zYdvTK5qDpPdRViSAFQ7-HLS5-5qaPhiCCEGCa57W9J6Aw/viewform?usp=sf_link"
  //   },
  // ];

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

        <TakeActionItem
        index={2}
        title={takeActionPageSections[3].title}
        description={takeActionPageSections[3].description}
        buttonLabel={takeActionPageSections[3].buttonLabel}
        buttonLink={takeActionPageSections[3].buttonLink}
        />
    </section>
  );
}

export default Prism;
