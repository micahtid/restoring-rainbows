import { socials } from "@/data"

const SocialMedia = () => {
  return ( 
    <section className="w-full bg-white flex justify-center items-center">
      <section className='max-w-max w-full
      px-x pt-44 pb-32
      flex gap-x-12
      max-lg:flex-col max-lg:gap-y-16'>
          <div className="flex flex-col gap-y-12
          max-w-[600px]">
            <h3 className='dynamic-subheading text-header'>Check out our latest posts</h3>
            <p className='dynamic-text text-body'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae illo fuga possimus. Rem eum praesentium et ratione laborum earum, iure quibusdam deserunt quod quia ipsum esse, temporibus, voluptas facilis eaque!</p>
            <div className="flex flex-row justify-start items-center gap-x-4">
              {
                socials.map((social, index) => (
                  <a 
                  key={index}
                  href={social.link}
                  className="text-2xl text-header">
                    {social.icon}
                  </a>
                ))
              }
            </div>
          </div>
          <div className="w-[500px] h-[500px] max-lg:w-full bg-black" />
      </section>
    </section>
  )
}

export default SocialMedia