"use client";

import Modal from "../Modal";
import useBranchFounderModal from "@/hooks/useBranchFounderModal";

const BranchFounderModal = () => {
    const { onClose, isOpen, currentBranch } = useBranchFounderModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };


    return (
        <Modal title={`${currentBranch?.city} Branch Founder`} isOpen={isOpen} onChange={onChange}>
            <div className="flex flex-col justify-start items-start gap-y-6">
                <img src={currentBranch?.photo} className="w-full max-h-[300px] object-cover drop-shadow"/>
                <div className="">
                    <h3 className="text-xl font-bold uppercase">{currentBranch?.firstName} {currentBranch?.lastName}</h3>
                    <p className="text-xl">{currentBranch?.bio}</p>
                </div>
            </div>
        </Modal>
    );
};

export default BranchFounderModal;
