import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  height: 44px;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 16px;
  transition: 400ms;

  &:hover {
    box-shadow: 4px 6px 10px 0 rgba(0, 0, 0, 0.432);
    transition: 200ms;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.432); */
  border: 1px solid rgba(0, 0, 0, 0.432);

  &:hover {
    border: 1px solid white;
  }
`;
