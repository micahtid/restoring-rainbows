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
      className="flex flex-col justify-start items-start gap-y-8 w-full"
    >
      <h3 className="text-4xl font-bold text-header">Statistics</h3>
      <div className="flex flex-col justify-start items-center gap-y-2
      w-full">
          {statistics?.map((statistic, index) => (
              <DataLine
              key={index}
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
