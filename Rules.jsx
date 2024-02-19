import React from 'react'
import styled from "styled-components"

function Rules() {
  return (
    <RulesContainer>
      <h2>Hoe to PLaay a Dice Game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on Dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice{" "}</p>
        <p>if you get wrong guess then 2 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
 max-width: 800px;
 margin: 0 auto;
 margin-top: 4px;
 border-radius: 10px;
 background-color: #fbf1f1;
  padding: 20px;
  h2{
    font-size: 24px;

  }
  .text{
    margin-top: 24px;
  }
  `;