import styled, { css } from 'styled-components';
import vars from '../../../styles/vars';

const sizeType = {
  'large': `width: 280px; height: 52px;`,
  'medium': `width: 160px; height: 52px;`,
  'small': `width: 76px; height: 36px; font-size: ${vars.fontSize['0.875x']}`,
  'extra-small': `width: 24px; height: 24px; border-radius: ${vars.borderRadius.full}; font-size: ${vars.fontSize['0.75x']};`,
};

const colorType = {
  blue: `background-color: ${vars.colors.blue[500]}; color: ${vars.colors.white}`,
  gray: `background-color: ${vars.colors.gray[200]}; color: ${vars.colors.gray[800]}`,
  white: `background-color: ${vars.colors.white}; color: ${vars.colors.blue[500]}; &:hover {box-shadow: none}`,
};

export const ButtonBox = styled.button`
  text-align: center;
  border: none;
  font-size: ${vars.fontSize['1.25x']};
  font-weight: ${vars.fontWeight.semibold};
  border-radius: ${vars.borderRadius['3x']};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1.5vmin 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    /* background-color: aliceblue; */
  }

  ${({ size, color }) => {
    const sizeStyle = sizeType[size] || sizeType.large;
    const colorStyle = colorType[color] || colorType.gray;

    return css`
      ${sizeStyle};
      ${colorStyle};
    `;
  }}
`;
