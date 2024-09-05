import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface ExecutiveBoardModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  //////////////////
  currentExecutiveBoardMember: DocumentData | null;
  setExecutiveBoardMember: (member: DocumentData | null) => void;
  //////////////////
  newExecutiveBoardMember: boolean;
  setNewExecutiveBoardMember: (status: boolean) => void;
  //////////////////
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const useExecutiveBoardModal = create<ExecutiveBoardModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  //////////////////
  currentExecutiveBoardMember: null,
  setExecutiveBoardMember: (member: DocumentData | null) => set({currentExecutiveBoardMember: member}),
  //////////////////
  newExecutiveBoardMember: false,
  setNewExecutiveBoardMember: (status: boolean) => set({ newExecutiveBoardMember: status }),
  //////////////////
  updated: false,
  setUpdated: (status: boolean) => set({updated: status})
}));

export default useExecutiveBoardModal;
