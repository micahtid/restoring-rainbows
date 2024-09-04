import React from 'react'

const Statistics = () => {
    const statistics = [
        {number: "15", label: "Countries"},
        {number: "30+", label: "Branches"},
        {number: "1000", label: "Supplies Collected"},
        {number: "6000+", label: "Supporters"}
    ]

  return (
    <section
    className='w-[100vw] bg-secondary px-12 py-8
    flex justify-center items-center'>
        <div className="max-w-max w-full
        flex justify-between items-center gap-x-20
        overflow-x-scroll no-scrollbar">
            {statistics.map((statistic, index) => (
                <div key={index}
                className='flex flex-col justify-center items-center gap-y-1'>
                    <h3 className='dynamic-subheading font-semibold text-text'>{statistic.number}</h3>
                    <p className='text-text text-lg'>{statistic.label}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Statistics