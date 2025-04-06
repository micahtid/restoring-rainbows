"use client";

import Modal from "../Modal";
import useOpportunityModal from "@/hooks/useOpportunityModal";
import InputField from "../InputField";

import { addOpportunity, editOpportunity } from "@/utils/database";
import { useState, useEffect } from "react";

const OpportunityModal = () => {
    const { onClose, isOpen, newOpportunity, currentOpportunity, updated } = useOpportunityModal();

    // State for each input field
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("");
    const [locationType, setLocationType] = useState("");
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");
    const [benefits, setBenefits] = useState("");
    const [applicationLink, setApplicationLink] = useState("");
    const [guidelinesLink, setGuidelinesLink] = useState("");

    useEffect(() => {
        setTitle(currentOpportunity?.title || "");
        setDeadline(currentOpportunity?.deadline || "");
        setLocationType(currentOpportunity?.locationType || "");
        setDescription(currentOpportunity?.description || "");
        setSummary(currentOpportunity?.summary || "");
        setBenefits(currentOpportunity?.benefits || "");
        setApplicationLink(currentOpportunity?.applicationLink || "");
        setGuidelinesLink(currentOpportunity?.guidelinesLink || "");
    }, [updated, currentOpportunity]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newOpportunity && 
            title && deadline && locationType && 
            description && summary && benefits && 
            applicationLink) {
            
            addOpportunity(
                title,
                deadline,
                locationType,
                description,
                summary,
                benefits,
                applicationLink,
                guidelinesLink
            );
            onClose();
        } else if (!newOpportunity && 
            title && deadline && locationType && 
            description && summary && benefits && 
            applicationLink && currentOpportunity) {
            
            editOpportunity(
                currentOpportunity,
                title,
                deadline,
                locationType,
                description,
                summary,
                benefits,
                applicationLink,
                guidelinesLink
            );
            onClose();
        }
    };

    return (
        <Modal title="Manage Opportunity" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Title"
                    placeholder="Opportunity title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <InputField
                    label="Deadline"
                    placeholder="YYYY-MM-DD"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
                <InputField
                    label="Location Type"
                    placeholder="Remote, In-person, Hybrid..."
                    value={locationType}
                    onChange={(e) => setLocationType(e.target.value)}
                />
                <InputField
                    label="Description"
                    placeholder="Complete description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    multiline
                />
                <InputField
                    label="Summary"
                    placeholder="Brief description..."
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    multiline
                />
                <InputField
                    label="Benefits"
                    placeholder="Benefits of this opportunity..."
                    value={benefits}
                    onChange={(e) => setBenefits(e.target.value)}
                    multiline
                />
                <InputField
                    label="Application Link"
                    placeholder="URL to apply..."
                    value={applicationLink}
                    onChange={(e) => setApplicationLink(e.target.value)}
                />
                <InputField
                    label="Guidelines Link"
                    placeholder="URL to guidelines (optional)..."
                    value={guidelinesLink}
                    onChange={(e) => setGuidelinesLink(e.target.value)}
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

export default OpportunityModal;