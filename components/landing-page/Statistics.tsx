"use client";

import { memo } from "react";
import { useData } from "@/providers/useData";

const Statistics = memo(() => {
    const {
        statistics
    } = useData();

    return (
        <section className="
        max-w-max w-full mx-auto
        px-x py-8 mb-12 mt-12 z-10
        flex justify-between items-start gap-x-20
        max-md:grid max-md:grid-cols-2 max-md:gap-y-16 max-md:gap-x-24 max-sm:gap-x-8
        max-lg:mt-16
        ">
            {statistics?.map((statistic, index) => (
                <div key={index}
                className='flex flex-col justify-start items-center gap-y-1 
                h-full'>
                    <h3 className='dynamic-subheading text-header text-center'>{statistic.number}</h3>
                    <p className='dynamic-text text-header text-center whitespace-nowrap'>{statistic.label}</p>
                </div>
            ))}
        </section>
    );
});

Statistics.displayName = 'Statistics';

export default Statistics;
