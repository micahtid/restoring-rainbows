"use client";

import Modal from "../Modal";
import InputField from "../InputField";

import useStoriesModal from "@/hooks/useStoriesModal";
import { addStory, editStory } from "@/utils/database";
import { useState, useEffect } from "react";

const StoryModal = () => {
    const { onClose, isOpen, currentStory, updated, newStory } = useStoriesModal();

    const [storyTitle, setStoryTitle] = useState("");
    const [storyLink, setStoryLink] = useState("");

    useEffect(() => {
        setStoryTitle(currentStory?.title || "");
        setStoryLink(currentStory?.link || "");
    }, [updated]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newStory
            && storyTitle && storyLink
        ) {
            addStory(storyTitle, storyLink)
            onClose();
        } else if (!newStory
            && storyTitle && storyLink
        ) {
            if (currentStory) {
                editStory(currentStory, storyTitle, storyLink)
            }
            onClose();
        }
    };

    return (
        <Modal title="Manage Story" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Story Title"
                    placeholder="Story Title..."
                    value={storyTitle}
                    onChange={(e) => setStoryTitle(e.target.value)}
                />
                <InputField
                    label="Story Link"
                    placeholder="Story Link..."
                    value={storyLink}
                    onChange={(e) => setStoryLink(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white font-bold w-full rounded-full"
                >
                    Submit
                </button>
            </form>
        </Modal>
    );
};

export default StoryModal;
