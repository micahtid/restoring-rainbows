"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useData } from "@/providers/useData";
import Loader from "@/components/Loader";
import { DocumentData } from "firebase/firestore";

interface StoryContentProps {
  stories: DocumentData[] | null;
}

const StoryContent: React.FC<StoryContentProps> = ({ stories }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const [story, setStory] = useState<DocumentData | null>(null);

  useEffect(() => {
    if (title && stories) {
      const matchedStory = stories.find((story) => story.title === title);
      setStory(matchedStory || null);
    }
  }, [title, stories]);

  if (!story) {
    return <Loader />;
  }

  return (
    <div className="max-w-max mx-auto max-auto min-h-[400px] 
    px-x mt-24 mb-10
    flex flex-col gap-y-8
    fade-in-animation">
      <img src={story.image} className='w-full max-h-[500px] h-auto object-cover
      max-max:w-full max-max:max-h-none' />
      <h3 className='dynamic-subheading text-header'>{story.title}</h3>
      <p className="dynamic-text text-body">
        {story.content.split('\n').map((line: string, index: number) => (
          <div key={index} className='mb-4'>{line}</div>
        ))}
      </p>
      <div className="">
        <p className="text-lg text-gray-500">
          By {story.firstName} {story.lastName} on {story.date}
        </p>
        <p className="text-lg text-gray-500">Location: {story.location}</p>
      </div>
    </div>
  );
};

const Story = () => {
  const { stories } = useData();

  if (!stories) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <StoryContent stories={stories} />
    </Suspense>
  );
};

export default Story;
