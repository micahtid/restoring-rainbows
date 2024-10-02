interface OutlineButtonProps {
  children: React.ReactNode;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children }) => {
  return (
    <div className="group relative w-full">
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 transition-all duration-[200ms] group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[3px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 transition-all delay-[200ms] duration-[200ms] group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-gradient-to-l from-purple-500 via-pink-500 to-red-500 transition-all delay-[400ms] duration-[200ms] group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[3px] bg-gradient-to-t from-red-500 via-orange-500 to-yellow-500 transition-all delay-[600ms] duration-[200ms] group-hover:h-full" />
    </div>
  );
};

export default OutlineButton;
