import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  border-radius: ${({ theme }) => theme.spacing(3)};
  overflow: hidden;
`;

export const ProgressBarIndicator = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'percentage',
})<{ percentage: number }>`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: ${({ theme, percentage }) =>
    percentage > 3 ? `0 ${theme.spacing(2)}` : 0};
  width: ${({ percentage }) => `${percentage}%`};
  min-width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing(3)};
  box-sizing: border-box;
  transition:
    width 0.5s ease-in-out,
    padding 0.5s ease-in-out;
`;

export const ProgressBarText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightPrimaryText};
  user-select: none;
`;
