import { useData } from "@/providers/useData";
import useStatisticsModal from "@/hooks/useStatisticsModal";

import DataLine from "./DataLine";

const StatisticsDashboard = () => {
  const {
    statistics
  } = useData();

  const {
    onOpen,
    setCurrentStatistic,
    setUpdated,
    updated
  } = useStatisticsModal();

  return (
    <div
      className="flex flex-col justify-start items-center gap-y-6
    py-12 w-full max-w-max"
    >
      <h3 className="text-5xl font-title font-bold">Statistics</h3>
      <div className="flex flex-col justify-start items-center gap-y-2">
          {statistics?.map((statistic) => (
              <DataLine
              onClick={() => {
                setCurrentStatistic(statistic);
                setUpdated(!updated);
                onOpen(); 
              }} 
              onClickDelete={() => {
                // deleteExecutiveBoardMember(member);
              }}
              display={`${statistic.number} ${statistic.label}`}/>
            ))}
      </div>
        <button 
        className="bg-primary px-4 py-2 rounded-full text-white"
        onClick={() => {
          setCurrentStatistic(null);
          setUpdated(!updated);
          onOpen();
        }}>
          Add Executive Member
        </button>
    </div>
  );
};

export default StatisticsDashboard;
