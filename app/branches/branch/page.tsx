"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { useData } from '@/providers/useData';
import { DocumentData } from 'firebase/firestore';
import Loader from '@/components/Loader';

interface FounderInformationProps {
  photoUrl: string,
  firstName: string,
  lastName: string,
  bio: string
}

const FounderInformation: React.FC<FounderInformationProps> = ({ photoUrl, firstName, lastName, bio }) => {
  return (
    <div className="flex gap-x-20 
    max-lg:flex-col max-lg:mb-12">
      <img src={photoUrl} className='w-[500px] max-[500px]:w-full object-cover 
      drop-shadow aspect-square' />
      <div className="flex flex-col gap-y-6 max-lg:max-w-[500px] max-lg:w-full max-lg:mt-8">
        <h3 className='text-3xl max-lg:text-2xl 
        font-bold font-title uppercase text-header'>{firstName} {lastName}</h3>
        <div className="dynamic-text text-body">{bio}</div>
      </div>
    </div>
  )
}


interface BranchContentProps {
  branches: DocumentData[] | null;
}

const BranchContent: React.FC<BranchContentProps> = ({ branches }) => {
  const searchParams = useSearchParams();
  const country = searchParams.get('country');
  const city = searchParams.get('city');
  const community = searchParams.get('community');

  const [branchData, setBranchData] = useState<DocumentData | null>(null);

  useEffect(() => {
    if (country && city && branches) {
      const foundBranch = branches.find(
        (branch: DocumentData) => branch.country === country && branch.city === city 
        && branch.community === community
      );
      setBranchData(foundBranch || null);
    }
  }, [country, city, branches]);

  if (!branchData) {
    return <Loader />;
  }

  return (
    <div className='px-4 py-20 mt-20 max-w-max w-full mx-auto 
    flex flex-col gap-y-12
    fade-in-animation'>

      <div className="flex flex-col gap-y-1">
        <h3 className='text-header/80 font-bold uppercase font-title dynamic-subheading'>
          About {branchData?.community}
        </h3>
        <p className='text-body font-bold uppercase font-title dynamic-text'>
          {branchData?.city}, {branchData?.state} {branchData?.country}
        </p>
        <div className="w-full h-[1px] bg-body mt-[20px]" />
      </div>

      <FounderInformation
      photoUrl={branchData?.photoOne}
      firstName={branchData?.firstNameOne}
      lastName={branchData?.lastNameOne}
      bio={branchData?.bioOne} />

      {
        (branchData?.photoTwo && branchData?.firstNameTwo && branchData?.lastNameTwo && branchData?.bioTwo) && (
          <FounderInformation
          photoUrl={branchData?.photoTwo}
          firstName={branchData?.firstNameTwo}
          lastName={branchData?.lastNameTwo}
          bio={branchData?.bioTwo} />
        )
      }

    </div>
  );
};

const Branch = () => {
  const { branches } = useData();

  if (!branches) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <BranchContent branches={branches} />
    </Suspense>
  );
};

export default Branch;
