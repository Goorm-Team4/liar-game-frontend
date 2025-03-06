// import { useStepStore } from '../../store/step';
import { GameLayout } from './styles';
// import TimerBox from '../../components/game/TimerBox';
import Step from '../../components/game/Step';
import Lobby from './Lobby';
import Role from './Role';
import Turn from './Turn';
import Vote from './Vote';
import FinalDebate from './FinalDebate';
import Resist from './Resist';
import Result from './Result';

const Game = () => {
  // const { index } = useStepStore((state) => state.step);

  return (
    <GameLayout>
      {/* <TimerBox index={index} /> */}
      {/* <Step index={0}> */}
      <Lobby />
      {/* </Step> */}
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
    </GameLayout>
  );
};

export default Game;
