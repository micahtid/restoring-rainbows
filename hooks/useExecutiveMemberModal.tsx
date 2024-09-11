import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface ExecutiveMemberModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentMember: DocumentData | null;
  setCurrentMember: (member: DocumentData) => void;
}

const useExecutiveMemberModal = create<ExecutiveMemberModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  currentMember: null,
  setCurrentMember: (member: DocumentData) => set({ currentMember: member })
}));

export default useExecutiveMemberModal;
