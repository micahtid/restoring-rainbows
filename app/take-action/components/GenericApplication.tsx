import { startABranchInstructions } from "@/data"
import OutlineButton from "@/components/OutlineButton";

interface GenericApplicationProps {
    instructions: string;
    title: string;
    buttonLabel: string;
    buttonLink: string;
}

const GenericApplication: React.FC<GenericApplicationProps> = ({ instructions, title, buttonLabel, buttonLink }) => {
    const renderParagraphs = (text: string) => {
        return text.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">{paragraph.trim()}</p>
        ));
    };

    return (
        <div 
            className="relative min-h-screen px-6 md:px-12 py-28
            flex justify-center items-center"
            style={{
                backgroundColor: '#d5e3f1',
                backgroundImage: 'linear-gradient(135deg, #e3f0ff 0%, #e6f4f0 100%)',
            }}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%" 
                viewBox="0 0 1036 1020" 
                version="1.1"
                className="absolute inset-0 z-0 opacity-10"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Pattern</title>
                <g stroke="#73a0e1" strokeWidth="60" fill="none" fillRule="evenodd" strokeLinecap="round">
                    <path d="M232,150 C450,180 550,250 600,400 C650,550 750,600 900,620 C1050,640 1150,750 1208,1110" />
                </g>
            </svg>

            <div className='
                relative z-10
                max-w-max mx-auto w-full 
                flex flex-col gap-y-6
                px-8 py-12
                bg-white shadow-sm'
            >
                <h3 className='dynamic-heading text-header'>
                    {title}
                </h3>
                <div className="dynamic-text text-body">
                    {renderParagraphs(instructions)}
                </div>
                <OutlineButton 
                    className="
                        w-[200px] py-2 mt-5
                        bg-primary text-white hover:bg-transparent hover:text-body
                        transition-all duration-500
                        shadow-sm flex justify-center items-center"
                >
                    <a 
                        className="dynamic-text font-medium" 
                        href={buttonLink}
                    >
                        {buttonLabel}
                    </a>
                </OutlineButton>
            </div>
        </div>
    );
};

export default GenericApplication;