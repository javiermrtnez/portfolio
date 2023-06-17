import { PROJECTS } from '../utils/constants/projects';
import { ArrowTopRightOnSquare, GitHubIcon2 } from './Icons';

const Projects = () => {
  return (
    <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
      {PROJECTS.map(({ name, description, img, github, website }) => (
        <div className='rounded-md w-full h-fit bg-black border border-neutral-800'>
          <img className='h-full rounded-t-md' src={img} />

          <div className='flex justify-between items-center p-2 pl-4'>
            <div className='flex flex-col overflow-hidden'>
              <h2 className='text-sm font-semibold'>{name}</h2>
              <small
                title={description}
                className='text-neutral-500 font-medium text-ellipsis overflow-hidden whitespace-nowrap w-full'
              >
                {description}
              </small>
            </div>
            <div className='flex gap-1'>
              <a
                className='p-2 rounded opacity-70 transition-colors hover:bg-neutral-700/50 hover:opacity-100'
                href={github}
                target='_blank'
              >
                <GitHubIcon2 />
              </a>

              <a
                className='p-2 rounded opacity-70 transition-colors hover:bg-neutral-700/50 hover:opacity-100'
                href={website}
                target='_blank'
              >
                <ArrowTopRightOnSquare />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
