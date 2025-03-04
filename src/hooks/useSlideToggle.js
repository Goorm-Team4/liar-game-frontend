import { useState } from 'react';

const useSlideToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openSlide = () => setIsVisible(true);
  const closeSlide = () => setIsVisible(false);

  return {
    isVisible,
    openSlide,
    closeSlide,
  };
};

export default useSlideToggle;
