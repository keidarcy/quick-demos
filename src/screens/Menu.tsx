import React from 'react';
import { ScreenWrapper } from '../components/ScreenWrapper';

interface MenuProps {
  screens: string[];
  id: string;
}

export const Menu: React.FC<MenuProps> = ({ screens, id }) => {
  const converter = (lineString: string) =>
    lineString
      .split('-')
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(' ');

  return (
    <ScreenWrapper id={id} color="bg-blue-200">
      <ul className="font-semibold text-xl list-disc">
        {screens.map((screen) => (
          <li key={screen}>
            <a href={`/#${screen}`}>{converter(screen)}</a>
          </li>
        ))}
      </ul>
    </ScreenWrapper>
  );
};
