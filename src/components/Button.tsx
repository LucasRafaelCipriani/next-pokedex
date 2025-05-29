import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      className="bg-blue-400 text-white rounded-2xl border py-2 px-4 cursor-pointer hover:bg-blue-800"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
