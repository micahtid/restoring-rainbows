"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { PiMagnifyingGlassDuotone, PiEraserDuotone } from "react-icons/pi";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        query ? searchParams.set("query", query) : searchParams.delete("query");
        router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }, [query, router]);

    return (
        <div className="flex w-full items-center bg-white px-4 py-3 mb-4 drop-shadow-sm">
            <PiMagnifyingGlassDuotone size={20} className="text-body/30" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events..."
                className="w-full px-4 py-1 text-body font-medium outline-none placeholder:text-body/30"
            />
            {query && (
                <button
                    onClick={() => setQuery("")}
                    className="flex h-full aspect-square items-center justify-center p-1 bg-primary text-white rounded-md"
                >
                    <PiEraserDuotone size={24} />
                </button>
            )}
        </div>
    );
};

export default SearchBar;