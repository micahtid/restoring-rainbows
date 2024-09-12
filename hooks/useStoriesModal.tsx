import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface StoriesModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  //////////////////
  currentStory: DocumentData | null;
  setCurrentStory: (story: DocumentData | null) => void;
  //////////////////
  newStory: boolean;
  setNewStory: (status: boolean) => void;
  //////////////////
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const useStoriesModal = create<StoriesModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  //////////////////
  currentStory: null,
  setCurrentStory: (event: DocumentData | null) => set({currentStory: event}),
  //////////////////
  newStory: false,
  setNewStory: (status: boolean) => set({ newStory: status }),
  //////////////////
  updated: false,
  setUpdated: (status: boolean) => set({updated: status})
}));

export default useStoriesModal;
