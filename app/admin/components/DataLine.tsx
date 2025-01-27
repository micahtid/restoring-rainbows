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
    <div className="flex justify-between items-center gap-x-56 w-full
          border-b border-gray-100 py-4 group">
        <div className="flex justify-start items-center gap-x-12">
          <button 
          onClick={onClick}
          disabled={disableEdit}
          className={`${disableEdit && "hidden"} text-gray-400 hover:text-primary transition-colors duration-300`}>
            <MdEdit />
          </button>
          <p className="text-gray-600">
              {display}
          </p>
        </div>
        <button 
        onClick={onClickDelete}
        disabled={disableDelete}
        className={`${disableDelete && "hidden"} text-gray-400 hover:text-red-500 transition-colors duration-300`}>
            <MdDelete />
        </button>
    </div>
  )
}

export default DataLine