"use client";

import Modal from "../Modal";
import useBranchModal from "@/hooks/useBranchModal";
import InputField from "../InputField";

import { addBranch, editBranch } from "@/utils/database";
import { useState, useEffect } from "react";

const BranchModal = () => {
    const { onClose, isOpen, newBranch, currentBranch, updated } = useBranchModal();

    // Unique useState hooks for each input field
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [instagram, setInstagram] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setCountry(currentBranch?.country || "");
        setCity(currentBranch?.city || "");
        setState(currentBranch?.state || "");
        setLat(currentBranch?.lat || "");
        setLng(currentBranch?.lng || "");
        setFirstName(currentBranch?.firstName || "");
        setLastName(currentBranch?.lastName || "");
        setBio(currentBranch?.bio || "");
        setInstagram(currentBranch?.instagram || "");
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

        const latitude = parseFloat(lat) || 1;
        const longitude = parseFloat(lng) || 1;

        if (newBranch
            && country && city && latitude && longitude && firstName && lastName && bio && instagram && imageFile
        ) {
            addBranch(country, city, latitude, longitude, firstName, lastName, bio, instagram, imageFile, state)
            onClose();
        } else if (!newBranch
            && country && city && latitude && longitude && firstName && lastName && bio && instagram
        ) {
            if (currentBranch) {
                editBranch(currentBranch, country, city, latitude, longitude, firstName, lastName, bio, instagram, state)
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
                <InputField
                    label="Country"
                    placeholder="Country..."
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <InputField
                    label="State (optional)"
                    placeholder="State"
                    value={state} 
                    onChange={(e) => setState(e.target.value)}
                />
                <InputField
                    label="City"
                    placeholder="City..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="Latitude"
                        placeholder="Latitude..."
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                    />
                    <InputField
                        label="Longitude"
                        placeholder="Longitude..."
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="Founder's FN"
                        placeholder="First Name..."
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Founder's LN"
                        placeholder="Last Name..."
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <InputField
                    label="Founder's Bio"
                    placeholder="Bio..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <InputField
                    label="Founder's Instagram"
                    placeholder="Instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newBranch && "text-black/50"}`}>Founder Image</p>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="input-field text-gray-400"
                        disabled={!newBranch}
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

export default BranchModal;
