"use client";

import Modal from "./Modal";
import InputField from "./InputField";

import useVolunteerModal from "@/hooks/useVolunteerModal";
import { addVolunteer } from "@/utils/database";
import { useState, useEffect } from "react";

const VolunteerModal = () => {
    const { onClose, isOpen } = useVolunteerModal();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        if (isOpen) {
            setFirstName("");
            setLastName("");
        }
    }, [isOpen])

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (firstName && lastName) {
            addVolunteer(firstName, lastName);
            onClose();
        } 
    };

    return (
        <Modal title="Manage Volunteer" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="Volunteer's FN"
                        placeholder="First Name..."
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Volunteer's LN"
                        placeholder="Last Name..."
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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

export default VolunteerModal;
