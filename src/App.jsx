import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Container from './styles/Container';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
};

export default App;
