import NumberSelected from "./NumberSelected"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import RoleDice from "./RoleDice"
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


function GamePlay() {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState("")
  const [showRules,setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
  return Math.floor( Math.random()*(max-min)+min);
}

    const roleDice =() => {
      if (!selectedNumber) {
        setError("You have not selected")
        return
      };
      
      const randomNumber =  generateRandomNumber(1,7);
      setCurrentDice((prev) => randomNumber);

      

        if(selectedNumber === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }
    setSelectedNumber(undefined);

    };

    const resetScore = () => {
      setScore(0)
    }



  return (
    <MainConatainer>
      <div className="top_section">
        <TotalScore score= {score}/>
      <NumberSelected
      error={error}
      setError={setError}
      selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice}
      roleDice={roleDice}
      />
      <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button onClick ={()=> setShowRules((prev) => !prev)}>{showRules ? "Hide" : "show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainConatainer>
  )
}

export default GamePlay

const MainConatainer = styled.main`
padding-top: 70px ;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    align-items: center;
    gap: 10px;
    margin-top:40px ;
  }
 `;