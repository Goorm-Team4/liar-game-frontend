import styled from 'styled-components';
import vars from '../../styles/vars';

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  padding: 2px;

  pre {
    font-weight: ${vars.fontWeight.medium};
    font-size: ${vars.fontSize['0.75x']};
    color: ${vars.colors.gray[500]};
  }

  button {
    background-color: transparent;
    border: none;
    margin: 4px;
    cursor: pointer;
    color: ${vars.colors.yellow[500]};
    font-size: ${vars.fontSize['1.25x']};
  }
`;

export const GameProfileContainer = styled.div`
  background-color: transparent;
`;
