"use client";

import Modal from "../Modal";
import useStoriesModal from "@/hooks/useStoriesModal";
import InputField from "../InputField";

import { addStory, editStory } from "@/utils/database";
import { useState, useEffect } from "react";

const StoriesModal = () => {
    const { onClose, isOpen, newStory, currentStory, updated } = useStoriesModal();

    // Unique useState hooks for each input field
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setFirstName(currentStory?.firstName || "");
        setLastName(currentStory?.lastName || "");
        setTitle(currentStory?.title || "");
        setContent(currentStory?.content || "");
        setDate(currentStory?.date || "");
        setLocation(currentStory?.location || "");
    }, [updated]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newStory
            && title && content && date && location && imageFile
        ) {
            addStory(imageFile, title, date, location, firstName, lastName, content);
            onClose();
        } else if (!newStory
            && title && content && date && location
        ) {
            if (currentStory) {
                editStory(currentStory, title, date, location, firstName, lastName, content);
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
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="First Name"
                        placeholder="First Name..."
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Last Name"
                        placeholder="Last Name..."
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <InputField
                    label="Title"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <InputField
                    label="Content"
                    placeholder="Content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    multiline
                />
                <InputField
                    label="Date"
                    placeholder="Date..."
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <InputField
                    label="Location"
                    placeholder="Location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newStory && "text-black/50"}`}>Founder Image</p>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="input-field text-gray-400"
                        disabled={!newStory}
                    />
                </div>
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

export default StoriesModal;