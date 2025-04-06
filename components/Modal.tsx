import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/30 backdrop-blur-[2px] fixed inset-0 z-[11000] pointer-events-auto" />
        <Dialog.Content className="fixed drop-shadow-md top-[50%] left-[50%] z-[15000]
        max-h-full h-full md:max-h-[85vh] md:h-auto w-full md:w-[90vw] md:max-w-[650px]
        translate-x-[-50%] translate-y-[-50%] bg-white p-[30px] max-md:p-4 focus:outline-none focus:ring-0">
            <Dialog.Title className="text-2xl text-left font-bold mb-6 text-header">
                {title}
            </Dialog.Title>
            <div className="overflow-y-auto max-h-[calc(85vh-120px)] max-md:max-h-[calc(100%-80px)] pb-4 no-scrollbar">
                {children}
            </div>
            <Dialog.Close asChild>
                <button className="text-neutral-400 hover:text-primary transition-colors duration-300 absolute top-[15px] right-[15px] inline-flex h-[30px] w-[30px] 
                appearance-none items-center justify-center focus:outline-none">
                    <IoMdClose size={20} />
                </button>
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
