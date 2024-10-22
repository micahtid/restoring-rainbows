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
    const [community, setCommunity] = useState("");
    const [state, setState] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    const [firstNameOne, setFirstNameOne] = useState("");
    const [lastNameOne, setLastNameOne] = useState("");
    const [bioOne, setBioOne] = useState("");
    const [imageFileOne, setImageFileOne] = useState<File | undefined>(undefined);

    const [firstNameTwo, setFirstNameTwo] = useState("");
    const [lastNameTwo, setLastNameTwo] = useState("");
    const [bioTwo, setBioTwo] = useState("");
    const [imageFileTwo, setImageFileTwo] = useState<File | undefined>(undefined);
   
    const [instagram, setInstagram] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setCountry(currentBranch?.country || "");
        setCity(currentBranch?.city || "");
        setCommunity(currentBranch?.community || "");
        setState(currentBranch?.state || "");
        setLat(currentBranch?.lat || "");
        setLng(currentBranch?.lng || "");

        setFirstNameOne(currentBranch?.firstNameOne || "");
        setLastNameOne(currentBranch?.lastNameOne || "");
        setBioOne(currentBranch?.bioOne || "");

        setFirstNameTwo(currentBranch?.firstNameTwo || "");
        setLastNameTwo(currentBranch?.lastNameTwo || "");
        setBioTwo(currentBranch?.bioTwo || "");

        setInstagram(currentBranch?.instagram || "");
        setEmail(currentBranch?.email || "");
    }, [updated]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImageFile: Function) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const latitude = parseFloat(lat) || 1;
        const longitude = parseFloat(lng) || 1;

        if (newBranch
            && country && city && community && latitude && longitude 
            && firstNameOne && lastNameOne && bioOne && imageFileOne
            && firstNameTwo && lastNameTwo && bioTwo && imageFileTwo
            && instagram && email
        ) {
            addBranch(country, city, community, latitude, longitude, firstNameOne, lastNameOne, bioOne, imageFileOne,
                firstNameTwo, lastNameTwo, bioTwo, imageFileTwo,
                instagram, email, state
            )
            onClose();
        } else if (!newBranch
            && country && city && community && latitude && longitude 
            && firstNameOne && lastNameOne && bioOne 
            && firstNameTwo && lastNameTwo && bioTwo
            && instagram && email
        ) {
            if (currentBranch) {
                editBranch(currentBranch, country, city, latitude, longitude,
                    firstNameOne, lastNameOne, bioOne,
                    firstNameTwo, lastNameTwo, bioTwo,
                    instagram, email,
                    imageFileOne, imageFileTwo, state
                )
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
                <InputField
                    label="Community"
                    placeholder="Community..."
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
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
                        label="Founder's FN (1)"
                        placeholder="First Name..."
                        value={firstNameOne}
                        onChange={(e) => setFirstNameOne(e.target.value)}
                    />
                    <InputField
                        label="Founder's LN (1)"
                        placeholder="Last Name..."
                        value={lastNameOne}
                        onChange={(e) => setLastNameOne(e.target.value)}
                    />
                </div>
                <InputField
                    label="Founder's Bio (1)"
                    placeholder="Bio..."
                    value={bioOne}
                    onChange={(e) => setBioOne(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newBranch && "text-black/50"}`}>Founder Image (1)</p>
                    <input
                        type="file"
                        onChange={(e) => {handleImageChange(e, setImageFileOne)}}
                        className="input-field text-gray-400"
                        disabled={!newBranch}
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="Founder's FN (2)"
                        placeholder="First Name..."
                        value={firstNameTwo}
                        onChange={(e) => setFirstNameTwo(e.target.value)}
                    />
                    <InputField
                        label="Founder's LN (2)"
                        placeholder="Last Name..."
                        value={lastNameTwo}
                        onChange={(e) => setLastNameTwo(e.target.value)}
                    />
                </div>
                <InputField
                    label="Founder's Bio (2)"
                    placeholder="Bio..."
                    value={bioTwo}
                    onChange={(e) => setBioTwo(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newBranch && "text-black/50"}`}>Founder Image (2)</p>
                    <input
                        type="file"
                        onChange={(e) => {handleImageChange(e, setImageFileTwo)}}
                        className="input-field text-gray-400"
                        disabled={!newBranch}
                    />
                </div>
                <InputField
                    label="Branch's Instagram"
                    placeholder="Instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <InputField
                    label="Branch's Email"
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

export default BranchModal;
