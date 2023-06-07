interface Props {
  name: string;
  icon: JSX.Element;
  href: string;
}

const Technology = ({ name, icon, href }: Props) => {
  return (
    <a
      href={href}
      className='w-32 h-32 flex flex-col gap-3 items-center justify-center border border-neutral-700 rounded-lg saturate-0 opacity-40 hover:saturate-100 hover:scale-[1.01] hover:opacity-100 transition-all duration-300'
    >
      <div className='w-12 h-12'>{icon}</div>
      <h2 className='font-semibold text-sm'>{name}</h2>
    </a>
  );
};

export default Technology;