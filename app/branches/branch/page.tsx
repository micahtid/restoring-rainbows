"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
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

  // if (!branchData) {
  //   return (
  //     <Loader />
  //   )
  // }

  return (
    <Suspense fallback={<Loader />}>
      <div className='px-4 py-20 mt-20
      max-w-max w-full mx-auto
      flex gap-x-20
      max-lg:flex-col max-lg:items-center'>
        <img src={branchData?.photo} className='w-[500px] h-[500px] object-cover drop-shadow
        max-[500px]:w-full max-[500px]:h-auto' />
        <div className="flex flex-col gap-y-6 
        max-lg:max-w-[500px] max-lg:w-full max-lg:mt-8">
          <div className="">
            <h3 className='text-header/80 font-bold uppercase font-title dynamic-text'>
                About {branchData?.city}, {branchData?.state} {branchData?.country}
            </h3>
            <h3 className='text-3xl font-bold font-title uppercase text-header'>{branchData?.firstName} {branchData?.lastName}</h3>
          </div>
          <div className="dynamic-text text-body">{branchData?.bio}</div>
        </div>
      </div>
    </Suspense>
  );
}

export default Branch;
