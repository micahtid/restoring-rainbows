"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { useData } from '@/providers/useData';
import { DocumentData } from 'firebase/firestore';
import Loader from '@/components/Loader';

interface BranchContentProps {
  branches: DocumentData[] | null;
}

const BranchContent: React.FC<BranchContentProps> = ({ branches }) => {
  const searchParams = useSearchParams();
  const country = searchParams.get('country');
  const city = searchParams.get('city');

  const [branchData, setBranchData] = useState<DocumentData | null>(null);

  useEffect(() => {
    if (country && city && branches) {
      const foundBranch = branches.find(
        (branch: DocumentData) => branch.country === country && branch.city === city
      );
      setBranchData(foundBranch || null);
    }
  }, [country, city, branches]);

  if (!branchData) {
    return <Loader />;
  }

  return (
    <div className='px-4 py-20 mt-20 max-w-max w-full mx-auto flex gap-x-20 max-lg:flex-col max-lg:items-center
    fade-in-animation'>
      <img src={branchData?.photo} className='w-[500px] h-[500px] object-cover drop-shadow max-[500px]:w-full max-[500px]:h-auto' />
      <div className="flex flex-col gap-y-6 max-lg:max-w-[500px] max-lg:w-full max-lg:mt-8">
        <h3 className='text-header/80 font-bold uppercase font-title dynamic-text'>
          About {branchData?.city}, {branchData?.state} {branchData?.country}
        </h3>
        <h3 className='text-3xl font-bold font-title uppercase text-header'>{branchData?.firstName} {branchData?.lastName}</h3>
        <div className="dynamic-text text-body">{branchData?.bio}</div>
      </div>
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
