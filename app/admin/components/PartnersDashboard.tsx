import { useData } from "@/providers/useData";
import usePartnerModal from "@/hooks/userPartnerModal";
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
      className="flex flex-col justify-start items-center gap-y-6
    py-12 w-full max-w-max"
    >
      <h3 className="text-5xl font-title font-bold">Partners</h3>
      <div className="flex flex-col justify-start items-center gap-y-2">
          {partners?.map((partner) => (
              <DataLine
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
        className="bg-primary px-4 py-2 rounded-full text-white"
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
