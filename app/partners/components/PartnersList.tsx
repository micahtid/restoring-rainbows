"use client";

import { DocumentData } from "firebase/firestore";

import usePartnerDisplayModal from "@/hooks/usePartnerDisplayModal";

interface PartnersListProps {
  partners: DocumentData[] | null;
}

const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  const {
    onOpen,
    setCurrentPartner
  } = usePartnerDisplayModal();

  return (
    <div className="max-w-max w-full mx-auto
    px-4 py-20 flex flex-col justify-start items-start gap-y-12">
      <h3 className="dynamic-subheading">
        Partners
      </h3>
      <div className="flex flex-row justify-start items-center flex-wrap gap-4">
        {partners?.map((partner, index) => (
          <button
          key={index}
          className="w-[250px] h-[250px]"
          onClick={() => {
            setCurrentPartner(partner);
            onOpen();
          }}>
            <img src={partner.logo}
            className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default PartnersList