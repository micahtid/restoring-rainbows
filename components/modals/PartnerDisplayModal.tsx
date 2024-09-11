"use client";

import Modal from "../Modal";
import usePartnerDisplayModal from "@/hooks/usePartnerDisplayModal";

import { PiLinkSimpleBreakDuotone, PiInstagramLogoDuotone } from "react-icons/pi";

const PartnerDisplayModal = () => {
    const { onClose, isOpen, currentParnter } = usePartnerDisplayModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };


    return (
        <Modal title={currentParnter?.name} isOpen={isOpen} onChange={onChange}>
            <div className="flex flex-col justify-start items-start gap-y-6">
                <img src={currentParnter?.logo} className="w-full max-h-[300px] h-full object-cover drop-shadow" />
                <p>{currentParnter?.description}</p>
                <div className="flex justify-start items-center gap-8 flex-wrap">
                    <a href={currentParnter?.website}
                    className="flex justify-center items-center gap-x-3"><PiLinkSimpleBreakDuotone /> Website</a>
                    <a href={currentParnter?.instagram}
                    className="flex justify-center items-center gap-x-2"><PiInstagramLogoDuotone /> Instagram</a>
                </div>
            </div>
        </Modal>
    );
};

export default PartnerDisplayModal;
