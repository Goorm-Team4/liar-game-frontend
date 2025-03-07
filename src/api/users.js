import { apiInstance } from ".";

const api = apiInstance();

async function editUserInfo(user, success, fail) {
  console.log("POST : 회원 정보 수정");
  await api.post(`/members/me`, user).then(success).catch(fail);
}

async function signOut(success, fail) {
  console.log("post : 카카오 로그아웃");
  await api.post(`/auth/logout/kakao`).then(success).catch(fail);
}

export { editUserInfo, signOut };