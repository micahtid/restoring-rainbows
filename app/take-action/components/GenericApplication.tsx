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
          <p key={index} className="mb-6">{paragraph.trim()}</p>
        ));
      };

  return (
    <div className="px-x pt-40 pb-40
    flex justify-center items-center"
    style={{
      backgroundColor: '#d5e3f1',
      backgroundImage: 'linear-gradient(to top left, #e3f0ff, #e6f4f0)', 
    }}
    >
      <div className='
      max-w-max mx-auto w-full 
      flex flex-col gap-y-8 
      px-6 py-12
      bg-white drop-shadow-lg'>
          <h3 className='dynamic-heading text-header'>
              {title}
          </h3>
          <div className="dynamic-text text-body">
              {renderParagraphs(instructions)}
          </div>
          <OutlineButton className="w-[200px] py-2 mt-5
              bg-primary text-white hover:bg-transparent hover:text-body
              transition-all duration-500
              shadow-sm flex justify-center items-center">
              <a className="dynamic-text font-medium" 
                href={buttonLink}>
                  {buttonLabel}
              </a>
          </OutlineButton>
      </div>
    </div>
  )
}

export default GenericApplication