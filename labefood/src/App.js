import React from "react";
import GlobalStyles from './globalStyles'
import Rotas from './route/Rotas'
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Rotas />
      <GlobalStyles />
    </GlobalState>
  );
}

export default App;
