'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { PiEraserDuotone } from "react-icons/pi";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (query) {
            searchParams.set('query', query);
        } else {
            searchParams.delete('query');
        }
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newUrl);
    }, [query, router]);

    return (
        <div className='w-full
        border-2
        flex flex-row gap-x-4'>
            <input 
            type="text" 
            placeholder='Search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none w-full px-5 py-2
            bg-white" />
            <button className="text-2xl bg-primary w-[50px]
            flex justify-center items-center text-white"
            onClick={() => setQuery('')}>
                <PiEraserDuotone />
            </button>
        </div>
    )
}

export default SearchBar;
