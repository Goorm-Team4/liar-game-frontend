import { createBrowserRouter } from 'react-router-dom';
import { ROUTE } from './constants';

import Home from '@/pages/home';
import Login from '@/pages/login';
import Auth from '@/pages/auth';
import Game from '@/pages/game';

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
    path: `${ROUTE.game}`,
    element: <Game />,
  },
]);

export default router;
