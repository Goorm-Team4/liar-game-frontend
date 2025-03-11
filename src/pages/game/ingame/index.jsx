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

import { useTurnStore } from '@/store/turn';
import { useEffect } from 'react';

import { useWebSocketStore } from '@/store/socket';
import { useModalStore } from '@/store/modal';
import { useNavigate } from 'react-router-dom';

import char1 from '@/assets/images/char1.png';
import char2 from '@/assets/images/char2.png';
import char3 from '@/assets/images/char3.png';
import char4 from '@/assets/images/char4.png';

const dummyPlayers = [
  { id: 1, name: '산책하는 노루', avatar: char1, message: '' },
  { id: 2, name: '흥청망청 코끼리', avatar: char2, message: '' },
  { id: 3, name: '물먹는 버섯', avatar: char3, message: '' },
  { id: 4, name: '노래하는 달팽이', avatar: char4, message: '' },
];

const Ingame = () => {
  const { step } = useStepStore();
  const { setPlayers, setPlayerCount } = useTurnStore();

  const isConnected = useWebSocketStore((state) => state.isConnected);
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      openModal("gameInterrupt", {
        onRetry: () => navigate("/game"),
        onHome: () => navigate("/"),
      });
    }
  }, [isConnected, openModal, navigate]);

  useEffect(() => {
    setPlayers(dummyPlayers);
    setPlayerCount(dummyPlayers.length);
  }, []);

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
