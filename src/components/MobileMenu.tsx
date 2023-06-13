import { NAVBAR_LINKS } from '../utils/constants/navbarLinks';
import { CrossIcon } from './Icons';

interface Props {
  handleMobileMenuOnClick: () => void;
}

const MobileMenu = ({ handleMobileMenuOnClick }: Props) => {
  return (
    <div
      onClick={handleMobileMenuOnClick}
      className='w-full h-full fixed z-50 p-4 inset-0 backdrop-blur bg-black/80 md:hidden'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative max-w-xs w-full ml-auto rounded-lg shadow-lg p-6 bg-neutral-800 text-neutral-400'
      >
        <button
          className='absolute top-4 right-4 p-2 transition-colors text-neutral-400 hover:text-white'
          onClick={handleMobileMenuOnClick}
        >
          <CrossIcon className='w-3 h-3' />
        </button>
        <ul className='flex flex-col gap-4 justify-center'>
          {NAVBAR_LINKS.map(({ name, id }) => (
            <li key={name} className='flex content-center items-center'>
              <a
                href={`#${id}`}
                className='flex p-2 text-neutral-400 font-medium rounded-md leading-none hover:text-white transition-colors'
                onClick={handleMobileMenuOnClick}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
