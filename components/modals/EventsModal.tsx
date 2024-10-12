"use client";

import Modal from "../Modal";
import useEventsModal from "@/hooks/useEventsModal";
import InputField from "../InputField";

import { addEvent, editEvent } from "@/utils/database";
import { useState, useEffect } from "react";

const EventsModal = () => {
    const { onClose, isOpen, newEvent, currentEvent, updated } = useEventsModal();

    // Unique useState hooks for each input field
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setTitle(currentEvent?.title || "");
        setContent(currentEvent?.content || "");
        setDate(currentEvent?.date || "");
        setLocation(currentEvent?.location || "");
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

        if (newEvent
            && title && content && date && location && imageFile
        ) {
            addEvent(imageFile, title, content, date, location);
            onClose();
        } else if (!newEvent
            && title && content && date && location
        ) {
            if (currentEvent) {
                editEvent(currentEvent, title, content, date, location);
            }
            onClose();
        }
    };

    return (
        <Modal title="Manage Event" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
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
                    <p className={`${!newEvent && "text-black/50"}`}>Founder Image</p>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="input-field text-gray-400"
                        disabled={!newEvent}
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

export default EventsModal;
