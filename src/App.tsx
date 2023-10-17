import { SECTIONS_IDS, SECTIONS_NAMES } from './utils/constants/sections';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Technologies from './components/Technologies';
import BaseLayout from './layouts/BaseLayout';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu';

const SECTIONS = [
  {
    id: SECTIONS_IDS.HOME,
    component: <Home />,
  },
  {
    id: SECTIONS_IDS.ABOUT_ME,
    title: SECTIONS_NAMES.ABOUT_ME,
    component: <AboutMe />,
  },
  {
    id: SECTIONS_IDS.TECHNOLOGIES,
    title: SECTIONS_NAMES.TECHNOLOGIES,
    component: <Technologies />,
  },
  {
    id: SECTIONS_IDS.EXPERIENCE,
    title: SECTIONS_NAMES.EXPERIENCE,
    component: <Experience />,
  },
  {
    id: SECTIONS_IDS.PROJECTS,
    title: SECTIONS_NAMES.PROJECTS,
    component: <Projects />,
  },
  // {
  //   id: SECTIONS_IDS.EDUCATION,
  //   title: SECTIONS_NAMES.EDUCATION,
  //   component: (
  //     <div className='flex flex-col gap-4 text-[14.5px] text-neutral-400'>
  //       <p>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis orci, congue sed
  //         turpis ut, laoreet aliquam mi. Cras vitae congue nunc, sit amet tempus dolor. Donec
  //         fermentum turpis ut mauris iaculis, vitae malesuada dui commodo. Nullam id massa sed nunc
  //         malesuada congue vel vitae nisl. Curabitur iaculis, leo fringilla dignissim aliquet, dui
  //         quam eleifend eros, eget tincidunt lorem lacus at nulla. Mauris non elementum erat. Aenean
  //         leo enim, pharetra vitae ipsum vitae, tristique pellentesque leo. Vivamus ut pharetra
  //         purus.
  //       </p>
  //     </div>
  //   ),
  // },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <Navbar handleMobileMenuOnClick={handleMobileMenuOnClick} />
      {isMobileMenuOpen && <MobileMenu handleMobileMenuOnClick={handleMobileMenuOnClick} />}

      <BaseLayout>
        {SECTIONS.map(({ id, title, component }) => (
          <Section key={id} id={id} title={title}>
            {component}
          </Section>
        ))}
      </BaseLayout>
    </>
  );
}

export default App;
