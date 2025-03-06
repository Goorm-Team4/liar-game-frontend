import Role from './Role';
import Turn from './Turn';
import Vote from './Vote';
import FinalDebate from './FinalDebate';
import Resist from './Resist';
import Result from './Result';
import TimerBox from '../../../components/game/TimerBox';
import Step from '../../../components/game/Step';
import { useStepStore } from '../../../store/step';

const Ingame = () => {
  const step = useStepStore((state) => state.step);
  return (
    <>
      <TimerBox index={step} />
      <Step index={1}>
        <Role />
      </Step>
      <Step index={2}>
        <Turn />
      </Step>
      <Step index={3}>
        <Vote />
      </Step>
      <Step index={4}>
        <FinalDebate />
      </Step>
      <Step index={5}>
        <Resist />
      </Step>
      <Step index={6}>
        <Result />
      </Step>
    </>
  );
};

export default Ingame;
