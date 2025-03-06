import styled, { css } from 'styled-components';
import vars from '../../../styles/vars';

const Role = () => {
  const data = {
    role: 'citizen',
    keyword: '호박',
  };

  return (
    <Container>
      <RoleText>
        당신은 <HighlightedText role={data.role}>{data.role}</HighlightedText>
        입니다!
      </RoleText>
      <KeywordText>단어: {data.keyword}</KeywordText>
    </Container>
  );
};

export default Role;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  margin: 30vh 0;
`;

const RoleText = styled.div`
  font-weight: ${vars.fontWeight.bold};
  font-size: ${vars.fontSize['1.25x']};
`;

const KeywordText = styled.div`
  font-weight: ${vars.fontWeight.bold};
  font-size: ${vars.fontSize['1.5x']};
`;

const HighlightStyle = {
  liar: vars.colors.red,
  citizen: vars.colors.blue[500],
};

const HighlightedText = styled.span`
  ${({ role }) => {
    const color = HighlightStyle[role];

    return css`
      color: ${color};
    `;
  }}
`;
