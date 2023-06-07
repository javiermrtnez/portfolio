import { DocumentTextIcon } from './components/Icons';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Technology from './components/Technology';
import BaseLayout from './layouts/BaseLayout';
import { SECTIONS_IDS, SECTIONS_NAMES } from './utils/constants/Sections';
import { TECHNOLOGIES } from './utils/constants/technologies';

function getExperienceYears() {
  // 1 de Octubre de 2021
  const initialDate = '2021-09-01';

  const givenDate = new Date(initialDate);
  const today = new Date();

  const diff = today.getTime() - givenDate.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

  const years = diff / millisecondsInYear;
  const formattedYears = years.toFixed(1);

  return formattedYears;
}

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

function App() {
  return (
    <>
      <Navbar />

      <BaseLayout>
        <section
          id={SECTIONS_IDS.HOME}
          className='h-[calc(100vh-var(--navbar-height))] py-10 flex flex-col justify-center items-center text-center gap-14'
        >
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
              <li className='flex after:border-r after:h-8 after:border-dashed after:border-neutral-500 after:mx-2 sm:after:mx-9 after:my-auto after:last:content-none'>
                <div className='flex flex-col gap-2 items-center sm:flex-row text-neutral-400'>
                  <div className='py-1 px-2 font-bold bg-white/10 rounded-md'>{value}</div>
                  <p className='text-sm leading-none text-center w-[105px] sm:text-left'>{title}</p>
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
        </section>

        <Section id={SECTIONS_IDS.ABOUT_ME} title={SECTIONS_NAMES.ABOUT_ME}>
          <div className='flex flex-col gap-4 text-[14.5px] text-neutral-400'>
            <p>
              Soy un Ingeniero Informático especializado en Ingeniería del Software y con una
              mención en Informática Empresarial. Me apasiona el desarrollo de software y las
              últimas tecnologías. Durante mi carrera profesional, he tenido la oportunidad de
              colaborar en proyectos destacados para reconocidas empresas como Telefónica y Banco
              Santander, donde he contribuido a mejorar sus servicios y aumentar su productividad
              mediante la implementación de software desarrollado con tecnologías web.
            </p>

            <p>
              Me distingo por mi capacidad para aprender rápidamente nuevas habilidades y lenguajes
              de programación, así como por mi destreza en la resolución de problemas. Mi enfoque
              proactivo y mi habilidad para adaptarme a nuevas situaciones también son atributos
              destacados en mi perfil profesional.
            </p>
          </div>
        </Section>

        <Section id={SECTIONS_IDS.TECHNOLOGIES} title={SECTIONS_NAMES.TECHNOLOGIES}>
          <div className='flex gap-2 flex-wrap'>
            {TECHNOLOGIES.map(({ name, icon, href }) => (
              <Technology name={name} icon={icon} href={href} />
            ))}
          </div>
        </Section>

        <Section id={SECTIONS_IDS.EXPERIENCE} title={SECTIONS_NAMES.EXPERIENCE}>
          <div className='flex flex-col gap-4 text-[14.5px] text-neutral-400'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis orci, congue
              sed turpis ut, laoreet aliquam mi. Cras vitae congue nunc, sit amet tempus dolor.
              Donec fermentum turpis ut mauris iaculis, vitae malesuada dui commodo. Nullam id massa
              sed nunc malesuada congue vel vitae nisl. Curabitur iaculis, leo fringilla dignissim
              aliquet, dui quam eleifend eros, eget tincidunt lorem lacus at nulla. Mauris non
              elementum erat. Aenean leo enim, pharetra vitae ipsum vitae, tristique pellentesque
              leo. Vivamus ut pharetra purus.
            </p>
          </div>
        </Section>

        <Section id={SECTIONS_IDS.PROJECTS} title={SECTIONS_NAMES.PROJECTS}>
          <div className='flex flex-col gap-4 text-[14.5px] text-neutral-400'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis orci, congue
              sed turpis ut, laoreet aliquam mi. Cras vitae congue nunc, sit amet tempus dolor.
              Donec fermentum turpis ut mauris iaculis, vitae malesuada dui commodo. Nullam id massa
              sed nunc malesuada congue vel vitae nisl. Curabitur iaculis, leo fringilla dignissim
              aliquet, dui quam eleifend eros, eget tincidunt lorem lacus at nulla. Mauris non
              elementum erat. Aenean leo enim, pharetra vitae ipsum vitae, tristique pellentesque
              leo. Vivamus ut pharetra purus.
            </p>
          </div>
        </Section>

        <Section id={SECTIONS_IDS.EDUCATION} title={SECTIONS_NAMES.EDUCATION}>
          <div className='flex flex-col gap-4 text-[14.5px] text-neutral-400'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis orci, congue
              sed turpis ut, laoreet aliquam mi. Cras vitae congue nunc, sit amet tempus dolor.
              Donec fermentum turpis ut mauris iaculis, vitae malesuada dui commodo. Nullam id massa
              sed nunc malesuada congue vel vitae nisl. Curabitur iaculis, leo fringilla dignissim
              aliquet, dui quam eleifend eros, eget tincidunt lorem lacus at nulla. Mauris non
              elementum erat. Aenean leo enim, pharetra vitae ipsum vitae, tristique pellentesque
              leo. Vivamus ut pharetra purus.
            </p>
          </div>
        </Section>
      </BaseLayout>
    </>
  );
}

export default App;
