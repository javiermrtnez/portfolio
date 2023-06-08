interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col gap-20 w-full mx-auto max-w-[var(--page-width-with-padding)] px-[var(--page-padding)]'>
      {children}
    </div>
  );
};

export default BaseLayout;
