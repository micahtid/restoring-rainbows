"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useData } from "@/providers/useData";
import Loader from "@/components/Loader";
import { DocumentData } from "firebase/firestore";

interface EventContentProps {
  events: DocumentData[] | null;
}

const EventContent: React.FC<EventContentProps> = ({ events }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const [event, setEvent] = useState<DocumentData | null>(null);

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
    <div className="max-w-max mx-auto max-auto min-h-[400px] 
    px-x mt-24 mb-10
    flex flex-col gap-y-8">
      <img src={event.image} className='w-full max-h-[500px] h-auto object-cover
      max-max:w-full max-max:max-h-none' />
      <h3 className='dynamic-subheading text-header'>{event.title}</h3>
      <p className="dynamic-text text-body">
        {event.content.split('\n').map((line: string, index: number) => (
          <div key={index} className='mb-4'>{line}</div>
        ))}
      </p>
      <p className="text-lg text-gray-500">Location: {event.location}</p>
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
