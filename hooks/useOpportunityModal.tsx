import { create } from "zustand";
import { DocumentData } from "firebase/firestore";

interface OpportunityModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentOpportunity: DocumentData | null;
  setCurrentOpportunity: (opportunity: DocumentData | null) => void;
  newOpportunity: boolean;
  setNewOpportunity: (status: boolean) => void;
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const useOpportunityModal = create<OpportunityModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  currentOpportunity: null,
  setCurrentOpportunity: (opportunity: DocumentData | null) => set({ currentOpportunity: opportunity }),
  newOpportunity: false,
  setNewOpportunity: (status: boolean) => set({ newOpportunity: status }),
  updated: false,
  setUpdated: (status: boolean) => set({ updated: status }),
}));

export default useOpportunityModal;