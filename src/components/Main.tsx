import React from 'react';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-500">
      <div className="min-h-[calc(100vh-81px)] md:max-w-[80vw] mx-auto bg-white">
        {children}
      </div>
    </main>
  );
};

export default Main;
