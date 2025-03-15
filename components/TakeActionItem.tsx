import OutlineButton from "@/components/OutlineButton"

interface TakeActionItemProps {
    index: number;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
}

const TakeActionItem: React.FC<TakeActionItemProps> = ({ index, title, description, buttonLabel, buttonLink }) => {
  return (
    <div key={index} className={`flex flex-col justify-start items-start gap-y-8 w-full
        ${index % 2 === 1 && "lg:items-end"}`}>

          <h3 className='dynamic-heading text-header'>{title}</h3>
          <p className={`dynamic-text text-body max-w-[800px]
            ${index % 2 === 1 && 'lg:text-right'}`}>
            {description}
          </p>

          <OutlineButton className="w-[240px] py-2 
          bg-primary text-white hover:bg-transparent hover:text-body
          transition-all duration-500
          shadow-sm flex justify-center items-center">
            <a className="dynamic-text font-accent" href={buttonLink}>{buttonLabel}</a>
          </OutlineButton>
    </div>
  )
}

export default TakeActionItem