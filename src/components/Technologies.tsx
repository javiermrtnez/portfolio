import { TECHNOLOGIES } from '../utils/constants/technologies';
import Technology from './Technology';

const Technologies = () => {
  return (
    <div className='flex gap-2 justify-between flex-wrap'>
      {TECHNOLOGIES.map(({ name, icon }) => (
        <Technology key={name} name={name} icon={icon} />
      ))}
    </div>
  );
};

export default Technologies;
