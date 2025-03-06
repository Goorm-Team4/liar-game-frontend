import { useStepStore } from '../store/step';

const Step = ({ children, index }) => {
  const { step } = useStepStore((state) => ({ step: state.step }));

  if (step !== index) {
    return null;
  }

  return children;
};

export default Step;
