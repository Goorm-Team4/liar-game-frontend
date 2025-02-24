import styled, { css } from 'styled-components';

export const ImgBox = styled.div`
  background-color: pink;
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
