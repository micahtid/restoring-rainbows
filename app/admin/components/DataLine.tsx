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
          border-b-[1px] border-black py-4">
        <div className="flex justify-start items-center gap-x-12">
          <button 
          onClick={onClick}
          disabled={disableEdit}
          className={`${disableEdit && "hidden"}`}>
            <MdEdit />
          </button>
          <p>
              {display}
          </p>
        </div>
        <button 
        onClick={onClickDelete}
        disabled={disableDelete}
        className={`${disableDelete && "hidden"}`}>
            <MdDelete />
        </button>
    </div>
  )
}

export default DataLine