import React from 'react';
import { EXPERIENCE } from '../utils/constants/experience';
import { getFormattedDate, monthDiff } from '../utils/functions/dates';
import joinClassNames from '../utils/functions/classNames';

const Experience = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <span className='h-24 w-px bg-gradient-to-b from-[var(--background-color)] to-neutral-700'></span>
      </div>
      {EXPERIENCE.map(({ company, role, startDate, endDate, description }, index) => (
        <div className='flex'>
          <div className='flex flex-col gap-2 flex-1 pr-8 pb-8'>
            <h1 className='font-extrabold text-lg'>{role}</h1>
            <div className='flex flex-col font-medium text-neutral-500'>
              <h2 className='text-sm'>{company}</h2>
              <small className='italic'>
                {`${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`}{' '}
                {`(${monthDiff(startDate, endDate)} meses)`}
              </small>
            </div>
            <p className='text-neutral-400 text-[14.5px] text-justify'>{description}</p>
          </div>

          <div className='flex flex-col items-center'>
            <span className='w-[11px] h-[11px] my-1 rounded-full shadow-[0_0_0_1.5px_#404040_inset]'></span>
            <span
              className={joinClassNames(
                'h-full',
                index !== EXPERIENCE.length - 1
                  ? 'border-r border-dashed border-neutral-700'
                  : 'w-px bg-gradient-to-b from-neutral-700 to-sky-400'
              )}
            ></span>
          </div>

          <div className='flex-1 pl-8'>
            <div className='w-28 h-28 rounded-2xl bg-neutral-800'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
