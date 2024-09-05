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
      <h3 className="text-5xl font-bold">Statistics</h3>
      <div className="flex flex-col justify-start items-center gap-y-2
      w-full">
          {statistics?.map((statistic) => (
              <DataLine
              disableDelete
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
    </div>
  );
};

export default StatisticsDashboard;
