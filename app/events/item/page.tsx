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
    <div className="w-full mt-24 flex flex-col gap-y-20 mb-10">
      <div className="relative w-full h-[300px]">
        <h1 className="dynamic-subheading text-white z-40 absolute left-[50px] top-1/2 transform -translate-y-1/2 max-lg:left-[20px]">
          {event.title}
        </h1>
        <img
          src={event.image}
          className="w-full h-full object-cover brightness-50"
          alt={event.title}
        />
      </div>
      <div className="max-w-max mx-auto min-h-[400px] px-x">
        <p className="text-lg text-body mb-4">{event.content}</p>
        <p className="text-sm text-gray-500">Location: {event.location}</p>
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
