"use client";

import { useData } from "@/providers/useData";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";

import OutlineButton from "./OutlineButton";

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const RecentEvents = () => {
  const { 
    events
   } = useData();
   const router = useRouter();

  const [recentEvents, setRecentEvents] = useState<null | DocumentData[]>([]);

  useEffect(() => {
    if (events) {
      setRecentEvents(events.slice(-3));
    }
  }, [events])

  return (
    <section className='max-w-max w-full mx-auto px-x py-8 mt-20 flex flex-col gap-y-8'>
        <h3 className='dynamic-subheading text-header'>Recent Events</h3>
        <Swiper
          // navigation={true} 
          // modules={[Navigation]}
          slidesPerView="auto"
          grabCursor={true}
          spaceBetween={15}  
          className="w-full"
        >
          {
            recentEvents?.map((event, index) => (
              <SwiperSlide key={index}
              onClick={() => router.push(`/events/item?title=${event.title}`)}>  
              <div className="w-[300px] max-lg:w-[250px] flex flex-col justify-center items-start cursor-pointer">
                <OutlineButton>
                  <img src={event.images[0]} className='w-full h-[300px] drop-shadow object-cover
                    max-lg:h-[250px]' />
                </OutlineButton>
                <div className="w-full overflow-hidden
                  flex flex-col justify-start items-start py-2">
                  <h3 className='text-lg font-title uppercase font-bold text-black text-nowrap'>{event.title}</h3>
                  <p className='text-sm text-body'>{event.date}</p>
                </div>
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </section>
  )
}

export default RecentEvents;
