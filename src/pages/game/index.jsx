import { GameLayout } from './styles';
import Lobby from './Lobby';
import Ingame from './ingame/index';
import useGameStore from '@/store/game';

const Game = () => {
  const isIngame = useGameStore((state) => state.isIngame);

  return <GameLayout>{!isIngame ? <Lobby /> : <Ingame />}</GameLayout>;
};

export default Game;
