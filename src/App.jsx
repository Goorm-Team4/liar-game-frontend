import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Container from './styles/Container';
import { RouterProvider } from 'react-router-dom';
import router from './router/index';
import GlobalModalContainer from './components/shared/modal/GlobalModalContainer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
        <GlobalModalContainer />
      </Container>
    </>
  );
};

export default App;
