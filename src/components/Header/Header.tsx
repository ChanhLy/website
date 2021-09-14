export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const defaultClassName = 'w-full p-2 bg-blue-400';
  const { className } = props;
  return (
    <header className={className || defaultClassName}>
      {/* <Image src={logo} alt="logo" width="16" height="16"></Image> */}a
    </header>
  );
};
