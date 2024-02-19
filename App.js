// import styled from "styled-components";
import { useState } from "react";
import "./App.css"
import GamePlay from "./components/GamePlay";

import StartGame from "./components/StartGame";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
      <>      
      {
        isGameStarted ? <GamePlay/> : <StartGame
        
        toggle={toggleGamePlay}
        />
      }
      </>
  );
}

export default App;

