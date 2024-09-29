"use client";

import { useData } from "@/providers/useData";

const Statistics = () => {
    const {
        statistics
    } = useData();

    return (
        <section
        className='w-[100vw] px-x py-8 mb-12
        flex justify-center items-center relative z-10'> 
            <div className="max-w-max w-full
            flex justify-between items-center gap-x-20
            overflow-x-scroll no-scrollbar">
                {statistics?.map((statistic, index) => (
                    <div key={index}
                    className='flex flex-col justify-center items-center gap-y-1'>
                        <h3 className='dynamic-subheading font-semibold text-body'>{statistic.number}</h3>
                        <p className='text-body text-lg'>{statistic.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;
