import { twMerge } from "tailwind-merge";

interface HighlightProps {
    text: string;
    className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ text, className }) => {
  return (
    <div className={twMerge("bg-primary py-2 px-4 inline-block", className)}>
        <p className="uppercase text-white font-accent text-sm">{text}</p>
    </div>
  );
}

export default Highlight;
