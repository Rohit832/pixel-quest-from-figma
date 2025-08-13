import React from 'react';

interface StatCardProps {
  label: string;
  number: string;
  unit: string;
  numberWidth?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  number, 
  unit, 
  numberWidth = "w-28" 
}) => {
  return (
    <article className="flex flex-col items-start relative max-md:items-center max-md:text-center max-sm:items-center max-sm:text-center max-sm:w-full">
      <header className="self-stretch text-[#847E7C] text-[11px] font-extrabold tracking-[0.798px] relative max-md:text-[10px] max-sm:text-[9px] max-sm:text-center">
        {label}
      </header>
      <div className="flex items-center self-stretch relative" role="group" aria-label={`${number} ${unit}`}>
        <div className={`text-black text-[62px] font-normal leading-[56px] relative ${numberWidth} max-md:text-5xl max-md:leading-[42px] max-sm:text-[40px] max-sm:leading-9`}>
          {number}
        </div>
        <div className="text-black text-4xl font-normal tracking-[2.522px] relative max-md:text-[28px] max-sm:text-2xl">
          {unit}
        </div>
      </div>
    </article>
  );
};
