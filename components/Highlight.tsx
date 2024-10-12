import { twMerge } from "tailwind-merge";

interface HighlightProps {
    text: string;
    className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ text, className }) => {
  return (
    <div className={twMerge("bg-primary p-2 inline-block", className)}>
        <p className="uppercase text-white font-title font-semibold text-sm">{text}</p>
    </div>
  );
}

export default Highlight;
