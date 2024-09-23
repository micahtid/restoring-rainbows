
const Statistics = () => {
    const statistics = [
        {number: "15", label: "Countries"},
        {number: "30+", label: "Branches"},
        {number: "1000", label: "Supplies Collected"},
        {number: "6000+", label: "Supporters"}
    ]

    return (
        <section className="relative mb-12"> 
            <div
            className='w-[100vw] px-12 py-8
            flex justify-center items-center relative z-10'> 
                <div className="max-w-max w-full
                flex justify-between items-center gap-x-20
                overflow-x-scroll no-scrollbar">
                    {statistics.map((statistic, index) => (
                        <div key={index}
                        className='flex flex-col justify-center items-center gap-y-1'>
                            <h3 className='dynamic-subheading font-semibold text-body'>{statistic.number}</h3>
                            <p className='text-body text-lg'>{statistic.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div 
            style={{
                background: `
                    linear-gradient(to bottom, #e3f0ff, white 70%)`
            }}
            className="absolute left-1/2 transofrm -translate-x-1/2 top-0
            w-full h-[400px] -z-[100]" />
        </section>
    )
}

export default Statistics
