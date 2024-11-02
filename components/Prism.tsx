import OutlineButton from './OutlineButton';

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Prism = () => {
  return (
    <section className='w-full bg-white flex justify-center items-center'>
      <div className="max-w-max w-full mx-auto px-x py-28
      flex items-start gap-x-16
      max-md:flex-col max-md:gap-y-14">
        <div className="flex flex-col gap-y-8 
        max-w-[500px] w-full
        max-md:max-w-none max-md:gap-y-5">
          <h3 className='dynamic-subheading text-header'>
            Subscribe to Our Newsletter Service, Prism
          </h3>
          <p className='dynamic-text text-body'>Prism is Restoring Rainbow&apos;s newsletter and blog service featuring youth perspectives on topics ranging from climate to education to art.</p>
        </div>
        <div className="flex flex-col items-center gap-y-2
        max-w-[300px] w-full">
          <img src="/prism.png" className='-mt-4 aspect-square object-cover w-[80%]' />
          <div className="w-full mb-6 -mt-2">
            <div className='w-full h-[2px] bg-primary'/>
            <p className='text-xs text-body italic'>Prism is built on another external platform.</p>
          </div>
          <OutlineButton className="
          w-full py-[8px]
          flex justify-center items-center
          border-[2px] border-primary hover:border-transparent
          transition-all duration-700">
            <a
            className="text-lg font-semibold text-black/70" 
            // href="https://prismofficial.substack.com/"
            href="/donate"
            >
              Subscribe
            </a>
          </OutlineButton>
        </div>
      </div>
    </section>
  );
};

export default Prism;
