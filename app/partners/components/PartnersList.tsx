"use client";

import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { partnerPageDescription } from "@/data";

import Highlight from "@/components/Highlight";
import { IoOpenOutline } from "react-icons/io5";

interface PartnersListProps {
  partners: DocumentData[] | null;
}

const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  const router = useRouter();

  return (
    <div className="w-[100vw] flex justify-center items-center
    px-x pt-28 py-52"
    style={{
      background: 'radial-gradient(circle at top center, rgba(243, 226, 202, 0.3), rgba(250, 250, 250, 0.3))'
    }}
    >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1126px"
          viewBox="0 0 1236 1126"
          version="1.1"
          className="absolute top-[125px] left-1/2 transform -translate-x-1/2 opacity-[15%] z-0 w-full 
          max-lg:-top-[25px] max-md:-top-[100px] max-sm:hidden"
        >
        <g id="Desktop" stroke="#73a0e1" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
          <g id="Start-a-Club" transform="translate(-102.000000, -144.000000)" stroke="#73a0e1" strokeWidth="60">
            <path d="M1027.6752,1240 C1044.56114,1217.31762 1074.84092,1211.59035 1102.15271,1210.29461 C1134.25729,1208.77102 1166.26809,1212.2831 1198.28612,1208.14847 C1230.04088,1204.04951 1262.27889,1192.84123 1283.38421,1168.72042 C1301.61411,1147.88384 1312.44146,1119.58811 1306.24582,1092.41322 C1293.23305,1035.32695 1223.00857,1034.27862 1178.26989,1013.48117 C1125.77645,989.079571 1110.62153,924.878234 1055.88856,903.342 C1040.80938,897.409898 1024.64349,895.495055 1008.44515,895.215423 C993.779489,894.962259 978.801282,896.034755 964.324351,893.261454 C948.011809,890.136025 934.440062,881.989886 923.252087,870.33857 C913.111143,859.777012 904.243226,847.643534 891.083801,840.237325 C874.476744,830.890956 855.45466,830.785087 842.285618,845.224663 C832.81064,855.617061 826.953992,871.445589 814.304259,878.211983 C807.401782,881.90358 798.583152,880.875962 791.039953,878.094606 C777.194127,872.98759 767.535227,860.446747 762.0332,847.705674 C750.805555,821.706842 755.668063,792.311005 757.393081,765.099286 C759.044771,739.065932 758.685342,710.922107 740.859352,689.556184 C726.756275,672.654009 704.545012,662.149988 683.669285,655.048727 C638.840448,639.800176 590.17089,638.148854 543.268424,633.647131 C523.484207,631.749549 503.356189,629.682807 484.277607,624.063708 C471.053268,620.16958 457.981597,614.162679 452.210299,602.568901 C449.010299,596.140827 448.590765,587.034964 450.725701,579.105165 C454.482274,565.151205 465.081219,553.449256 477.705708,545.959043 C492.968814,536.903813 511.160244,533.478039 528.790292,531.695531 C547.06106,529.849733 565.476081,528.986672 583.828593,528.308882 C656.823914,525.616134 729.863712,528.781839 802.877065,528.16619 C874.381778,527.563198 946.636603,523.350312 1016.02922,505.734674 C1049.88165,497.139743 1083.77496,485.627668 1114.50913,469.396379 C1143.27907,454.203064 1168.31287,432.598935 1179.28928,402.224963 C1189.84855,373.007491 1186.92263,339.624315 1174.87996,311.252642 C1162.66058,282.463249 1141.24391,258.242322 1115.84827,239.187099 C1061.90749,198.717621 990.80789,173.579548 922.057196,174 C887.518363,174.220514 854.702144,182.02258 823.072401,194.953527 C792.429585,207.481712 763.497362,223.479399 732.937491,236.179045 C704.547416,247.976506 673.204976,257.068559 641.967119,252.694569 C608.683281,248.035194 580.978406,227.952354 548.896672,219.63015 C533.203213,215.557655 516.927936,214.904031 501.125085,218.84534 C485.218854,222.813117 470.636138,230.694584 456.983851,239.259596 C429.587916,256.448307 401.427443,280.276829 366.757581,280.425276 C350.667428,280.49317 337.962397,273.490873 326.654211,263.099626 C316.186296,253.482831 306.551437,242.2688 293.448511,235.783188 C259.276319,218.870657 226.612768,243.47133 197.450943,258.248075 C183.962141,265.084664 168.226608,270.879827 153.041639,265.907449 C140.943671,261.944275 130.977032,252.046699 132.08417,239.261897" id="Stroke-1" >
            </path>
          </g>
        </g>
      </svg>
      <div className="max-w-max w-full z-20
      flex flex-col justify-start items-start gap-y-12
      fade-in-animation">
        <div className="flex flex-col gap-y-2">
          <div className="">
            <Highlight text="Our Support" />
          </div>
          <h3 className="dynamic-heading text-header">
            Partners
          </h3>
        </div>
        <div className="w-full flex justify-end">
          <p className="dynamic-text text-body w-[800px]">
            {partnerPageDescription}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center flex-wrap gap-4">
          {partners?.map((partner, index) => (
            <div 
            key={index}
            className="w-[250px] max-[559px]:w-[45%]
            flex flex-col gap-y-2">
              <img src={partner.logo} className="w-full h-full aspect-square object-cover" />
              <div className="flex items-center gap-x-2 
              dynamic-text font-semibold max-[559px]:text-base">
                <h3 className="max-w-[200px] overflow-hidden text-nowrap overflow-ellipsis">{partner.name}</h3>
                <IoOpenOutline size={18} className="max-[559px]:hidden"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnersList