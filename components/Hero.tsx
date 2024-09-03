const Hero = () => {
  return (
    <section
      className='w-[100vw] h-[90vh]
      flex justify-center items-center overflow-hidden
      bg-secondary
      relative'>
        <div className="
          bg-secondary blur-2xl rounded-full
          w-[800px] h-[300px] z-20
          absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[150%]" />
        <div className="relative w-[45%]">
            <img src="/splash_one.jpg" className='w-full h-full object-cover' />
        </div>
        <div className="relative w-[32.5%]">
            <img src="/splash_two.png" className='w-full h-full object-cover mt-[225px] z-30' />
            <div className="
              w-[400px] h-[400px] blur-2xl rounded-full
              absolute top-0 left-0 transform translate-y-1/3 -translate-x-[50px]
              bg-secondary z-10" />
            <div className="
              w-[400px] h-[400px] blur-2xl rounded-full
              absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2
              bg-secondary z-20" />
        </div>
        <div className="relative w-[22.5%]">
            <img src="/splash_three.jpg" className='object-cover h-[600px] mb-[50px]' />
            <div className="
              w-[300px] h-[400px] blur-2xl rounded-full
              absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2
              bg-secondary z-10" />
        </div>
        <h3 
          className='dynamic-heading font-bold uppercase text-center text-primary drop-shadow
          max-w-[800px] z-50
          absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            Welcome to Restoring Rainbows
        </h3>
    </section>
  )
}

export default Hero
