"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useData } from '@/providers/useData';

import Loader from '@/components/Loader';
import { PiLinkSimpleBreakDuotone, PiInstagramLogoDuotone } from "react-icons/pi";

const linkStyles = `flex justify-center items-center gap-x-2 hover:underline`;

const Partner = () => {
  const searchParams = useSearchParams();
  
  const partnerName = searchParams.get('name');

  const { partners } = useData();
  const [partnerData, setPartnerData] = useState<null | any>(null); 

  useEffect(() => {
    if (partnerName && partners) {
      const foundPartner = partners.find(
        (partner: any) => partner.name === partnerName
      );
      setPartnerData(foundPartner || null); 
    }
  }, [partners, partnerName]);

  if (!partners) {
    return (
      <Loader />
    )
  }

  return (
    <div className='px-4 py-20
    max-w-max w-full mx-auto
    flex flex-col gap-y-12'>
        <h3 className='text-header font-bold uppercase font-title dynamic-subheading'>
            About {partnerData?.name}
        </h3>
        <div className="flex gap-x-32">
            <img src={partnerData?.logo} className='w-[500px] h-[500px] object-cover drop-shadow' />
            <div className="flex flex-col gap-y-6">
                <div className="text-lg text-body">{partnerData?.description}</div>
                <div className="flex gap-x-8">
                  <a 
                  href={partnerData?.instagram}
                  className={linkStyles}>
                    <PiInstagramLogoDuotone />
                    Instagram
                  </a>
                  <a 
                  href={partnerData?.website}
                  className={linkStyles}>
                    <PiLinkSimpleBreakDuotone />
                    Website
                  </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Partner;
