"use client";

import Modal from "../Modal";
import InputField from "../InputField";

import useExecutiveBoardModal from "@/hooks/useExecutiveBoardModal";
import { addExecutiveBoardMember, editExecutiveBoardMember } from "@/utils/database";
import { useState, useEffect } from "react";

const ExecutiveBoardModal = () => {
    const { onClose, isOpen, newExecutiveBoardMember, currentExecutiveBoardMember, updated } = useExecutiveBoardModal();

    // Unique useState hooks for each input field
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [categorization, setCategorization] = useState("");
    const [role, setRole] = useState("");
    const [bio, setBio] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setFirstName(currentExecutiveBoardMember?.firstName || "");
        setLastName(currentExecutiveBoardMember?.lastName || "");
        setCategorization(currentExecutiveBoardMember?.categorization || "");
        setRole(currentExecutiveBoardMember?.role || "");
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
            && firstName && lastName && categorization && role && bio && imageFile
        ) {
            addExecutiveBoardMember(imageFile, categorization, role, firstName, lastName, bio)
            onClose();
        } else if (!newExecutiveBoardMember
            && firstName && lastName && categorization && role && bio
        ) {
            if (currentExecutiveBoardMember) {
                editExecutiveBoardMember(currentExecutiveBoardMember, categorization, role, firstName ,lastName, bio);
            }
            onClose();
        }
    };

    return (
        <Modal title="Manage Executive" isOpen={isOpen} onChange={onChange}>
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
                    label="Member's Categorization"
                    placeholder="Categorization..."
                    value={categorization}
                    onChange={(e) => setCategorization(e.target.value)}
                />
                <InputField
                    label="Member's Specific Role"
                    placeholder="Specific Role..."
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
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
