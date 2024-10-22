"use client";

import { useData } from "@/providers/useData";

const Statistics = () => {
    const {
        statistics
    } = useData();

    return (
        <section className="max-w-max w-full mx-auto
        px-x py-8 mb-12 z-10
        flex justify-between items-start gap-x-20
        max-md:grid max-md:grid-cols-2 max-md:gap-y-16 max-md:gap-x-24 max-sm:gap-x-8
        max-[1500px]:-mt-[75px] max-xl:-mt-[250px] max-lg:-mt-[175px] max-[650px]:-mt-[300px] max-[450px]:-mt-[350px]
        ">
            {statistics?.map((statistic, index) => (
                <div key={index}
                className='flex flex-col justify-start items-center gap-y-1 
                h-full'>
                    <h3 className='dynamic-subheading font-bold text-body text-center'>{statistic.number}</h3>
                    <p className='text-body text-lg text-center max-w-[100px]'>{statistic.label}</p>
                </div>
            ))}
        </section>
    );
};

export default Statistics;
