import { MouseEventHandler } from "react";

interface OutlineButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      bg-secondary hover:bg-protonred transition-all duration-150 p-4
      hover:bg-primary
      font-bold text-left rounded-md
      drop-shadow-[0px_4px_0px_rgba(115,160,225,1)]"
    >
      {children}
    </button>
  );
};

export default OutlineButton;
