import { aboutPageMissionStatement, aboutPageOurStory, aboutPageProblem, aboutPageSolution } from "@/data"

const MissionStatement = () => {
  const renderParagraphs = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph.trim()}</p>
    ));
  };

  const displayData = [
    {
      title: "Our Story",
      description: aboutPageOurStory
    },
    {
      title: "Problem",
      description: aboutPageProblem
    },
    {
      title: "Solution",
      description: aboutPageSolution
    }
  ]

  return (
    <div className='w-[100vw]'>
      <div className="
        w-full
        flex justify-center items-center
        pb-24 pt-36 relative"
        style={{
          background: 'linear-gradient(to top, #e3f0ff, #f9fbff)'
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1070 588"
          version="1.1"
          className="absolute inset-0 z-0 opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#73a0e1" strokeWidth="60" fill="none" fillRule="evenodd" strokeLinecap="round">
            <path d="M1002.44003,527.911156 C981.556834,529.437096 968.851796,511.037423 962.746959,493.433285 C955.522321,472.602808 949.803542,450.744182 945.323173,429.168181 C940.916063,407.949241 938.818324,386.266237 941.285841,364.658833 C943.530096,345.018171 949.433764,325.606632 957.743319,307.705913 C966.220321,289.444644 977.121815,272.281308 989.87104,256.710207 C1002.39817,241.412425 1016.64395,226.985779 1025.74422,209.232769 C1045.59832,170.50041 1033.11189,126.943661 1017.89747,88.9789244 C1010.62981,70.8467558 1003.60867,51.9050946 991.114102,36.6212699 C978.6707,21.3967615 960.305025,12.2236753 941.780042,6.64910933 C905.270792,-4.33719371 865.35795,-1.01897197 829.699888,11.5397937 C754.538299,38.0134576 704.122812,102.700754 666.383291,169.906084 C644.972175,208.035976 626.435564,247.719721 604.337217,285.470454 C586.849476,315.341428 564.554612,354.040059 527.806982,362.131495 C509.087808,366.253394 491.761699,357.542045 474.028602,353.009584 C465.180658,350.748587 456.06759,349.549468 446.997547,351.105648 C437.808895,352.685089 429.854002,357.495522 422.854952,363.471345 C410.689465,373.85867 397.556507,394.820574 378.976872,392.239734 C361.849607,389.861268 362.872894,367.271075 364.138049,354.686722 C366.079968,335.357761 365.721818,316.290489 348.488735,303.90502 C334.019691,293.506064 313.786517,291.252046 296.511573,293.129231 C278.415673,295.097136 260.924443,301.606805 246.426328,312.704762 C239.055173,318.34446 233.082899,325.069296 227.143183,332.155845 C221.359286,339.056304 215.080025,346.901172 206.422785,350.229861 C200.438882,352.532728 191.738617,353.507375 186.60474,348.786498 C182.018554,344.570391 182.397636,337.246577 182.725553,331.584781 C183.44883,319.121387 187.165222,303.417696 175.743945,294.469081 C161.820265,283.558377 139.099807,291.980124 125.515672,299.515616 C109.931477,308.159508 96.9671293,320.628718 82.4329662,330.79855 C74.5536567,336.312636 65.880137,341.266126 55.9240201,340.154237 C47.9540102,339.26333 40.6107635,334.961156 35.1524579,329.221435 C22.1195032,315.517051 24.3858513,295.430935 33.3384492,280.145947 C43.4213141,262.925621 60.9276607,251.860229 78.3049336,243.048856 C97.4287713,233.350065 117.446822,225.487752 137.046256,216.826414 C172.77525,201.03782 209.121704,182.156638 233.850364,150.926042 C255.183571,123.983663 265.696682,88.5241663 253.243977,55.2582083 C247.561246,40.0802224 237.90165,27.3725846 224.562872,18.1401822" />
          </g>
        </svg>
        <div 
        className="
        max-w-max w-full mx-auto px-x 
        flex gap-x-24
        max-xl:gap-x-20 max-lg:gap-x-16 items-center 
        max-lg:flex-col max-lg:gap-y-12 max-md:gap-y-8 
        relative z-10">
          <div className="max-lg:text-center w-min">
            <h3 className='
            dynamic-heading text-header
            fade-in-animation'>
              About Our Organization
            </h3>
          </div>
          <div className="flex gap-x-3 max-lg:gap-x-2 max-md:gap-x-1 items-start max-lg:justify-center">
            {/* ISSUE: Change to <Image /> */}
            <img
              src="/about_1.png"
              alt="About 1"
              className="h-[280px] max-xl:h-[240px] max-lg:h-[200px] max-md:h-[160px] max-sm:h-[120px] w-auto object-cover"
            />
            {/* ISSUE: Change to <Image /> */}
            <img
              src="/about_2.png"
              alt="About 2"
              className="h-[240px] max-xl:h-[200px] max-lg:h-[170px] max-md:h-[140px] max-sm:h-[105px] w-auto object-cover"
            />
            {/* ISSUE: Change to <Image /> */}
            <img
              src="/about_3.png"
              alt="About 3"
              className="h-[200px] max-xl:h-[160px] max-lg:h-[140px] max-md:h-[120px] max-sm:h-[90px] w-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-max w-full mx-auto px-x py-8 mt-12 flex flex-col justify-start items-start gap-y-12 
      fade-in-animation">
        {
          displayData.map((data, index) => (
            <div key={index}>
              <h3 className='dynamic-subheading text-header'>{data.title}</h3>
              <div className='dynamic-text text-body max-w-[1000px] mt-6 leading-relaxed'>
                {renderParagraphs(data.description)}
              </div>
              {index < displayData.length - 1 && <div className="w-full h-[1px] bg-body mt-8" />}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MissionStatement;