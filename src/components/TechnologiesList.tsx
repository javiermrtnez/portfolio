interface Props {
  technologies: string[];
}

const TechnologiesList = ({ technologies }: Props) => {
  return (
    <ul className='flex gap-2 flex-wrap'>
      {technologies.map((technology) => (
        <li
          key={technology}
          className='rounded-md px-2 py-1 border border-neutral-800 bg-neutral-950 text-xs'
        >
          {technology}
        </li>
      ))}
    </ul>
  );
};

export default TechnologiesList;
