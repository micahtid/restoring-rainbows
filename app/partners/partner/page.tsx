"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useData } from '@/providers/useData';
import { PiLinkSimpleBreakDuotone, PiInstagramLogoDuotone } from "react-icons/pi";
import Loader from '@/components/Loader';
import { DocumentData } from 'firebase/firestore';

const linkStyles = `flex justify-center items-center gap-x-2 hover:underline`;

interface PartnerContentProps {
  partners: DocumentData[] | null;
}

const PartnerContent: React.FC<PartnerContentProps> = ({ partners }) => {
  const searchParams = useSearchParams();
  const partnerName = searchParams.get('name');
  const [partnerData, setPartnerData] = useState<null | any>(null);

  useEffect(() => {
    if (partnerName && partners) {
      const foundPartner = partners.find((partner: any) => partner.name === partnerName);
      setPartnerData(foundPartner || null);
    }
  }, [partnerName, partners]);

  if (!partnerData) {
    return <Loader />;
  }

  return (
    <div className='px-4 py-20 mt-20 max-w-max w-full mx-auto flex gap-x-20 max-lg:flex-col max-lg:items-center'>
      <img src={partnerData?.logo} className='w-[500px] h-[500px] object-cover drop-shadow max-[500px]:w-full max-[500px]:h-auto' alt={partnerData?.name} />
      <div className="flex flex-col gap-y-6 max-lg:max-w-[500px] max-lg:w-full max-lg:mt-8">
        <h3 className='text-3xl font-bold font-title uppercase text-header'>{partnerData?.name}</h3>
        <div className="dynamic-text text-body">{partnerData?.description}</div>
        <div className="flex gap-x-8">
          <a href={partnerData?.instagram} className={linkStyles}>
            <PiInstagramLogoDuotone />
            Instagram
          </a>
          <a href={partnerData?.website} className={linkStyles}>
            <PiLinkSimpleBreakDuotone />
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

const Partner = () => {
  const { partners } = useData();

  if (!partners) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <PartnerContent partners={partners} />
    </Suspense>
  );
};

export default Partner;
