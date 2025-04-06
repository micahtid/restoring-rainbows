'use client';

import useEventsModal from "@/hooks/useEventsModal";
import { useData } from "@/providers/useData";
import { deleteEvent } from "@/utils/database";

import DataLine from "./DataLine";

const EventsDashboard = () => {
  const {
    onOpen,
    setCurrentEvent,
    setNewEvent,
    updated,
    setUpdated
  } = useEventsModal();

  const {
    events
  } = useData();

  return (
    <div className="flex flex-col justify-start items-start gap-y-8
    w-full">
      <h3 className="text-4xl font-bold text-header">Events</h3>
      <div className="flex flex-col justify-start items-center gap-y-2 w-full">
        {events?.map((event, index) => (
          <DataLine
          key={index}
          onClick={() => {
            setNewEvent(false);
            setCurrentEvent(event);
            setUpdated(!updated);
            onOpen(); 
          }} 
          onClickDelete={() => {
            deleteEvent(event);
          }}
          display={event.title}/>
        ))}
      </div>
      <button 
      className="bg-primary px-5 py-2 rounded-full text-white"
      onClick={() => {
        setNewEvent(true);
        setCurrentEvent(null);
        setUpdated(!updated);
        onOpen();
      }}>
        Create Event
      </button>
    </div>  
  )
}

export default EventsDashboard;