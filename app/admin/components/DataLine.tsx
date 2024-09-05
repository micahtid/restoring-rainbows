import { MouseEventHandler } from "react";
import { MdDelete } from "react-icons/md";

interface DataLineProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    onClickDelete: MouseEventHandler<HTMLButtonElement>;
    display: string;
}

const DataLine: React.FC<DataLineProps> = ({ onClick, onClickDelete, display }) => {
  return (
    <div className="flex justify-between items-center gap-x-56
          border-b-[1px] border-black py-4">
        <button onClick={onClick}>
            {display}
        </button>
        <button onClick={onClickDelete}>
            <MdDelete />
        </button>
    </div>
  )
}

export default DataLine