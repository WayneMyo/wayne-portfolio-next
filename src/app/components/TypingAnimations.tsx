import { FC, useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation: FC = () => {
  useEffect(() => {
    const options = {
      strings: ['Developer', 'Consultant', 'Cloud Enthusiast'],
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
