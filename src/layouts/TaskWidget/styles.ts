import { styled } from 'styled-components';

export const Layout = styled.article`
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing(3.25)};
  padding: ${({ theme }) => theme.spacing(2)};
  width: 80%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.white};
`;
