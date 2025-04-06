import { useData } from "@/providers/useData";
import useStoriesModal from "@/hooks/useStoriesModal";
import { deleteStory } from "@/utils/database";

import DataLine from "./DataLine";

const StoriesDashboard = () => {
  const {
    stories
  } = useData();

  const {
    onOpen,
    setNewStory,
    setCurrentStory,
    setUpdated,
    updated
  } = useStoriesModal();

  return (
    <div
      className="flex flex-col justify-start items-start gap-y-8 w-full"
    >
      <h3 className="text-4xl font-bold text-header">Prism</h3>
      <div className="flex flex-col justify-start items-center gap-y-2 w-full">
          {stories?.map((story, index) => (
              <DataLine
              key={index}
              onClick={() => {
                setNewStory(false);
                setCurrentStory(story);
                setUpdated(!updated);
                onOpen(); 
              }} 
              onClickDelete={() => {
                deleteStory(story);
              }}
              display={story.title}/>
            ))}
      </div>
        <button 
        className="bg-primary px-5 py-2 rounded-full text-white"
        onClick={() => {
            setNewStory(true);
            setCurrentStory(null);
            setUpdated(!updated);
            onOpen();
        }}>
          Add Blog
        </button>
    </div>
  );
};

export default StoriesDashboard;
