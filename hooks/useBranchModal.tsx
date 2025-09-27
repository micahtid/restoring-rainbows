import { create } from "zustand";
import { DocumentData } from "firebase/firestore";

interface BranchModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentBranch: DocumentData | null;
  setCurrentBranch: (branch: DocumentData | null) => void;
  newBranch: boolean;
  setNewBranch: (status: boolean) => void;
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const useBranchModal = create<BranchModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  currentBranch: null,
  setCurrentBranch: (branch: DocumentData | null) => set({ currentBranch: branch }),
  newBranch: false,
  setNewBranch: (status: boolean) => set({ newBranch: status }),
  updated: false,
  setUpdated: (status: boolean) => set({ updated: status }),
}));

export default useBranchModal;
