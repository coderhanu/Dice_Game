import styled from "styled-components"
// import {useState} from "react"

function RoleDice({roleDice,currentDice}
) {

    


  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="Dices" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    align-items: center;

        .dice{
            cursor: pointer;
        }

    p{
        font-size: 24px;
    }
`;