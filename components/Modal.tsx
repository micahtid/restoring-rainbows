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
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900/30 backdrop-blur-[2px] z-[11000] pointer-events-auto" />
        <Dialog.Content className="fixed top-[50%] left-[50%] w-full h-full max-h-full p-[30px] bg-white drop-shadow-md translate-x-[-50%] translate-y-[-50%] z-[15000] focus:outline-none focus:ring-0
        max-md:p-4
        md:w-[90vw] md:h-auto md:max-w-[650px] md:max-h-[85vh]">
            <Dialog.Title className="mb-6 text-2xl text-left font-bold text-header">
                {title}
            </Dialog.Title>
            <div className="overflow-y-auto max-h-[calc(85vh-120px)] pb-4 no-scrollbar max-md:max-h-[calc(100%-80px)]">
                {children}
            </div>
            <Dialog.Close asChild>
                <button className="absolute top-[15px] right-[15px] inline-flex w-[30px] h-[30px] items-center justify-center text-neutral-400 appearance-none transition-colors duration-300 focus:outline-none hover:text-primary">
                    <IoMdClose size={20} />
                </button>
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
