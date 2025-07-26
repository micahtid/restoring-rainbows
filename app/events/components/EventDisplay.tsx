'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { DocumentData } from 'firebase/firestore';

import Loader from '@/components/Loader';

interface EventDisplayProps {
  events: DocumentData[] | null;
}

const EventDisplay: React.FC<EventDisplayProps> = ({ events }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filteredEvents, setFilteredEvents] = useState<DocumentData[] | null>(events);

  useEffect(() => {
    const queryValue = searchParams.get('query') || '';

    const filteredList = events?.filter((event) => {
      const lowerQuery = queryValue.toLowerCase();

      return (
        event.content?.toLowerCase().includes(lowerQuery) ||
        event.branch?.toLowerCase().includes(lowerQuery) ||
        event.firstName?.toLowerCase().includes(lowerQuery) ||
        event.lastName?.toLowerCase().includes(lowerQuery) ||
        event.location?.toLowerCase().includes(lowerQuery) ||
        event.title?.toLowerCase().includes(lowerQuery)
      );
    });

    setFilteredEvents(filteredList || []);
  }, [searchParams, events]);

  const handleEventClick = (title: string) => {
    router.push(`/events/item?title=${title}`);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full flex flex-col justify-start items-start gap-y-4">
        <h3>{filteredEvents?.length} Events Displayed</h3>
        <div className="flex flex-row justify-start items-start gap-4 flex-wrap w-full min-h-[800px]">
          {filteredEvents?.map((event, index) => (
            <div
              key={index}
              className="cursor-pointer max-lg:w-[45%] max-md:w-full"
              onClick={() => handleEventClick(event.title)}>
              <img
                src={event.images[0]}
                className="w-[300px] aspect-square object-cover max-lg:w-full"
              />
              <div className="max-w-[300px] max-lg:max-w-none max-lg:w-full">
                <h4 className="mt-2 dynamic-text text-header font-title font-bold leading-tight mb-1
                w-full max-lg:text-nowrap max-lg:overflow-x-hidden max-lg:overflow-ellipsis">
                  {event.title}
                </h4>
                <p className='text-sm font-title text-body'>{event.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default EventDisplay;
