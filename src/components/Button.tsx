import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="bg-blue-400 text-white rounded-2xl border py-2 px-4 cursor-pointer hover:bg-blue-800 disabled:bg-gray-400 disabled:pointer-events-none"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
