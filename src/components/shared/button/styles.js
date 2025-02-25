import styled, { css } from 'styled-components';

export const ButtonBox = styled.button`
  ${({ size }) => {
    switch (size) {
      case "extra-small":
        return "padding: 0.5vmin 1vmin; font-size: 1vmin;";
      case "small":
        return "padding: 1vmin 2vmin; font-size: 1.5vmin;";
      case "medium":
        return "padding: 1.5vmin 3vmin; font-size: 2vmin;";
      case "large":
        return "padding: 2vmin 4vmin; font-size: 4vmin;";
      default:
        return "padding: 1.5vmin 3vmin; font-size: 2vmin;"; // 기본값
    }
  }}

  background-color: ${(props) => props.bgColor || "LightGray"};
  color: ${(props) => props.color || "black"};

  width: fit-content;
  border: none;
  border-radius: 6px;
  font-weight: bold;

  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1.5vmin 0 rgba(0, 0, 0, 0.2);
  }
  &:active {
    /* background-color: aliceblue; */
  }
`