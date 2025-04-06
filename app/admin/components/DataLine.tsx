import { MouseEventHandler } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

interface DataLineProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    onClickDelete: MouseEventHandler<HTMLButtonElement>;
    display: string;
    disableEdit?: boolean;
    disableDelete?: boolean;
}

const DataLine: React.FC<DataLineProps> = ({ onClick, onClickDelete, display, disableDelete, disableEdit }) => {
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-100 py-4 px-2 group hover:bg-gray-50 transition-all duration-300">
        <div className="flex-1 text-gray-600 truncate">
            {display}
        </div>
        <div className="flex items-center gap-x-4">
          <button 
            onClick={onClick}
            disabled={disableEdit}
            className={`${disableEdit && "hidden"} p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300`}>
              <MdEdit size={18} />
          </button>
          <button 
            onClick={onClickDelete}
            disabled={disableDelete}
            className={`${disableDelete && "hidden"} p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300`}>
              <MdDelete size={18} />
          </button>
        </div>
    </div>
  )
}

export default DataLine