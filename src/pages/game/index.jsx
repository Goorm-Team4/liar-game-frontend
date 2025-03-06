import { GameLayout } from './styles';
import Step from '../../components/game/Step';
import Lobby from './Lobby';
import Ingame from './ingame/index';

const Game = () => {
  return (
    <GameLayout>
      <Step index={0}>
        <Lobby />
      </Step>
      <Ingame />
    </GameLayout>
  );
};

export default Game;
