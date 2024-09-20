"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { useData } from '@/providers/useData';

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Blog = () => {
  const {
    stories
  } = useData();
  const router = useRouter();

  return (
    <section className='w-full bg-complement flex justify-center items-center'>
      <div className="max-w-max w-full px-4 py-14 flex flex-col justify-start items-start gap-y-12">
        <h3 className='dynamic-subheading'>
          Blogs
        </h3>
        <Swiper
          navigation={true} 
          modules={[Navigation]}
          slidesPerView="auto"
          grabCursor={true}
          spaceBetween={30}  
          className="w-full"
        >
          {
            stories?.map((story, index) => (
              <SwiperSlide key={index} style={{ width: '300px' }}
              onClick={() => router.push(`/stories/item?title=${story.title}`)}>  
                <img src={story.image} className='w-full h-[300px] drop-shadow' />
                <div className="w-full
                flex flex-col justify-start items-center py-2">
                  <h3 className='text-lg font-title uppercase font-bold'>{story.title}</h3>
                  <p className='text-sm text-gray-600'>{story.date}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
