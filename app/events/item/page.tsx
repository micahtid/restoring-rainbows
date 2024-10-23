"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { DocumentData } from "firebase/firestore";
import { useData } from "@/providers/useData";

import Loader from "@/components/Loader";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs } from 'swiper/modules';

interface EventContentProps {
  events: DocumentData[] | null;
}

const EventContent: React.FC<EventContentProps> = ({ events }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');

  const [event, setEvent] = useState<DocumentData | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);                  // Track active thumbnail clicked
  const [activeIndex, setActiveIndex] = useState<number>(0);                    // Secondary thumbnail tracker (for styles) (!)

  useEffect(() => {
    if (title && events) {
      const matchedEvent = events.find((event) => event.title === title);
      setEvent(matchedEvent || null);
    }
  }, [title, events]);

  if (!event) {
    return <Loader />;
  }

  return (
    <div className="max-w-max mx-auto max-auto 
    min-h-[400px] px-x mt-24 mb-10 
    flex flex-col gap-y-8 fade-in-animation">

      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}                                         // Link main swiper with thumbnail swiper (!)
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}            // Update active index
        modules={[FreeMode, Thumbs]}
        className="w-full h-[500px]"
      >
        {event.images.map((image: any, index: number) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img src={image} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}                            // Update value of main swiper on click (!)
        style={{
          "marginLeft" : "0px"
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={`h-[100px] w-[540px] mb-14
          max-lg:h-[50px] max-lg:w-[290px]
          ${event.images.length === 1 && 'hidden'}
          `}
      >
        {event.images.map((image: any, index: number) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={image}
              className={`w-full h-full object-cover 
                transition-all duration-300 
                ${activeIndex === index ? 'brightness-100' : 'brightness-[30%]'}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="dynamic-subheading text-header">{event.title}</h3>
      <p className="dynamic-text text-body">
        {event.content.split('\n').map((line: string, index: number) => (
          <div key={index} className="mb-4">{line}</div>
        ))}
      </p>
      <div className="flex flex-col gap-y-1">
        <p className="text-lg text-gray-500">Location: {event.location}</p>
        <p className="text-lg text-gray-500">Date: {event.date}</p>
      </div>
    </div>
  );
};

const Event = () => {
  const { events } = useData();

  if (!events) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <EventContent events={events} />
    </Suspense>
  );
};

export default Event;
