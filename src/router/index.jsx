import { createBrowserRouter } from 'react-router-dom';
import { ROUTE } from './constants';

import Home from '@/pages/home';
import Game from '@/pages/game';

const router = createBrowserRouter([
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
