import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { ScreenWrapper } from '../components/ScreenWrapper';

interface SpringAnimationProps {
  id: string;
}

export const SpringAnimation: React.FC<SpringAnimationProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, 'isVisible', {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <ScreenWrapper id={id} color="bg-red-400">
      <button
        onClick={() => {
          setIsVisible((v) => !v);
        }}
        className="bg-white w-20 h-10 mx-auto rounded shadow-2xl"
      >
        {isVisible ? 'unmount' : 'mount'}
      </button>
      <section className="mt-64">
        {transition.map(({ item, key, props }) =>
          item ? (
            <animated.div
              className="bg-white w-20 h-20 mx-auto rounded shadow-2xl"
              style={props}
            />
          ) : (
            ''
          )
        )}
      </section>
    </ScreenWrapper>
  );
};
