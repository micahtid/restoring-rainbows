"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useData } from "@/providers/useData";
import Loader from "@/components/Loader";
import { DocumentData } from "firebase/firestore";

const Story = () => {
    const {
        stories
    } = useData();
    const searchParams = useSearchParams();
    const [story, setStory] = useState<DocumentData | null>(null);

    useEffect(() => {
        const title = searchParams.get('title');

        if (title && stories) {
            const matchedStory = stories.find((story) => story.title === title);

            if (matchedStory) {
                setStory(matchedStory);
            }
        }
    }, [searchParams, stories]);

    if (!stories) {
        return <Loader />; 
    }

    return (
        <div className="w-full
        flex flex-col gap-y-8 mb-10">
            <div className="relative
            w-full h-[300px]">
                <h1 className="dynamic-subheading text-white z-40
                absolute left-[50px] top-1/2 transform -translate-y-1/2">{story?.title}</h1>
                <img
                    src={story?.image}
                    className="w-full h-full object-cover
                    brightness-50"
                />
            </div>
            <div className="max-w-max mx-auto">
                <p className="text-lg text-body mb-4">{story?.content}</p>
                <p className="text-sm text-gray-500">
                    By {story?.firstName} {story?.lastName} on {story?.date}
                </p>
                <p className="text-sm text-gray-500">Location: {story?.location}</p>
            </div>
        </div>
    );
};

export default Story;
