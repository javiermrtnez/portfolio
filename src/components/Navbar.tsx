import { useEffect, useState } from 'react';
import { NAVBAR_LINKS } from '../utils/constants/navbarLinks';
import { SECTIONS_IDS } from '../utils/constants/sections';
import logo from '/favicon.svg';
import joinClassNames from '../utils/functions/classNames';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={joinClassNames(
        'sticky top-0 flex w-full z-10 h-[var(--navbar-height)] bg-opacity-50 backdrop-blur transition-shadow duration-200 ease-in-out',
        scrolled ? 'shadow-header-border-bottom' : ''
      )}
    >
      <div className='flex gap-3 items-center justify-between w-[var(--page-width-with-padding)] m-auto px-[var(--page-padding)]'>
        <a className='h-6 w-6' href={`#${SECTIONS_IDS.HOME}`}>
          <img src={logo}></img>
        </a>

        <div className='hidden md:block'>
          <ul className='flex gap-2 justify-center'>
            {NAVBAR_LINKS.map(({ name, id }) => (
              <li key={name} className='flex content-center items-center'>
                <a
                  href={`#${id}`}
                  className='flex gap-2 items-center py-2 px-3 text-neutral-400 text-sm rounded-md leading-none hover:text-white transition-colors'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
