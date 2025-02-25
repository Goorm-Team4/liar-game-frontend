import styled, { css } from 'styled-components';

export const LogoBox = styled.div`
  ${({ size }) => {
    switch (size) {
      case "extra-small":
        return "width : 10vmin;";
      case "small":
        return "width : 15vmin;";
      case "medium":
        return "width : 20vmin;";
      case "large":
        return "width : 30vmin;";
      default:
        return "width : 15vmin;"; // 기본값
    }
  }}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;