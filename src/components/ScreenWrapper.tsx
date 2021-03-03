import React from 'react';

interface ScreenWrapperProps {
  color: string;
  id?: string;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ id, color, children }) => {
  return (
    <div id={id} className={`${color} h-screen`} style={{ scrollSnapAlign: 'center' }}>
      <div className="pt-20 w-1/2 mx-auto">{children}</div>
    </div>
  );
};
