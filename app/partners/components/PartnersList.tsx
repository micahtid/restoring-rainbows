"use client";

import { DocumentData } from "firebase/firestore";

import usePartnerDisplayModal from "@/hooks/usePartnerDisplayModal";
import Highlight from "@/components/Highlight";

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
      <div className="flex flex-col gap-y-2">
        <div className="">
          <Highlight text="Our Support" />
        </div>
        <h3 className="dynamic-heading">
          Partners
        </h3>
      </div>
      <div className="w-full flex justify-end">
        <p className="text-lg w-[800px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde delectus aliquam quas impedit atque maiores, voluptatem accusamus ut eum modi, fuga in pariatur quis quae aperiam, ad qui officia!
        </p>
      </div>
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