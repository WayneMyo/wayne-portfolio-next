import { FC, useEffect } from 'react';
import Typed from 'typed.js';

interface TypingAnimationProps {
  animationStrings: string[];
}

const TypingAnimation: FC<TypingAnimationProps> = ({ animationStrings }) => {
  useEffect(() => {
    const options = {
      strings: animationStrings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed('.type-it', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="type-it"></span>;
};

export default TypingAnimation;
