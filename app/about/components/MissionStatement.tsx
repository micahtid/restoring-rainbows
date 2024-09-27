const MissionStatement = () => {
  return (
    <div className='w-[100vw] mt-24'>
      <div className="w-full relative overflow-hidden
      flex justify-start items-center px-x py-24">
        <img src="/splash_four.png"
        className='w-full h-full object-cover
        absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        brightness-75 blur-[2px] z-20'  />
        <h3 className='z-30 dynamic-subheading
        text-white max-w-[1000px]'>
          Championing sustainability and creativity. We turn discarded school supplies into art.
        </h3>
      </div>
      <div className="max-w-max w-full mx-auto px-x py-8 mt-12
      flex flex-col justify-start items-start gap-y-12">
        <div className="flex flex-col gap-y-2">
          <p className="uppercase font-bold text-primary">Lorem ipsum dolor sit amet.</p>
          <h3 className='dynamic-heading text-header'>Our Mission</h3>
        </div>
        <p className='dynamic-text text-body max-w-[800px]'>Our mission is to give children educational supplies, clean up the environment, and nurture creativity in our community! We do this by collecting new and old school supplies alike and restoring them into powerful instruments of creativity! </p>
      </div>
    </div>
  )
}

export default MissionStatement