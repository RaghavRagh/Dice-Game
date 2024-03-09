import styled from "styled-components";

function NumberSelector({ error, setError, selectedNum, setSelectedNum }) {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberSelectorhandler = (value) => {
    setSelectedNum(value)
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            key={i}
            onClick={() => numberSelectorhandler(value)}
            isSelected={value === selectedNum}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
