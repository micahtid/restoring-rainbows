"use client";

import { useState } from "react"; // Import useState to manage local state
import Highlight from "@/components/Highlight";
import Loader from "@/components/Loader";
import OutlineButton from "@/components/OutlineButton";

import { useData } from "@/providers/useData";

const Prism = () => {
  const { stories } = useData();
  const [showAll, setShowAll] = useState(false);

  if (!stories) {
    return <Loader />;
  }

  const displayedStories = showAll ? stories : stories.slice(0, 5);

  return (
    <section className="max-w-max mx-auto px-x py-8 mt-28 mb-12
    flex flex-col justify-start items-start gap-y-4
    min-h-[75vh] 
    fade-in-animation">
      <Highlight text="Read Our Blogs" />
      <h3 className="dynamic-subheading">
        Prism Newsletter
      </h3>
      <p className="dynamic-text text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, veniam eius sit recusandae, nemo iusto, expedita impedit non aspernatur veritatis unde ipsam officia? Vero ad accusantium repellendus consectetur molestias.
      </p>
      <div className="flex flex-col gap-y-4 my-12 w-full">
        {displayedStories.map((story, index) => (
          <>
            <a 
              className="dynamic-text text-body 
              hover:text-blue-600 hover:underline"
              href={story.link}>
              {story.title}
            </a>
            <div className="w-full h-[2px] bg-body/20 mb-4" />
          </>
        ))}
      </div>
      <OutlineButton 
        className="w-[150px] py-2 
        bg-primary/20 shadow-sm
        flex justify-center items-center"
      >
        <button 
        onClick={() => setShowAll(!showAll)} 
        className="dynamic-text font-medium">
          {showAll ? "Show Less" : "Read More"}
        </button>
      </OutlineButton>
    </section>
  );
}

export default Prism;
