import { contacts, socials } from "@/data";

export const Footer = () => {
  return (
    <footer className="
      w-[100vw] py-16 px-6 md:px-12
      flex justify-center items-center
      relative z-[9999]
      bg-gradient-to-br from-[#333333] to-[#2a2a2a]"
    >
      <div className="flex flex-col gap-y-4 max-w-max w-full">
        <div className="
          flex flex-row justify-between items-start gap-x-24
          max-lg:flex-col max-lg:gap-y-16"
        >
          <div className="flex flex-col justify-center items-start gap-y-8 w-full">
            <img 
              src="/logo_white.png" 
              className="w-[50px] opacity-90 hover:opacity-100 transition-opacity duration-300" 
            />
            <p className="text-white/90 text-sm leading-relaxed">
              Restoring Rainbows is a registered 501(c)3 nonprofit in the United States, the state of Connecticut
            </p>
          </div>

          <div className="
            flex flex-row justify-center items-start gap-x-16
            max-sm:flex-col max-sm:gap-y-8"
          >
            <div className="flex flex-col justify-start items-start gap-y-3">
              <p className="font-title font-bold uppercase text-white/90 text-sm tracking-wider mb-2">
                Contacts
              </p>
              {contacts.map((contact, index) => (
                <p key={index} 
                  className="text-sm text-nowrap text-white/80 hover:text-white
                  transition-colors duration-300"
                >
                  {contact}
                </p>
              ))}
            </div>

            <div className="flex flex-col justify-start items-start gap-y-3">
              <p className="font-title font-bold uppercase text-white/90 text-sm tracking-wider mb-2">
                Socials
              </p>
              <div className="flex flex-row gap-x-6">
                {socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-8" />

        <div className="
          flex justify-between items-center
          max-lg:flex-col max-lg:items-start max-lg:gap-y-4"
        >
          <p className="text-sm text-white/70">
            @Copyright 2025 Restoring Rainbows. All rights reserved.
          </p>
          <p className="text-sm text-white/70">
            This website was built by{" "}
            <a 
              href="https://micahtid.vercel.app" 
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Micah Tid
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;