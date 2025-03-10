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
import { useWebSocketStore } from '@/store/socket';
import { useModalStore } from '@/store/modal';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Ingame = () => {
  const { step, nextStep } = useStepStore();
  const isConnected = useWebSocketStore((state) => state.isConnected);
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();

  // 연결 끊김 감지 -> 모달 호출
  useEffect(() => {
    if (!isConnected) {
      openModal("gameInterrupt", {
        onRetry: () => navigate("/game"),
        onHome: () => navigate("/"),
      });
    }
  }, [isConnected, openModal, navigate]);

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
