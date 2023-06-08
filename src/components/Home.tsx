import { getExperienceYears } from '../utils/functions/experience';
import { DocumentTextIcon } from './Icons';

const INFO = [
  {
    title: 'Años de experiencia',
    value: getExperienceYears(),
  },
  {
    title: 'Lineas de código escritas',
    value: '150k',
  },
  {
    title: 'Tazas de café consumidas',
    value: '2.6k',
  },
];

const Home = () => {
  return (
    <div className='h-[calc(100vh-var(--navbar-height))] flex flex-col justify-center items-center text-center gap-14'>
      <h2 className='text-xl sm:text-2xl text-neutral-400 font-extrabold'>
        ¡Hola! <span className='animate-hi inline-block origin-[70%_70%]'>👋</span> Soy Javier
        Martínez
      </h2>

      <h1 className='text-4xl sm:text-6xl font-black leading-none'>
        Apasionado por el desarrollo de software, creando soluciones{' '}
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500'>
          innovadoras
        </span>
        .
      </h1>

      <ul className='flex items-center justify-center text-neutral-400'>
        {INFO.map(({ title, value }) => (
          <li className='flex after:border-r after:h-8 after:border-dashed after:border-neutral-500 after:mx-2 md:after:mx-9 after:my-auto after:last:content-none'>
            <div className='flex flex-col gap-2 items-center md:flex-row text-neutral-400'>
              <div className='py-1 px-2 font-bold bg-white/10 rounded-md'>{value}</div>
              <p className='text-[13px] leading-none text-center w-24 md:text-left'>{title}</p>
            </div>
          </li>
        ))}
      </ul>

      <a
        className='flex gap-2 px-4 py-2 font-semibold rounded-md bg-transparent border border-neutral-600 text-neutral-400 hover:text-white hover:border-white transition-colors'
        href='/CV_FranciscoJavierMartinezBueno.pdf'
        target='_blank'
      >
        <DocumentTextIcon />
        Currículum
      </a>
    </div>
  );
};

export default Home;
