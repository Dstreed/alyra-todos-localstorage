import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import ModeSwitch from "./components/ModeSwitch";
import AppContainer from "./components/AppContainer";
import ModeContextProvider from "./context/ModeContext";

function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ModeContextProvider>
      <AppContainer mode={mode}>
        <div className="container my-4">
          <h1 className="text-center">ToDos App</h1>
          <ModeSwitch setMode={setMode} />
          <Todos />
        </div>
      </AppContainer>
    </ModeContextProvider>
  );
}

export default App;
