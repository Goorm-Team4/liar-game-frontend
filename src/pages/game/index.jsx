import { useStepStore } from '../../store/step';
import Lobby from './Lobby';
import Role from './Role';
import Turn from './Turn';
import Vote from './Vote';
import FinalDebate from './FinalDebate';
import Resist from './Resist';
import Result from './Result';

const Game = () => {
  const { index } = useStepStore((state) => ({ index: state.step }));

  return (
    <>
      <Step index={0}>
        <Lobby />
      </Step>
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

export default Game;
