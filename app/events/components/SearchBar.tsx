'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { PiMagnifyingGlassDuotone, PiEraserDuotone } from "react-icons/pi";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        query ? searchParams.set('query', query) : searchParams.delete('query');
        router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }, [query, router]);

    return (
        <div className="w-full flex items-center bg-white px-4 py-3 drop-shadow-sm mb-4">
            <PiMagnifyingGlassDuotone size={20} className="text-body/30" />
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events..."
                className="outline-none w-full px-4 py-1 text-body font-medium placeholder:text-body/30" 
            />
            {query && (
                <button 
                    onClick={() => setQuery('')}
                    className="aspect-square h-full rounded-md p-1 bg-primary text-white 
                    flex items-center justify-center"
                >
                    <PiEraserDuotone size={24} />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
