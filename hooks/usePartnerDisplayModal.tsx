import { create } from "zustand";
import { DocumentData } from "firebase/firestore";

interface PartnerDisplayModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentParnter: DocumentData | null;
  setCurrentPartner: (partner: DocumentData) => void;
}

const usePartnerDisplayModal = create<PartnerDisplayModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  currentParnter: null,
  setCurrentPartner: (partner: DocumentData) => set({ currentParnter: partner })
}));

export default usePartnerDisplayModal;
