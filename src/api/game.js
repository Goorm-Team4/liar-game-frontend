import { apiInstance } from '.';
import useAuthStore from '@/store/auth';

const api = apiInstance();

async function postCreateRoom() {
  const accessToken = useAuthStore.getState().accessToken;

  try {
    const response = await api.post(
      `api/v1/games/create`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { postCreateRoom };
