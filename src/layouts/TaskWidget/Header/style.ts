import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(3)}`};
`;

export const HeaderText = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.large};
`;
