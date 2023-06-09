import { EXPERIENCES } from '../utils/constants/experiences';
import SingleExperience from './SingleExperience';

const Experience = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <span className='h-24 w-px bg-gradient-to-b from-[var(--background-color)] to-neutral-700'></span>
      </div>

      {EXPERIENCES.map((experience, index) => (
        <SingleExperience experience={experience} index={index} />
      ))}
    </div>
  );
};

export default Experience;
