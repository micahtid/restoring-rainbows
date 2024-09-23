"use client";

import { useData } from "@/providers/useData";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const RecentEvents = () => {
  const { 
    events
   } = useData();

  const [recentEvents, setRecentEvents] = useState<null | DocumentData[]>([]);

  useEffect(() => {
    if (events) {
      setRecentEvents(events.slice(-3));
    }
  }, [events])

  return (
    <section className='max-w-max w-full mx-auto px-4 py-8 flex flex-col gap-y-8'>
        <h3 className='dynamic-subheading text-header'>Recent Events</h3>
        <Swiper
          navigation={true} 
          modules={[Navigation]}
          slidesPerView="auto"
          grabCursor={true}
          spaceBetween={30}  
          className="w-full"
        >
          {
            recentEvents?.map((event, index) => (
              <SwiperSlide key={index} style={{ width: '300px' }}>  
                <img src={event.image} className='w-full h-[300px] drop-shadow' />
                <div className="w-full flex flex-col justify-start items-center py-2">
                  <h3 className='text-lg font-title uppercase font-bold text-black'>{event.title}</h3>
                  <p className='text-sm text-body'>{event.date}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </section>
  )
}

export default RecentEvents;
