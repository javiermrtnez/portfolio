import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Technologies from './components/Technologies';
import BaseLayout from './layouts/BaseLayout';
import { SECTIONS_IDS, SECTIONS_NAMES } from './utils/constants/sections';

function App() {
  return (
    <>
      <Navbar />

      {/* TO-DO: Refactor  */}
      <BaseLayout>
        <Section id={SECTIONS_IDS.HOME}>
          <Home />
        </Section>

        <Section id={SECTIONS_IDS.ABOUT_ME} title={SECTIONS_NAMES.ABOUT_ME}>
          <AboutMe />
        </Section>

        <Section id={SECTIONS_IDS.TECHNOLOGIES} title={SECTIONS_NAMES.TECHNOLOGIES}>
          <Technologies />
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
