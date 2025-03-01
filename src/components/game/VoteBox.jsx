import VotedPlayer from './VotedPlayer';
import { VoteContainer, VoteOption } from './styles';
import { VOTE_OPTION } from './constants';

const VoteBox = () => {
  //option.label assets 추가 후 수정 필요

  return (
    <VoteContainer>
      {VOTE_OPTION.map((option, index) => (
        <VoteOption key={index}>
          {option.label}
          <VotedPlayer size="small" targetId={option.targetId} />
        </VoteOption>
      ))}
    </VoteContainer>
  );
};

export default VoteBox;
