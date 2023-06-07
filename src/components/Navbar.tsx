import logo from '/favicon.svg';

const NAVIGATION = [
  {
    name: 'Experiencia',
    href: 'experience',
  },
  {
    name: 'Proyectos',
    href: 'projects',
  },
  {
    name: 'Educación',
    href: 'education',
  },
];

const Navbar = () => {
  return (
    <header className='sticky top-0 flex w-full z-10 h-[var(--navbar-height)] bg-black/50 shadow-sm backdrop-blur'>
      <div className='flex gap-3 items-center justify-between w-[var(--page-width-with-padding)] m-auto px-[var(--page-padding)]'>
        <a className='h-6 w-6' href='#home'>
          <img src={logo}></img>
        </a>

        <ul className='flex gap-2 justify-center'>
          {NAVIGATION.map(({ name, href }) => (
            <li key={name} className='flex content-center items-center'>
              <a
                href={`#${href}`}
                className='flex gap-2 items-center py-2 px-3 text-neutral-400 text-sm rounded-md leading-none hover:text-white transition-colors'
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
