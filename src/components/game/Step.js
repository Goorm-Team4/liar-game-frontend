import React from 'react';
import { useStepStore } from '../../store/step';

const Step = React.memo(({ children, index }) => {
  const { step } = useStepStore((state) => state.step);

  if (step !== index) {
    return null;
  }

  return children;
});

export default Step;
