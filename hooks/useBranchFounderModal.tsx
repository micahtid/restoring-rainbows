import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface BranchFounderModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentBranch: DocumentData | null;
  setCurrentBranch: (newBranch: DocumentData) => void;
}

const useBranchFounderModal = create<BranchFounderModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  currentBranch: null,
  setCurrentBranch: (newBranch: DocumentData) => set({ currentBranch: newBranch })
}));

export default useBranchFounderModal;
