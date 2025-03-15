import { createBrowserRouter } from 'react-router-dom';
import { ROUTE } from '@/constants/router';

import Home from '@/pages/home';
import Login from '@/pages/login';
import Auth from '@/pages/auth';
import MyPage from '@/pages/mypage';
import Game from '@/pages/game';
import Rank from '@/pages/rank';
import Shop from '@/pages/shop';
import ComingSoon from '@/pages/comingsoon';

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
    path: `${ROUTE.main}`,
    element: <Home />,
  },
  {
    path: `${ROUTE.mypage}`,
    element: <MyPage />,
  },
  {
    path: `${ROUTE.game}`,
    element: <Game />,
  },
  {
    path: `${ROUTE.rank}`,
    element: <ComingSoon />,
  },
  {
    path: `${ROUTE.shop}`,
    element: <ComingSoon />,
  },
]);

export default router;
