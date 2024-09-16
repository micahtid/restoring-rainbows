'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { DocumentData } from 'firebase/firestore';

interface StoryDispalyProps {
  stories: DocumentData[] | null;
}

const StoryDisplay: React.FC<StoryDispalyProps> = ({ stories }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filteredStories, setFilteredStories] = useState<DocumentData[] | null>(stories);

  useEffect(() => {
    const queryValue = searchParams.get('query') || '';

    const filteredList = stories?.filter((story) => {
      const lowerQuery = queryValue.toLowerCase();

      return (
        story.content?.toLowerCase().includes(lowerQuery) ||
        story.date?.toLowerCase().includes(lowerQuery) ||
        story.firstName?.toLowerCase().includes(lowerQuery) ||
        story.lastName?.toLowerCase().includes(lowerQuery) ||
        story.location?.toLowerCase().includes(lowerQuery) ||
        story.title?.toLowerCase().includes(lowerQuery)
      );
    });

    setFilteredStories(filteredList || []);
  }, [searchParams, stories]);

  const handleStoryClick = (title: string) => {
    router.push(`/stories/item?title=${title}`);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start gap-y-4">
      <h3>{filteredStories?.length} Stories Displayed</h3>
      <div className="flex flex-row justify-start items-start gap-4 flex-wrap w-full">
        {filteredStories?.map((story, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleStoryClick(story.title)}>
            <img
              src={story.image}
              alt={story.title}
              className="w-[300px] h-[300px] object-cover"
            />
            <h4 className="mt-2 text-lg uppercase font-title font-bold">{story.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryDisplay;
