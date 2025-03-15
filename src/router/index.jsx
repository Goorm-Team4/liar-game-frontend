import { createBrowserRouter } from 'react-router-dom';
import { ROUTE } from '@/constants/router';

import Home from '@/pages/home';
import Login from '@/pages/login';
import Auth from '@/pages/auth';
import MyPage from '@/pages/mypage';
import Game from '@/pages/game';
import Rank from '@/pages/rank';
import Shop from '@/pages/shop';
import Test from '@/pages/test';

const router = createBrowserRouter([
  {
    path: `${ROUTE.login}`,
    element: <Login />,
  },
  {
    path: `${ROUTE.auth}`,
    element: <Auth />,
  },
  {
    path: `${ROUTE.mypage}`,
    element: <MyPage />,
  },
  {
    path: `${ROUTE.main}`,
    element: <Home />,
  },
  {
    path: `${ROUTE.game}`,
    element: <Game />,
  },
  {
    path: `${ROUTE.rank}`,
    element: <Rank />,
  },
  {
    path: `${ROUTE.shop}`,
    element: <Shop />,
  },
  {
    path: `${ROUTE.test}`,
    element: <Test />,
  },
]);

export default router;
