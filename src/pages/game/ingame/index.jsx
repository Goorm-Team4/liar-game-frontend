import Role from './Role';
import Turn from './Turn';
import Argument from './Argument';
import GuessAnswer from './GuessAnswer';
import GuessLiar from './GuessLiar';
import Vote from './Vote';
import Result from './Result';

import TimerBox from '@/components/game/TimerBox';
import Step from '@/components/game/Step';
import { useStepStore } from '@/store/step';

const Ingame = () => {
  const { step, nextStep } = useStepStore();

  console.log(step);

  return (
    <>
      <TimerBox index={step} onNextStep={nextStep} />
      <Step index={1}>
        <Role />
      </Step>
      <Step index={2}>
        <Turn />
      </Step>
      <Step index={3}>
        <GuessLiar />
      </Step>
      <Step index={4}>
        <Argument />
      </Step>
      <Step index={5}>
        <Vote />
      </Step>
      <Step index={6}>
        <GuessAnswer />
      </Step>
      <Step index={7}>
        <Result />
      </Step>
    </>
  );
};

export default Ingame;
