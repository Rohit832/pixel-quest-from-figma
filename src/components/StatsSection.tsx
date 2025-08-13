import React from 'react';
import { StatCard } from './StatCard';
import { ArrowIcon } from './ArrowIcon';

export const StatsSection: React.FC = () => {
  return (
    <section className="max-w-[894px] flex flex-col items-center gap-8 w-full relative mx-auto my-0 max-md:max-w-full max-md:px-5 max-md:py-0 max-sm:max-w-screen-sm max-sm:gap-6 max-sm:px-4 max-sm:py-0">
      <div className="w-[894px] h-[72px] relative flex items-center justify-between gap-[172px] mt-[37px] max-md:w-full max-md:max-w-full max-md:gap-20 max-md:justify-around max-sm:flex-col max-sm:gap-8 max-sm:h-auto">
        <StatCard 
          label="Clients"
          number="50+"
          unit="Projects"
          numberWidth="w-28"
        />
        
        <StatCard 
          label="UX Strategy"
          number="7+"
          unit="Years"
          numberWidth="w-[70px]"
        />
        
        <StatCard 
          label="Solution in"
          number="60"
          unit="Secs"
          numberWidth="w-[79px]"
        />
        
        <ArrowIcon type="left" />
        <ArrowIcon type="right" />
      </div>
      
      <footer className="self-stretch text-[#847E7C] text-center text-2xl font-normal leading-[19px] max-md:text-xl max-md:leading-4 max-sm:text-lg max-sm:leading-[15px]">
        Trusted by 20+ high-growth startups
      </footer>
    </section>
  );
};
