import { useData } from "@/providers/useData";
import usePartnerModal from "@/hooks/usePartnerModal";
import { deletePartner } from "@/utils/database";

import DataLine from "./DataLine";

const PartnersDashboard = () => {
  const {
    partners
  } = useData();

  const {
    onOpen,
    setNewPartner,
    setCurrentPartner,
    setUpdated,
    updated
  } = usePartnerModal();

  return (
    <div
      className="flex flex-col justify-start items-start gap-y-8 w-full"
    >
      <h3 className="text-4xl font-bold text-header">Partners</h3>
      <div className="flex flex-col justify-start items-center gap-y-2 w-full">
          {partners?.map((partner, index) => (
              <DataLine
              key={index}
              onClick={() => {
                setNewPartner(false);
                setCurrentPartner(partner);
                setUpdated(!updated);
                onOpen(); 
              }} 
              onClickDelete={() => {
                deletePartner(partner);
              }}
              display={`${partner.name}`}/>
            ))}
      </div>
        <button 
        className="bg-primary px-5 py-2 rounded-full text-white"
        onClick={() => {
          setNewPartner(true);
          setCurrentPartner(null);
          setUpdated(!updated);
          onOpen();
        }}>
          Add Partner
        </button>
    </div>
  );
};

export default PartnersDashboard;
