interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <div className='w-full mx-auto max-w-[var(--page-width-with-padding)] px-[var(--page-padding)]'>
      {children}
    </div>
  );
};

export default BaseLayout;
