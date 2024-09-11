"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Blog = () => {

  return (
    <section className='w-full bg-secondary flex justify-center items-center'>
      <div className="max-w-max w-full px-4 py-14 flex flex-col justify-start items-start gap-y-12">
        <h3 className='dynamic-subheading'>
          Blogs
        </h3>
        <Swiper
          navigation={true} 
          modules={[Navigation]}
          slidesPerView={'auto'}
          grabCursor={true}
          spaceBetween={30}
          className="w-full h-[500px]"
        >
          {Array(5).fill(null).map((_, index) => (
            <SwiperSlide key={index}>
              <div className='bg-red-500'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae distinctio delectus eligendi aliquid accusantium. Ratione fugiat necessitatibus, minima numquam quasi mollitia quae, quod voluptatum unde ipsa neque? Libero, fuga!
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
