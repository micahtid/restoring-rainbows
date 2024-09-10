import { MouseEventHandler } from "react";

interface OutlineButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative px-4 py-2 font-medium text-black/50 transition-colors duration-[400ms] hover:text-primary border-[2px] border-gray-300 hover:border-transparent"
    >
      <span>{children}</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default OutlineButton;
