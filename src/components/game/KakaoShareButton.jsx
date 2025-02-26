import { ButtonBox } from './styles';
import { KAKAO_SHARE_BUTTON } from './constants';

const KakaoShareButton = ({ onClick }) => {
  return (
    <ButtonBox>
      <pre> {KAKAO_SHARE_BUTTON.text} </pre>
      <button onClick={onClick}> {KAKAO_SHARE_BUTTON.title} </button>
    </ButtonBox>
  );
};

export default KakaoShareButton;
