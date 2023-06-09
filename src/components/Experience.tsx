import { EXPERIENCE } from '../utils/constants/experience';
import { getFormattedDate, getMonthDiff } from '../utils/functions/dates';
import joinClassNames from '../utils/functions/classNames';
import { isOdd } from '../utils/functions/numbers';

const Experience = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <span className='h-24 w-px bg-gradient-to-b from-[var(--background-color)] to-neutral-700'></span>
      </div>

      {EXPERIENCE.map(({ company, role, startDate, endDate, description, icon }, index) => (
        <div className={joinClassNames('flex gap-8', isOdd(index) ? 'flex-row-reverse' : '')}>
          <div className='flex flex-col gap-2 flex-1 pb-10'>
            <h1 className='font-extrabold text-lg'>{role}</h1>
            <div className='flex flex-col font-medium text-neutral-500'>
              <h2 className='text-sm'>{company}</h2>
              <small className='italic'>
                {`${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`}{' '}
                {`(${getMonthDiff(startDate, endDate)})`}
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

          <div className={joinClassNames('flex flex-1', isOdd(index) ? 'justify-end' : '')}>
            <div className='flex justify-center items-center w-20 h-20 rounded-2xl border border-neutral-800'>
              <div className='w-12 h-12 flex justify-center items-center'>
                {typeof icon === 'string' ? <img src={icon} alt={`${company} logo`} /> : icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
