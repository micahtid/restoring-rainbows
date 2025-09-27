import { create } from "zustand";
import { DocumentData } from "firebase/firestore";

interface EventsModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentEvent: DocumentData | null;
  setCurrentEvent: (event: DocumentData | null) => void;
  newEvent: boolean;
  setNewEvent: (status: boolean) => void;
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const useEventsModal = create<EventsModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  currentEvent: null,
  setCurrentEvent: (event: DocumentData | null) => set({ currentEvent: event }),
  newEvent: false,
  setNewEvent: (status: boolean) => set({ newEvent: status }),
  updated: false,
  setUpdated: (status: boolean) => set({ updated: status }),
}));

export default useEventsModal;
