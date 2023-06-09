import joinClassNames from '../utils/functions/classNames';
import { isOdd } from '../utils/functions/numbers';
import { getFormattedDate, getMonthDiff } from '../utils/functions/dates';
import { useState } from 'react';
import { ChevronUp } from './Icons';
import { EXPERIENCES } from '../utils/constants/experiences';
import { Experience } from '../types/experience';

interface Props {
  experience: Experience;
  index: number;
}

const SingleExperience = ({ experience, index }: Props) => {
  const { company, role, startDate, endDate, description, icon, technologies } = experience;

  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const handleMoreInfoButton = () => {
    setIsMoreInfoOpen(!isMoreInfoOpen);
  };

  return (
    <div className={joinClassNames('flex gap-8', isOdd(index) ? 'flex-row-reverse' : '')}>
      <div className='flex flex-col w-full pb-10'>
        <div className={joinClassNames('flex flex-col gap-2', !isOdd(index) ? 'items-end' : '')}>
          <h1 className='font-extrabold text-lg'>{role}</h1>
          <div
            className={joinClassNames(
              'flex flex-col font-medium text-neutral-500',
              !isOdd(index) ? 'items-end' : ''
            )}
          >
            <h2 className='text-sm'>{company}</h2>
            <small className='italic'>
              {`${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`}{' '}
              {`(${getMonthDiff(startDate, endDate)})`}
            </small>
          </div>
          <p className='text-neutral-400 text-[14.5px] text-justify'>{description}</p>
        </div>

        {technologies && technologies?.length > 0 && (
          <div
            className={joinClassNames(
              'transition-all duration-300 max-h-0 overflow-hidden',
              isMoreInfoOpen ? 'max-h-[500px]' : ''
            )}
          >
            <div className='flex flex-col gap-2 mt-4'>
              <h2 className='text-sm font-bold'>Tecnologías</h2>
              <ul className='flex gap-2 flex-wrap'>
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className='rounded-md px-2 py-1 border border-neutral-800 bg-neutral-900 text-xs'
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {technologies && technologies?.length > 0 && (
          <button
            className='flex mt-4 gap-1 items-center border rounded-full border-neutral-500 py-1 px-3 text-sm text-neutral-400 transition-colors hover:border-neutral-400 hover:text-neutral-200 w-fit'
            onClick={handleMoreInfoButton}
          >
            <div className='w-5 h-5'>
              <ChevronUp
                className={joinClassNames(
                  'transition-transform',
                  isMoreInfoOpen ? 'rotate-180' : ''
                )}
              />
            </div>
            {`Ver ${isMoreInfoOpen ? 'menos' : 'más'}`}
          </button>
        )}
      </div>

      <div className='flex flex-col items-center'>
        <span className='w-[11px] h-[11px] my-1 rounded-full shadow-[0_0_0_1.5px_#404040_inset]'></span>
        <span
          className={joinClassNames(
            'h-full',
            index !== EXPERIENCES.length - 1
              ? 'border-r border-dashed border-neutral-700'
              : 'w-px bg-gradient-to-b from-neutral-700 to-[var(--background-color)]'
          )}
        ></span>
      </div>

      <div className={joinClassNames('flex w-full', isOdd(index) ? 'justify-end' : '')}>
        <div className='flex justify-center items-center w-20 h-20 rounded-2xl border border-neutral-800'>
          <div className='w-12 h-12 flex justify-center items-center'>
            {typeof icon === 'string' ? <img src={icon} alt={`${company} logo`} /> : icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExperience;
