import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Route, Routes } from "react-router-dom";

import TurnPage from "./pages/TurnPage";
import ResistPage from "./pages/ResistPage";
import FinalDebatePage from "./pages/FinalDebatePage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px; /* 웹에서 넓이 고정 */
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%; /* 모바일에서는 가로 길이 전체 */
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/turn" element={<TurnPage />} />
          <Route path="/resist" element={<ResistPage />} />
          <Route path="/debate" element={<FinalDebatePage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;