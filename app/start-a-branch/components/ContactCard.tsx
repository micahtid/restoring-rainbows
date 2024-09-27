"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import InputField from "@/components/InputField";

interface ContactCardProps {
    className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ className }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    return (
        <form className={twMerge(`
        flex flex-col justify-center items-center gap-y-4
        p-8 bg-white drop-shadow
        w-full max-sm:px-3
        `, className)}>
            <h3 className="dynamic-subheading text-center text-header">Register a Branch</h3>
            <div className="flex justify-between items-center gap-x-6 w-full
            max-lg:flex-col max-lg:gap-y-4">
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
                label="Email"
                placeholder="Last Name..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                label="Intended Branch Country"
                placeholder="Intended Branch Coutry..."
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            <InputField
                label="Intended Branch City"
                placeholder="Intended Branch City..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="w-full bg-primary/80 p-2
            uppercase font-semibold
            text-white text-xl max-lg:text-xl font-title">
                Submit
            </button>
        </form>
    );
}

export default ContactCard;
