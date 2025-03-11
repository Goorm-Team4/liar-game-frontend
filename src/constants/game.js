export const KAKAO_SHARE_BUTTON = {
  text: '링크 공유하여 친구초대하기',
  title: 'kakao',
};

export const GAME_PROFILE_SIZE = {
  extraLarge: '140px;',
  large: '96px;',
  small: '32px;',
  extraSmall: '16px;',
  default: '68px;',
};

export const PROFILE_BOX_SIZE = {
  large: '156px',
  small: '92px;',
  extraSmall: '76px;',
  default: '128px;',
};

export const VOTE_OPTION = [
  { label: '찬성', targetId: 'agreePlayer' },
  { label: '반대', targetId: 'disagreePlayer' },
];

export const TIMER_OPTION = {
  1: { description: '', time: 10 },
  2: { description: '단어에 대해서 설명해주세요', time: 30 },
  3: { description: '라이어를 투표해주세요', time: 10 },
  4: { description: '최후의 변론', time: 30 },
  5: { description: '찬반 투표', time: 10 },
  6: { description: '최후의 저항', time: 10 },
};

export const RESULT_DESCRIPTION = {
  시민: '시민 승리!',
  라이어: '라이어 승리!',
};

export const RESULT_KEYWORD = '제시어는 ';

export const GAME_INTERRUPTED_BUTTONS = [
  { label: '다시하기', color: 'blue', size: 'medium', action: 'retry' },
  { label: '홈으로', color: 'gray', size: 'medium', action: 'home' },
];

export const LOGOUT_BUTTONS = [
  { label: '확인', color: 'blue', size: 'medium', action: 'logout' },
  { label: '취소', color: 'gray', size: 'medium', action: 'cancel' },
];
