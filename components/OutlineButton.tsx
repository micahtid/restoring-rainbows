import { twMerge } from "tailwind-merge";

interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, className }) => {
  return (
    <div className={twMerge('drop-shadow-sm group relative w-full', className)}>
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 transition-all duration-[200ms] group-hover:w-full group-hover:shadow-[0_0_8px_2px_rgba(255,182,193,0.7)]" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 transition-all delay-[200ms] duration-[200ms] group-hover:h-full group-hover:shadow-[0_0_8px_2px_rgba(173,216,230,0.7)]" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-l from-purple-500 via-pink-500 to-red-500 transition-all delay-[400ms] duration-[200ms] group-hover:w-full group-hover:shadow-[0_0_8px_2px_rgba(238,130,238,0.7)]" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-t from-red-500 via-orange-500 to-pink-500 transition-all delay-[600ms] duration-[200ms] group-hover:h-full group-hover:shadow-[0_0_8px_2px_rgba(255,165,0,0.7)]" />
    </div>
  );
};

export default OutlineButton;
