import React from 'react';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const defaultClassName = 'w-full p-2 bg-blue-400';
  const { className } = props;
  return (
    <header
      style={{
        backgroundColor: '#EFF6FF',
      }}
      className={className || defaultClassName}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex">
          <h4 className="p-2 font-bold">Docs</h4>
          <h4 className="p-2  font-bold">Blog</h4>
          <h4 className="p-2 font-bold">Sign in</h4>
          <div className="">
            <button className="bg-blue-400 rounded-md p-2 text-white font-bold rounded-t-md">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* <Image src={logo} alt="logo" width="16" height="16"></Image> */}
    </header>
  );
};
