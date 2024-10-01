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

    return (
        <form className={twMerge(`
        flex flex-col justify-center items-center gap-y-4
        p-8 bg-white drop-shadow
        w-full max-sm:px-3
        `, className)}>
            <h3 className="dynamic-subheading text-center text-header">Sign Up</h3>
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
                placeholder="Email..."
                value={firstName}
                onChange={(e) => setLastName(e.target.value)}
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
