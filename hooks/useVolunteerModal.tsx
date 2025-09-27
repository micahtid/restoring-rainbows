import { create } from "zustand";
import { DocumentData } from "firebase/firestore";

interface VolunteerModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useVolunteerModal = create<VolunteerModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useVolunteerModal;
