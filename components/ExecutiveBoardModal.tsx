"use client";

import Modal from "./Modal";
import InputField from "./InputField";

import useExecutiveBoardModal from "@/hooks/useExecutiveBoardModal";
import { addExecutiveBoardMember, editExecutiveBoardMember } from "@/utils/database";
import { useState, useEffect } from "react";

const ExecutiveBoardModal = () => {
    const { onClose, isOpen, newExecutiveBoardMember, currentExecutiveBoardMember, updated } = useExecutiveBoardModal();

    // Unique useState hooks for each input field
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [bio, setBio] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setFirstName(currentExecutiveBoardMember?.firstName || "");
        setLastName(currentExecutiveBoardMember?.lastName || "");
        setDescription(currentExecutiveBoardMember?.description || "")
        setBio(currentExecutiveBoardMember?.bio || "");
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

        if (newExecutiveBoardMember
            && firstName && lastName && description && bio && imageFile
        ) {
            addExecutiveBoardMember(imageFile, description, firstName, lastName, bio)
            onClose();
        } else if (!newExecutiveBoardMember
            && firstName && lastName && description && bio
        ) {
            if (currentExecutiveBoardMember) {
                editExecutiveBoardMember(currentExecutiveBoardMember, description, firstName ,lastName, bio);
            }
            onClose();
        }
    };

    return (
        <Modal title="Manage Branch" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="Member's FN"
                        placeholder="First Name..."
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Member's LN"
                        placeholder="Last Name..."
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <InputField
                    label="Member's Role/Position"
                    placeholder="Role/Position..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <InputField
                    label="Member's Bio"
                    placeholder="Bio..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newExecutiveBoardMember && "text-black/50"}`}>Founder Image</p>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="input-field text-gray-400"
                        disabled={!newExecutiveBoardMember}
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

export default ExecutiveBoardModal;
