"use client";

import { useData } from "@/providers/useData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useEffect, useState, memo, useMemo, useCallback } from "react";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";

import OutlineButton from "../OutlineButton";

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const RecentEvents = memo(() => {
  const { 
    events
   } = useData();
   const router = useRouter();

  // Memoize recent events to avoid unnecessary recalculations
  const recentEvents = useMemo(() => {
    return events ? events.slice(-3) : [];
  }, [events]);

  const handleEventClick = useCallback((title: string) => {
    router.push(`/events/item?title=${title}`);
  }, [router]);

  return (
    <section className='max-w-max w-full mx-auto px-x py-8 mt-20 flex flex-col gap-y-8'>
        <h3 className='dynamic-subheading text-header'>Recent Events</h3>
        <Swiper
          // modules={[Navigation]}
          slidesPerView={'auto'}
          grabCursor={true}
          spaceBetween={15}  
          className="w-full"
        >
          {
            recentEvents?.map((event, index) => (
              <SwiperSlide key={index}
              style={{
                width:"250px"
              }}
              onClick={() => handleEventClick(event.title)}>  
              <div className="flex flex-col justify-center items-start cursor-pointer">
                <Image
                  src={event.images[0]}
                  alt={event.title}
                  width={250}
                  height={250}
                  className='w-full h-[250px] drop-shadow object-cover'
                  sizes="250px"
                />
                <div className="w-full overflow-hidden
                  flex flex-col justify-start items-start py-2">
                  <h3 className='text-lg font-title uppercase font-bold text-black'>{event.title}</h3>
                  <p className='text-sm text-body'>{event.date}</p>
                </div>
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </section>
  )
});

RecentEvents.displayName = 'RecentEvents';

export default RecentEvents;
