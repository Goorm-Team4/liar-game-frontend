import { ShareLinkBox } from './styles';
import { KAKAO_SHARE_BUTTON } from '../../constants/game';
import { useEffect } from 'react';

const KakaoShareButton = ({ gameId }) => {
  // SDK 초기화
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  const handleShare = () => {
    if (!window.Kakao) return;

    const shareUrl = `${window.location.origin}/game?gameId=${gameId}`;

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "👺 라이어 게임 초대장",
        description: "게임에 초대합니다",
        imageUrl: `${window.location.origin}/images/kakao-share-thumbnail.png`,
        link: {
          webUrl: shareUrl,
          mobileWebUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "게임 참여하기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  return (
    <ShareLinkBox>
      <pre> {KAKAO_SHARE_BUTTON.text} </pre>
      <button onClick={handleShare}> {KAKAO_SHARE_BUTTON.title} </button>
    </ShareLinkBox>
  );
};

export default KakaoShareButton;
