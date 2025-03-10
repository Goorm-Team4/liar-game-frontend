import { apiInstance } from ".";
import useAuthStore from "../store/auth";

const api = apiInstance();

async function editUserInfo(user, success, fail) {
  console.log("POST : 회원 정보 수정");

  const accessToken = useAuthStore.getState().accessToken;

  await api.post(`/members/me`, user, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(success)
    .catch(fail);
}

async function signOut(success, fail) {
  console.log("post : 카카오 로그아웃");

  const accessToken = useAuthStore.getState().accessToken;

  await api.post(`/auth/logout/kakao`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(success)
    .catch(fail);
}

async function getMyinfo(success, fail) {
  console.log("get : 내 정보 가져오기");

  const accessToken = useAuthStore.getState().accessToken;
  console.log(accessToken);

  await api.get(`/members/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(success)
    .catch(fail);
}

export { editUserInfo, signOut, getMyinfo };