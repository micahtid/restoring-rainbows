import { useData } from "@/providers/useData";
import useVolunteerModal from "@/hooks/useVolunteerModal";
import { deleteVolunteer } from "@/utils/database";

import DataLine from "./DataLine";

const VolunteersDashboard = () => {
  const {
    volunteers
  } = useData();

  const {
    onOpen,
  } = useVolunteerModal();

  return (
    <div
      className="flex flex-col justify-start items-start gap-y-8 w-full"
    >
      <h3 className="text-4xl font-bold text-header">Volunteers</h3>
      <div className="flex flex-col justify-start items-center gap-y-2 w-full">
          {volunteers?.map((volunteer, index) => (
              <DataLine
              key={index}
              disableEdit
              onClick={() => {
                
              }} 
              onClickDelete={() => {
                deleteVolunteer(volunteer);
              }}
              display={`${volunteer.firstName} ${volunteer.lastName}`}/>
            ))}
      </div>
        <button 
        className="bg-primary px-5 py-2 rounded-full text-white"
        onClick={() => {
          onOpen();
        }}>
          Add Volunteer
        </button>
    </div>
  );
};

export default VolunteersDashboard;
