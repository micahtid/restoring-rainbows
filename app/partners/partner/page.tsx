"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useData } from '@/providers/useData';
import { FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import Loader from '@/components/Loader';
import { DocumentData } from 'firebase/firestore';

const linkButtonStyles = `w-[240px] py-2 max-sm:w-full
bg-primary text-white font-accent shadow-sm
hover:bg-white hover:text-primary
transition-all duration-500
flex justify-center items-center gap-x-2`;

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
    <div className='px-4 pt-24 pb-48 max-w-max w-full mx-auto flex gap-x-20 max-lg:flex-col max-lg:items-start
    fade-in-animation'>
      {/* ISSUE: Change to <Image /> */}
      <img src={partnerData?.logo} className='w-[500px] aspect-square object-cover drop-shadow
      max-lg:w-full' alt={partnerData?.name} />
      <div className="flex flex-col gap-y-6 max-lg:max-w-[500px] max-lg:w-full max-lg:mt-8">
        <h3 className='text-3xl font-bold font-title uppercase text-header'>{partnerData?.name}</h3>
        <div className="dynamic-text text-body">{partnerData?.description}</div>
        <div className="flex gap-x-6 max-sm:flex-col max-sm:gap-y-4">
          <a href={partnerData?.instagram} className={linkButtonStyles}>
            <FaInstagram size={18} />
            <span>Instagram</span>
          </a>
          <a href={partnerData?.website} className={linkButtonStyles}>
            <FaExternalLinkAlt size={16} />
            <span>Website</span>
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
