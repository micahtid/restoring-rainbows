"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useData } from '@/providers/useData';

import Loader from '@/components/Loader';

const Branch = () => {
  const searchParams = useSearchParams();
  
  const country = searchParams.get('country');
  const city = searchParams.get('city');

  const { branches } = useData();
  const [branchData, setBranchData] = useState<null | any>(null); 

  useEffect(() => {
    if (country && city && branches) {
      const foundBranch = branches.find(
        (branch: any) => branch.country === country && branch.city === city
      );
      setBranchData(foundBranch || null); 
    }
  }, [country, city, branches]);

  if (!branchData) {
    return (
      <Loader />
    )
  }

  return (
    <div className='px-4 py-20
    max-w-max w-full mx-auto
    flex flex-col gap-y-12'>
        <h3 className='text-header font-bold uppercase font-title dynamic-subheading'>
            About {branchData?.city}, {branchData?.state} {branchData?.country}
        </h3>
        <div className="flex gap-x-32">
            <img src={branchData?.photo} className='w-[500px] h-[500px] object-cover drop-shadow' />
            <div className="flex flex-col gap-y-6">
                <h3 className='text-3xl font-bold font-title uppercase text-header'>{branchData?.firstName} {branchData?.lastName}</h3>
                <div className="text-lg text-body">{branchData?.bio}</div>
            </div>
        </div>
    </div>
  );
}

export default Branch;
