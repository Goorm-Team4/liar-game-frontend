import styled, { css } from 'styled-components';

export const LogoBox = styled.div`

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