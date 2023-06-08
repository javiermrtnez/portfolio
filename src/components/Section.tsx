interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: Props) => {
  return (
    <section id={id} className='flex flex-col gap-10 scroll-mt-[calc(var(--navbar-height)*1.25)]'>
      <h1 className='font-extrabold text-3xl sm:text-4xl'>
        {title}
        <span className='text-sky-400'>.</span>
      </h1>

      {children}
    </section>
  );
};

export default Section;
