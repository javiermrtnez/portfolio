import { PROJECTS } from '../utils/constants/projects';
// import { ArrowTopRightOnSquare } from './Icons';
import TechnologiesList from './TechnologiesList';

const Projects = () => {
  return (
    <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
      {PROJECTS.map(({ name, description, img, website, technologies }) => (
        <a
          className='rounded-md w-full h-fit bg-black border transition-colors duration-200 border-neutral-800 hover:border-white'
          href={website}
          target='_blank'
        >
          <img className='h-full rounded-t-md' src={img} />

          <div className='flex flex-col gap-3 p-4'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col overflow-hidden'>
                <h2 className='text-sm font-semibold'>{name}</h2>
                <small
                  title={description}
                  className='text-neutral-500 font-medium text-ellipsis overflow-hidden whitespace-nowrap w-full'
                >
                  {description}
                </small>
              </div>

              {/* <div className='p-2 rounded opacity-40 transition-opacity duration-200 hover:opacity-100'>
                <ArrowTopRightOnSquare />
              </div> */}
            </div>

            {technologies?.length > 0 && <TechnologiesList technologies={technologies} />}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
