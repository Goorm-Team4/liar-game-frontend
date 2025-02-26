import styled, { css } from 'styled-components';
import vars from '../../../styles/vars';

export const ImgBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 4px;
  padding: 4px;

  ${({ size }) => {
    return css`
      width: ${size};
      height: ${size};
    `;
  }}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// nickname style
const fontSizeStyles = {
  large: vars.fontSize['1.25x'],
  medium: vars.fontSize['0.875x'],
  small: vars.fontSize['0.75x'],
  default: vars.fontSize['1x'],
};

const fontColorStyles = {
  black: vars.colors.black,
  red: vars.colors.red,
  blue: vars.colors.blue[500],
};

export const NicknameBox = styled.div`
  display: flex;
  text-align: center;
  margin: 4px;
  padding: 4px;

  ${({ size, color, fontWeight }) => {
    const fontSize = fontSizeStyles[size] || fontSizeStyles.default;
    const fontColor = fontColorStyles[color] || fontColorStyles.black;
    const fontWeightStyle =
      vars.fontWeight[fontWeight] || vars.fontWeight.medium;

    return css`
      font-size: ${fontSize};
      color: ${fontColor};
      font-weight: ${fontWeightStyle};
    `;
  }}
`;
