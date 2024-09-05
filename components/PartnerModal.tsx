"use client";

import Modal from "./Modal";
import InputField from "./InputField";

import usePartnerModal from "@/hooks/userPartnerModal";
import { addPartner, editPartner } from "@/utils/database";
import { useState, useEffect } from "react";

const PartnerModal = () => {
    const { onClose, isOpen, newPartner, currentPartner, updated } = usePartnerModal();

    // Unique useState hooks for each input field
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [instagram, setInstagram] = useState("");
    const [highlyValued, setHighlyValued] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setName(currentPartner?.name || "");
        setDescription(currentPartner?.description || "");
        setWebsite(currentPartner?.website || "");
        setInstagram(currentPartner?.instagram || "");
        setHighlyValued(currentPartner?.highlyValued || false);
    }, [newPartner, currentPartner, updated]);

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

        if (newPartner && name && description && website && instagram && highlyValued && imageFile) {
            addPartner(imageFile, name, description, website, instagram, highlyValued);
        } else if (!newPartner && name && description && website && instagram && highlyValued) {
            if (currentPartner) {
                editPartner(currentPartner, name, description, website, instagram, highlyValued);
            }
        }
        onClose();
    };

    return (
        <Modal title="Manage Partner" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Partner Name"
                    placeholder="Partner..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputField
                    label="Partner Description"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <InputField
                    label="Website"
                    placeholder="Website..."
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <InputField
                    label="Instagram"
                    placeholder="Instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <div className="w-full">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={highlyValued}
                            onChange={(e) => setHighlyValued(e.target.checked)}
                            className="mr-2"
                        />
                        Highly Valued
                    </label>
                </div>
                <div className="w-full">
                    <p className={`${!newPartner && "text-black/50"}`}>Logo</p>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="input-field text-gray-400"
                        disabled={!newPartner}
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

export default PartnerModal;
