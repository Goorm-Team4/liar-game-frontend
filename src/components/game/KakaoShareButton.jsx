import { ShareLinkBox } from './styles';
import { KAKAO_SHARE_BUTTON } from '../../constants/game/constants';

const KakaoShareButton = ({ onClick }) => {
  return (
    <ShareLinkBox>
      <pre> {KAKAO_SHARE_BUTTON.text} </pre>
      <button onClick={onClick}> {KAKAO_SHARE_BUTTON.title} </button>
    </ShareLinkBox>
  );
};

export default KakaoShareButton;
