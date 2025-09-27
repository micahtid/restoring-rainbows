"use client";

import Modal from "../Modal";
import useExecutiveMemberModal from "@/hooks/useExecutiveMemberModal";

const ExecutiveMemberModal = () => {
    const { onClose, isOpen, currentMember } = useExecutiveMemberModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    // ISSUE: 
    // In the case scroll is required (i.e. text overflow),
    // the text is blurry and scroll is slow...

    return (
        <Modal title="Bio" isOpen={isOpen} onChange={onChange}>
            <div className="flex flex-col justify-start items-start gap-y-6">
                {/* ISSUE: Change to <Image /> */}
                <img src={currentMember?.picture} className="w-full max-h-[300px] object-cover drop-shadow" />
                <h3 className="dynamic-text font-semibold">{currentMember?.firstName} {currentMember?.lastName}</h3>
                <p className="text-sm">{currentMember?.bio}</p>
            </div>
        </Modal>
    );
};

export default ExecutiveMemberModal;
