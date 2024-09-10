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
      className="flex flex-col justify-start items-center gap-y-6
    py-12 w-full max-w-max"
    >
      <h3 className="text-5xl font-bold">Volunteers</h3>
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
        className="bg-primary px-4 py-2 rounded-full text-white"
        onClick={() => {
          onOpen();
        }}>
          Add Volunteer
        </button>
    </div>
  );
};

export default VolunteersDashboard;
