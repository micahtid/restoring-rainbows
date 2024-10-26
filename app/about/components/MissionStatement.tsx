import { aboutPageMissionStatement, aboutPageOurStory } from "@/data"

const MissionStatement = () => {
  const renderParagraphs = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph.trim()}</p>
    ));
  };

  const displayData = [
    {
      title: "Our Mission",
      description: aboutPageMissionStatement
    },
    {
      title: "Our Story",
      description: aboutPageOurStory
    }
  ]

  return (
    <div className='w-[100vw] mt-24'>
      <div
        style={{
          backgroundImage: `url(/about_header.JPG)`,
        }}
        className="
        w-full 
        bg-center bg-cover bg-no-repeat bg-fixed 
        flex justify-start items-center">
        <h3 className='
        z-30 px-x py-36
        dynamic-subheading text-white text-left 
        max-w-[1000px]
        fade-in-animation'>
          Spreading Art and Saving the Planet
        </h3>
      </div>

      <div className="max-w-max w-full mx-auto px-x py-8 mt-12 flex flex-col justify-start items-start gap-y-12 
      fade-in-animation">
        {
          displayData.map((data, index) => (
            <>
              <h3 className='dynamic-subheading text-header'>{data.title}</h3>
              <div className='dynamic-text text-body max-w-[1000px]'>
                {renderParagraphs(data.description)} 
              </div>
              <div className="w-full h-[1px] bg-body" />
            </>
          ))
        }
      </div>
    </div>
  );
}

export default MissionStatement;