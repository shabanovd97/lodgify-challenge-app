import { styled } from 'styled-components';

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 0;
  margin: 0;
  list-style: none;
`;
