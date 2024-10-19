"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { useData } from '@/providers/useData';

import OutlineButton from './OutlineButton';

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
    <section className='w-full bg-white flex justify-center items-center'>
      <div className="max-w-max w-full mx-auto px-x pb-14 pt-24 flex flex-col justify-start items-start gap-y-12">
        <h3 className='dynamic-subheading text-header'>
          Blogs
        </h3>
      </div>
    </section>
  );
};

export default Blog;
