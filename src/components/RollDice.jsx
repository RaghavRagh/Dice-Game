import styled from "styled-components";

export default function RollDice({ currentDice, rollDice }) {
  

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
