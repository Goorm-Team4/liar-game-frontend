import styled from "styled-components";
import vars from "../../../styles/vars";

const fontSizeStyles = {
  large: vars.fontSize['1.25x'],
  medium: vars.fontSize['0.875x'],
  small: vars.fontSize['0.75x'],
  default: vars.fontSize['1x'],
};

const widthSizeStyles = {
  large: '200px',
  medium: '150px',
  small: '100px',
  default: '200px',
};

export const InputBox = styled.input`
  padding: 10px;
  width: ${(props) => widthSizeStyles[props.size]};
  font-size: ${(props) => fontSizeStyles[props.size]};
  font-weight : ${vars.fontWeight.medium};
  border: 1px solid #ccc;
  border-radius: ${vars.borderRadius["1x"]};
  outline: none;

  &::placeholder {
    color : ${vars.colors.gray};
    opacity: 0.5;
  }

  &:focus {
  }
`
