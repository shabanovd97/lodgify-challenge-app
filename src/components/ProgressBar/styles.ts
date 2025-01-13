import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: ${({ theme }) => theme.spacing(3)};
  overflow: hidden;
`;

export const Progress = styled.div<{ percentage: number }>`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: ${({ theme, percentage }) =>
    percentage > 5 ? `0 ${theme.spacing(2)}` : 0};
  width: ${({ percentage }) => (percentage < 5 ? '5%' : `${percentage}%`)};
  height: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing(3)};
  transition: width 0.5s ease-in-out;
`;

export const ProgressText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightGrey};
`;
