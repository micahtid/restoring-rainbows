"use client";

import { useEffect, useState, Suspense, memo, useCallback, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";

import Loader from "@/components/Loader";

interface EventDisplayProps {
  events: DocumentData[] | null;
}

const EventDisplay: React.FC<EventDisplayProps> = memo(({ events }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Memoize filtered events to avoid unnecessary recalculations
  const filteredEvents = useMemo(() => {
    const queryValue = searchParams.get('query') || '';

    if (!queryValue || !events) return events || [];

    const lowerQuery = queryValue.toLowerCase();
    return events.filter((event) => (
      event.content?.toLowerCase().includes(lowerQuery) ||
      event.branch?.toLowerCase().includes(lowerQuery) ||
      event.firstName?.toLowerCase().includes(lowerQuery) ||
      event.lastName?.toLowerCase().includes(lowerQuery) ||
      event.location?.toLowerCase().includes(lowerQuery) ||
      event.title?.toLowerCase().includes(lowerQuery)
    ));
  }, [searchParams, events]);

  const handleEventClick = useCallback((title: string) => {
    router.push(`/events/item?title=${title}`);
  }, [router]);

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full flex flex-col justify-start items-start gap-y-4">
        <h3>{filteredEvents.length} Events Displayed</h3>
        <div className="flex flex-row justify-start items-start gap-4 flex-wrap w-full min-h-[800px]">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="cursor-pointer max-lg:w-[45%] max-md:w-full"
              onClick={() => handleEventClick(event.title)}
            >
              <Image
                src={event.images[0]}
                alt={event.title}
                width={300}
                height={300}
                className="w-[300px] aspect-square object-cover max-lg:w-full"
                sizes="(max-width: 1024px) 100vw, (max-width: 768px) 45vw, 300px"
              />
              <div className="max-w-[300px] max-lg:max-w-none max-lg:w-full">
                <h4 className="mt-2 dynamic-text text-header font-title font-bold leading-tight mb-1 w-full max-lg:text-nowrap max-lg:overflow-x-hidden max-lg:overflow-ellipsis">
                  {event.title}
                </h4>
                <p className="text-sm font-title text-body">{event.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
});

EventDisplay.displayName = 'EventDisplay';

export default EventDisplay;
