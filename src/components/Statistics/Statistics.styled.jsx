import styled from 'styled-components';

export const StatList = styled.ul`
  width: 250px;
  margin: 0 auto;
  font-size: 20px;
  text-align: start;
`;

export const StatListItem = styled.li`
  margin-bottom: 5px;
`;

export const StatListTotal = styled(StatListItem)`
  color: #55f;
  font-weight: 500;
`;
