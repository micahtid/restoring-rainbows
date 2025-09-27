import OutlineButton from "../OutlineButton";

// Swiper
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// ISSUE: bg-white applied to hide the conic gradient in page.tsx...

const Prism = () => {
  return (
    <section className='w-full bg-white flex justify-center items-center'>
      <div className="max-w-max w-full mx-auto px-x py-28
      flex items-start gap-x-16 max-xl:gap-x-12 max-lg:gap-x-8
      max-lg:flex-col max-lg:gap-y-12 max-md:gap-y-8">
        <div className="flex-1 max-lg:w-full">
          <h3 className='dynamic-subheading text-header'>
            Subscribe to Our Newsletter Service, Prism
          </h3>
        </div>
        <div className="flex-1 max-lg:w-full
        flex flex-col gap-y-6">
          <p className='dynamic-text text-body'>
          Prism is a global youth news website that encompasses a wide array of perspectives and ideas on the environment, education, and art.
          </p>

          <OutlineButton className="
          w-full py-[12px]
          flex justify-center items-center
          border-[2px] border-primary/60">
            <a
            className="font-accent2 font-semibold uppercase text-primary"
            // href="https://prismofficial.substack.com/"
            href="/prism"
            >
              View More
            </a>
          </OutlineButton>

        </div>
      </div>
    </section>
  );
};

export default Prism;
